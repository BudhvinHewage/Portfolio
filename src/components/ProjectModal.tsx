import { Project, projectsConfig } from '@/config/projects';
import { techCategories, categoryColors } from '@/config/techCategories';
import {useState} from "react";
import react, {useEffect, useRef} from "react";

interface ProjectModalProps {
  selectedProject: Project | null;
  onClose: () => void;
}

export function ProjectModal({selectedProject, onClose}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [selectedProject]);

  return (
    <dialog ref={dialogRef} onClose={onClose} className="backdrop:bg-black/50 p-6 rounded-lg max-w-2xl w-full">
      <div key={selectedProject?.id} className="flex flex-col gap-4">
        
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">{selectedProject?.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-black font-bold"
          >
            ✕ Close
          </button>
        </div>
        <div className="flex gap-2">
          {selectedProject?.tags.map((tag) => {
            const category = techCategories[tag as keyof typeof techCategories] || "other";
            const colorClass = categoryColors[category as keyof typeof categoryColors] || "bg-gray-200";
            
            return (
              <span key={tag} className={`px-2 py-1 rounded text-xs ${colorClass}`}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className="mt-4">
          <p>Gallery and breakdown content will go here later...</p>
        </div>

      </div>
    </dialog>
  );
}