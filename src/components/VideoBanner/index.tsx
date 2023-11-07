import { VideoBannerContainer } from "./styles";

import backgroundVideo from "../../assets/bee-site-background-video.mp4";
import poster from "../../assets/IMG_5531.jpg";

export function VideoBanner() {
  return (
    <VideoBannerContainer>
      <video
        loop
        muted
        autoPlay
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        id="background-video"
        src={backgroundVideo}
        poster={poster}
      />
    </VideoBannerContainer>
  )
}