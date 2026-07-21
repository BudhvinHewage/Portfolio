import { useState } from "react";

export function Gallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <img
          src={activeImage}
          className="w-full h-full object-cover transition-opacity duration-300"
          alt="Active preview"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {images.map((image, index) => {
          const isActive = image === activeImage;
          return (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={`w-24 aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 transition focus:outline-none ${
                isActive ? "border-blue-500" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={image} className="w-full h-full object-cover" alt="" />
            </button>
          );
        })}
      </div>
    </div>
  );
}