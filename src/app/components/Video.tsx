export const Video = () => {

  return (
    <>
      <video
        className="w-full h-screen  object-top object-cover lg:object-fill animate-fade animate-ease-in-out animate-duration-1000"
        src="/disney-preview.mp4"
        autoPlay
        loop
        muted
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
        }}
      ></video>
      <video
        className="w-full absolute -bottom-0 blur-3xl -z-40"
        src="/disney-preview.mp4"
        autoPlay
        loop
        muted
      ></video>
    </>
  );
};
