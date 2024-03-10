"use client";

import { DetailVideo } from "@/app/components/DetailVideo";
import { useCategoryContext } from "@/context/CategoryContent";
import { useEffect, useState } from "react";

export interface IContentProps {
  contentName: string;
}
export const ContentDetails = ({ contentName }: IContentProps) => {
  const categoryContext = useCategoryContext();
  const [detailedContent, setDetailedContent] = useState<any | null>([]);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    const contentsList = categoryContext?.contentslist || [];
    const allContent = contentsList.filter(
      (content) => content.nameSrc === contentName
    );

    if (allContent.length > 0) {
      setDetailedContent(allContent[0]);
    } else {
      setDetailedContent(null);
    }
  };

  return (
    <>
      {detailedContent ? (
        <DetailVideo
          title={detailedContent.title}
          videoSrc={detailedContent.videoSrc}
          previewSrc={detailedContent.previewSrc}
          favorite={detailedContent.favorite}
          type={detailedContent.type}
          description={detailedContent.description}
          genre={detailedContent.genre}
        />
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
