import React from 'react';

const YoutubeEmbed = ({ embedId, title, className }) => {
  return (
    <div className={`relative video-responsive ${className}`}>
      <iframe
        width={"800"}
        height={"600"}
        src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&amp;rel=0&amp;showinfo=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className='rounded-lg w-full max-h-[117px] sm:max-h-full sm:h-[95%] transition-all duration-300'
      />
    </div>
  );
};

export default YoutubeEmbed;