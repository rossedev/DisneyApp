"use client";

import { DetailVideo } from "@/app/components/DetailVideo";
import { useCategoryContext } from "@/context/CategoryContent";
import { useEffect, useState } from "react";

export const Series = () => {
  const categoryContext = useCategoryContext();
  const [series, setSeries] = useState<any | null>([]);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    const contentsList = categoryContext?.contentslist || [];
    const allseries = contentsList.filter(
      (content) => content.type === "serie"
    );

    if (allseries.length > 0) {
      setSeries([...allseries]);
    } else {
      setSeries(null);
    }
  };

  return (
    <>
      {series ? (
        <>
          {series.map((movie: any) => (
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
