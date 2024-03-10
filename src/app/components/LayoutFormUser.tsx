import { Loading } from "./Loading";

export const LayoutFormUser = (props: any) => {
  const { children, title, nameButton, onSubmit, loading, errors } = props;

  return (
    <div className="w-full animate-fade animate-ease-in-out animate-duration-400 backdrop-blur-0 lg:backdrop-blur-xl border rounded-md">
      <div className="flex flex-col justify-center px-4 py-8">
        <form onClick={onSubmit}>
          <label className="text-sm font-bold text-center mb-4">{title}</label>
          {children}
          <button
            type="submit"
            className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading && <Loading />}
            {nameButton}
          </button>

          {errors.general && (
            <p className="text-sm text-red-500 mt-3 text-center">
              {errors.general}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
