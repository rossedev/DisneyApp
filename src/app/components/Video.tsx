export const Video = () => {
  const videoPreview = `${process.env.NEXT_PUBLIC_STORAGE_FIREBASE}/v0/b/disney-18bea.appspot.com/o/disney-preview.mp4?alt=media&token=ff6f3c62-be4e-4c4e-a066-16f409fe22be`;

  return (
    <>
      <video
        className="w-full h-screen  object-top object-cover lg:object-fill animate-fade animate-ease-in-out animate-duration-1000"
        src={videoPreview}
        autoPlay
        loop
        muted
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
        }}
      ></video>
      <video
        className="w-full absolute -bottom-0 blur-3xl -z-40"
        src={videoPreview}
        autoPlay
        loop
        muted
      ></video>
    </>
  );
};
