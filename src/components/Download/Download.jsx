import { useState } from 'react';
import {
  DownloadContainer,
  DownloadLeftConatiner,
  DownloadLeftMaintitle,
  DownloadRightConatiner,
  StyledIframe,
  VideoContainer,
} from './Download.styled';

const Download = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <DownloadContainer>
      <DownloadLeftConatiner>
        <DownloadLeftMaintitle>Секонд-хенд и СТОК оптом.</DownloadLeftMaintitle>
      </DownloadLeftConatiner>
      <DownloadRightConatiner>
        <VideoContainer>
          <StyledIframe
            src={`https://www.youtube.com/embed/JcCZmNKVj_0`} // Используйте "embed" вместо "watch"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </DownloadRightConatiner>
    </DownloadContainer>
  );
};

export default Download;
