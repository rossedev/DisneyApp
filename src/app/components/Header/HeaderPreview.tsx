import { BsStars } from "react-icons/bs";

interface IHeaderProps {
  handleChangeShowForms?: (name: string) => void;
}

export const HeaderPreview = ({ handleChangeShowForms }: IHeaderProps) => {
  const handleChangeButtons = (nameButton: string) => {
    if (!handleChangeShowForms) return;

    handleChangeShowForms(nameButton);
  };

  return (
    <header className="fixed w-screen py-4 z-10 backdrop-blur-sm top-0 px-8 lg:px-0">
      <div className="grid grid-cols-3 max-w-7xl mx-auto items-center justify-between">
        <p>Project Disney</p>
        <p className="justify-self-center">
          <BsStars />
        </p>

        <div className="flex flex-col sm:flex-row justify-end gap-5 text-sm text-center">
          <a
            href="#"
            className="border rounded-full inline-block border-white px-4 py-1 justify-self-end hover:bg-white hover:text-black duration-300"
            onClick={() => handleChangeButtons("login")}
          >
            LOG ON
          </a>
          <a
            href="#"
            className="border rounded-full inline-block border-white px-4 py-1 justify-self-end hover:bg-white hover:text-black duration-300"
            onClick={() => handleChangeButtons("register")}
          >
            SIGN UP
          </a>
        </div>
      </div>
    </header>
  );
};
