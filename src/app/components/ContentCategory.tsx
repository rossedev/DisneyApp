import { CardVideo } from "./Cards/CardVideo";

export const ContentCategory = ({ listContent, categorySelect }: any) => {
  return (
    <div className="">
      <h4 className="text-lg mb-2 mt-4">List of content {`>`}</h4>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {listContent.map(
          (content: any) =>
            content.category === categorySelect && (
              <CardVideo
                videoSrc={content.videoSrc}
                previewSrc={content.previewSrc}
                title={content.title}
                category={content.category}
                nameSrc={content.nameSrc}
              />
            )
        )}
        {listContent.every(
          (content: any) => content.category !== categorySelect
        ) && <p>There is no content in this category</p>}
      </div>
    </div>
  );
};