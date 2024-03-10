"use client";

import { CardVideo } from "@/app/components/Cards/CardVideo";
import { useCategoryContext } from "@/context/CategoryContent";
import { useEffect, useState } from "react";

interface IContentListProps {
  nameContent: string;
  title: string;
}
export const ContentList = ({ nameContent, title }: IContentListProps) => {
  const categoryContext = useCategoryContext();
  const [listContent, setListContent] = useState<any | null>([]);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    const contents = categoryContext?.contents || [];
    const allListContent = contents.filter(
      (content) => content.type === nameContent
    );

    if (allListContent.length > 0) {
      setListContent([...allListContent]);
    } else {
      setListContent(null);
    }
  };

  return (
    <>
      <h3 className="text-center font-bold text-xl mt-5 mb-10">{title}</h3>   
      {listContent ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {listContent.map((movie: any) => (
            <CardVideo
              videoSrc={movie.videoSrc}
              previewSrc={movie.previewSrc}
              title={movie.title}
              category={movie.category}
              nameSrc={movie.nameSrc}
            />
          ))}
        </div>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
