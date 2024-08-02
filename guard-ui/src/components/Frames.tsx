import { Box, CircularProgress, Stack } from "@mui/material";
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
  const playerRef = useRef<ReactPlayer>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const [timestamps, setTimestamps] = useState<number[]>(times);
  const [frames, setFrames] = useState<string[]>([]);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const downloadVideo = async () => {
      try {
        const cacheBustedUrl = `http://3.143.254.4${url}?cache-bust=${Date.now()}`;
        const response = await fetch(cacheBustedUrl, {
          headers: { Origin: window.location.origin },
        });
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideoBlobUrl(blobUrl);
      } catch (error) {
        console.error("Error downloading video:", error);
      }
    };

    downloadVideo();
  }, [url]);

  useEffect(() => {
    const captureFrames = async () => {
      if (playerRef.current) {
        const player = playerRef.current.getInternalPlayer() as HTMLVideoElement;
        // Set canvas dimensions to match video dimensions
        if (canvasRef.current) {
          canvasRef.current.width = 500;
          canvasRef.current.height = 300;
        }
        const capturedFrames: string[] = [];
        for (let i = 0; i < timestamps.length; i++) {
          await setVideoTime(timestamps[i]);
          const frame = captureFrame(timestamps[i]);
          if (frame) {
            capturedFrames.push(frame);
          }
        }
        setFrames(capturedFrames);
        setLoading(false);
      }
    };

    if (videoBlobUrl) {
      captureFrames();
    }
  }, [timestamps, videoBlobUrl]);

  const setVideoTime = (time: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      const player = playerRef.current?.getInternalPlayer() as HTMLVideoElement;
      if (player) {
        console.log(`Setting video time to ${time} seconds`);
        player.currentTime = time;
        const handleSeeked = () => {
          console.log(`Seeked to ${player.currentTime} seconds`);
          if (Math.abs(player.currentTime - time) < 0.1) {
            resolve();
            player.removeEventListener("seeked", handleSeeked);
          }
        };
        const handleError = (error: Event) => {
          console.error("Error seeking video:", error);
          reject(error);
        };
        player.addEventListener("seeked", handleSeeked);
        player.addEventListener("error", handleError, { once: true });
      }
    });
  };

  const captureFrame = (time: any): string | null => {
    if (playerRef.current && canvasRef.current) {
      const player = playerRef.current.getInternalPlayer() as HTMLVideoElement;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        console.log(`Capturing frame at time ${player.currentTime}`);
        context.drawImage(player, 0, 0, canvas.width, canvas.height);
        context.font = "bold 30px Arial";
        context.fillStyle = "white";
        context.fillText(`Time: ${time.toFixed(2)}s`, 10, canvas.height - 20);
        return canvas.toDataURL("image/png");
      }
    }
    return null;
  };

  const logDetailedError = (e: Event) => {
    const videoElement = e.target as HTMLVideoElement;
    console.error("ReactPlayer error:", {
      src: videoElement.src,
      currentSrc: videoElement.currentSrc,
      networkState: videoElement.networkState,
      readyState: videoElement.readyState,
      error: videoElement.error,
    });
  };

  return (
    <StyledShadowedStack
      width={"inherit"}
      height={"-webkit-fill-available"}
      display={"flex"}
      sx={{ flexDirection: "row", p: 1 }}
      overflow={"hidden"}
      border={"2px solid #006dd9"}
    >
      {!videoBlobUrl ? (
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <ReactPlayer
            ref={playerRef}
            url={videoBlobUrl}
            controls={true}
            width="82%"
            height="100%"
            style={{ background: "black" }}
            config={{ file: { attributes: { crossOrigin: "anonymous" } } }}
            playing={false}
            onError={logDetailedError}
          />

          <canvas
            ref={canvasRef}
            width={140}
            height={100}
            style={{ display: "none" }}
          />
          {loading ? (
            <Box
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"100%"}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Stack
              useFlexGap
              flexWrap={"wrap"}
              direction={"row"}
              width={"18%"}
              spacing={1}
              overflow={"auto"}
              maxHeight={"-webkit-fill-available"}
              ml={1}
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={1}
            >
              {frames.map((frame, index) => (
                <StyledShadowedStack
                  key={index}
                  sx={{
                    p: 0,
                    borderRadius: 0,
                    ":hover": { cursor: "pointer", transform: "scale(1.39)", zIndex: 1000 },
                    height: "max-content",
                    transition: "transform 0.3s ease",
                  }}
                  border={
                    index === selectedFrame ? "3px solid #006dd9" : "none"
                  }
                  width={"70%"}
                >
                  <img
                    onClick={() => {
                      onClick(timestamps[index]);
                      setSelectedFrame(index);
                      setVideoTime(timestamps[index]).catch((error) => {
                        console.error(
                          `Error setting video time to ${timestamps[index]}:`,
                          error
                        );
                      });
                    }}
                    key={index}
                    src={frame}
                    alt={`Frame ${index}`}
                    width={"100%"}
                  />
                </StyledShadowedStack>
              ))}
            </Stack>
          )}
        </>
      )}
    </StyledShadowedStack>
  );
};

export default Frames;
