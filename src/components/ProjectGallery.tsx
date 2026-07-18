import { useState } from "react";

export function Gallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <img src={activeImage} className="w-full h-full object-cover transition-opacity duration-300" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(image)}
            className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-blue-500 focus:outline-none transition"
          >
            <img src={image} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}