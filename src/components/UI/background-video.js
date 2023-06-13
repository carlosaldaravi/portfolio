const BackgroundVideo = ({src, srcWebm, srcPoster}) => {
  return (
    <div className="fixed inset-0 z-0 opacity-50">
      <video
        className="w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={srcPoster}
      >
        <source src={srcWebm} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
