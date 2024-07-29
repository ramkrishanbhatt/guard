import { Box, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { StyledShadowedStack } from "./components.Style";

const Frames = ({
  url,
  times,
  onClick,
}: {
  url: string;
  times: number[];
  onClick: any;
}) => {
  const playerRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>(url);
  const [timestamps, setTimestamps] = useState<number[]>(times);
  const [frames, setFrames] = useState<string[]>([]);
  const [selectedFrame, setSelectedFrame] = useState(0);

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
          // await delay(500);
        }
        setFrames(capturedFrames);
      }
    };
    captureFrames();
  }, [timestamps]);

  const setVideoTime = (time: number): Promise<void> => {
    return new Promise((resolve) => {
      if (playerRef.current) {
        const player = (playerRef?.current?.getInternalPlayer() as any) || {};
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
    <StyledShadowedStack
      width={"100%"}
      height={"inherit"}
      display={"flex"}
      sx={{ flexDirection: "row" }}
      overflow={"hidden"}
    >
      <ReactPlayer
        ref={playerRef}
        url={`http://127.0.0.1:8000${url}`}
        controls={true}
        width="60%" //change
        height="300px" //change
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
        overflow={"auto"}
        height={"inherit"}
        ml={1}
      >
        {frames.map((frame, index) => (
          <StyledShadowedStack
            sx={{ p: 0, borderRadius: 0, ":hover": { cursor: "pointer" } }}
            border={index === selectedFrame ? "3px solid #006dd9" : "none"}
          >
            <img
              onClick={() => {
                onClick(timestamps[index]);
                setSelectedFrame(index);
                setVideoTime(timestamps[index]);
              }}
              key={index}
              src={frame}
              alt={`Frame ${index}`}
              width={"135px"}
            />
          </StyledShadowedStack>
        ))}
      </Stack>
    </StyledShadowedStack>
  );
};

export default Frames;
