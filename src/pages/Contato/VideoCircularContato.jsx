import ShortVideo from "../../features/shortVideos/components/ShortVideo";
const VideoCircularContato = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-16 min-[2560px]:justify-self-center">
      <div className="w-[clamp(22rem,53vw,42rem)] aspect-square rounded-full overflow-hidden">
        <ShortVideo
          source="https://res.cloudinary.com/du2lzkckm/video/upload/v1778994399/short-circular-contato_dz8twr.mp4"
          className="w-full h-[clamp(22rem,53vw,42rem)] object-cover"
        />
      </div>
    </div>
  );
};

export default VideoCircularContato;
