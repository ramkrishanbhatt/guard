import { Box, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Frames: React.FC = () => {
  const playerRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  const [timestamps, setTimestamps] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [frames, setFrames] = useState<string[]>([]);

  useEffect(() => {
    const captureFrames = async () => {
      if (playerRef.current) {
        const capturedFrames: string[] = [];
        for (let i = 0; i < timestamps.length; i++) {
          await setVideoTime(timestamps[i]);
          const frame = captureFrame();
          if (frame) {
            capturedFrames.push(frame);
          }
          await delay(500); 
        }
        setFrames(capturedFrames);
      }
    };
    captureFrames();
  }, [timestamps]);

  const setVideoTime = (time: number): Promise<void> => {
    return new Promise((resolve) => {
      if (playerRef.current) {
        const player =
          playerRef.current.getInternalPlayer() as HTMLVideoElement;
        player.currentTime = time;
        player.onseeked = () => resolve();
      }
    });
  };

  const captureFrame = (): string | null => {
    if (playerRef.current && canvasRef.current) {
      const player = playerRef.current.getInternalPlayer() as HTMLVideoElement;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(player, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/png");
      }
    }
    return null;
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Box
      width={"100%"}
      p={1}
      border={"1px solid black"}
      mt={1}
      ml={1}
      height={"60vh"}
			display={"flex"}
			flexDirection={"row"}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        controls={true}
        width="50%"
        height="auto"
        config={{ file: { attributes: { crossOrigin: "anonymous" } } }}
      />
      <canvas
        ref={canvasRef}
        width={140}
        height={100}
        style={{ display: "none" }}
      />
      <Stack
        useFlexGap
        flexWrap={"wrap"}
        direction={"row"}
        width={"50%"}
        spacing={1}
      >
        <div>
          {frames.map((frame, index) => (
            <img key={index} src={frame} alt={`Frame ${index}`} />
          ))}
        </div>
      </Stack>
    </Box>
  );
};

export default Frames;
