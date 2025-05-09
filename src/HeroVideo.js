import ReactPlayer from 'react-player';

export default function HeroVideo() {
  return (
    <div className="hero">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=0pVkiod6V0U"
        playing
        controls
        width="100%"
        height="400px"
      />
    </div>
  );
}
