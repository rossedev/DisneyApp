import { BiCameraMovie } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { RiMovieFill } from "react-icons/ri";

interface IDetailVideoProps {
  title: string;
  videoSrc: string;
  previewSrc: string;
  favorite: string;
  type: string;
  description: string;
  genre: string;
}
export const DetailVideo = ({
  title,
  videoSrc,
  previewSrc,
  favorite,
  type,
  description,
  genre,
}: IDetailVideoProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <video
          className="rounded-md"
          src={videoSrc}
          controls
          poster={previewSrc}
        ></video>
      </div>
      <div className="w-full md:mt-9">
        {favorite && (
          <div className="flex items-center gap-2">
            <GoStarFill color="yellow" />
            <p>Is one of your favorites!</p>
          </div>
        )}

        <div className="flex items-center gap-2">
          <BiCameraMovie />
          <p>{type}</p>
        </div>

        <div className="mt-10">
          <h4 className="font-semibold mb-2">Summary</h4>
          <p>{description}</p>
        </div>

        <div className="flex items-center gap-2 mt-5">
          <RiMovieFill />
          <p>{genre}</p>
        </div>
      </div>
    </div>
  );
};
