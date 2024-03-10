import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IVideoCardProps {
  videoSrc: string;
  previewSrc: string;
  title: string;
  category: string;
  nameSrc: string;
}

export const CardVideo = ({
  category,
  videoSrc,
  previewSrc,
  title,
  nameSrc,
}: IVideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={`/home/${category}/${nameSrc}`}>
      <div
        className="relative overflow-hidden transition-transform duration-300 ease-in-out transform-gpu hover:scale-105 rounded-md min-h-full max-h-52"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={previewSrc}
          alt={title}
          className={`w-full h-full object-cover transition-opacity ${
            isHovered ? "opacity-20" : "opacity-100"
          }`}
          width={500}
          height={500}
        />

        <video
          src={videoSrc}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        ></video>

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};
