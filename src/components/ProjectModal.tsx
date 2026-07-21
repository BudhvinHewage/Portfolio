import { Project } from '@/config/projects';
import { techCategories, categoryColors } from '@/config/techCategories';
import { useEffect, useRef } from "react";
import { Gallery } from "@/components/ProjectGallery";

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
    <dialog 
    ref={dialogRef} 
    onClose={onClose}
    onClick={(e) => {
        if (e.target == dialogRef.current) onClose();
    }} 
    className="        
        backdrop:bg-black/50
        rounded-lg
        w-full
        max-w-5xl
        max-h-[90vh]
        overflow-y-auto">
        <div className='p-6'>
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
                <div className="gap-6 lg:flex-row flex flex-1 p-4">
                    <Gallery images={selectedProject?.gallery ?? []} />
                    <div className='flex flex-col min-w-0 flex-1 gap-3'>
                        <div className="flex flex-wrap gap-2">
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
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 block">
                            {selectedProject?.breakdown}
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 block">
                            <ul className="list-disc list-outside">
                                {selectedProject?.outcomes.map((outcome, index) => {
                                    return <li key={index}>{outcome}</li>;
                                })}
                            </ul>
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 block flex-wrap">
                            <a href={selectedProject?.githubUrl} className="text-blue-600 underline">View on GitHub</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
  );
}