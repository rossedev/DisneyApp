import Image from "next/image";

export interface ICardProps {
  name?: string | undefined;
  title: string;
  img: string;
  description: string;
  onClickSelect?: (category: string) => any;
}

export const Card = (props: ICardProps) => {
  const { name, title, img, description, onClickSelect } = props;

  const handleClickCard = () => {
    if (onClickSelect && name) {
      onClickSelect(name);
    }
  };

  return (
    <div className="w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
      <div className="h-40 w-72">
        <Image
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125"
          src={img}
          alt="fff"
          fill={true}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

      <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
        <h1 className="font-dmserif text-2xl font-bold text-white">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <button
          className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
          onClick={handleClickCard}
        >
          See More
        </button>
      </div>
    </div>
  );
};
