"use client";

import { DetailVideo } from "@/app/components/DetailVideo";
import { useCategoryContext } from "@/context/CategoryContent";
import { useEffect, useState } from "react";

export const Movies = () => {
  const categoryContext = useCategoryContext();
  const [movies, setMovies] = useState<any | null>([]);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    const contentsList = categoryContext?.contentslist || [];
    const allMovies = contentsList.filter(
      (content) => content.type === "movie"
    );

    if (allMovies.length > 0) {
      setMovies([...allMovies]);
    } else {
      setMovies(null);
    }
  };

  return (
    <>
      {movies ? (
        <>
          {movies.map((movie: any) => (
            <div className="mb-10">
              <DetailVideo
                title={movie.title}
                videoSrc={movie.videoSrc}
                previewSrc={movie.previewSrc}
                favorite={movie.favorite}
                type={movie.type}
                description={movie.description}
                genre={movie.genre}
              />
            </div>
          ))}
        </>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
