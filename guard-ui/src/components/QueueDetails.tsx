import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Grid,
  IconButton,
  Typography,
  LinearProgress,
  styled,
} from "@mui/material";
import { EditOutlined, StarOutline, Upload } from "@mui/icons-material";
import {
  StyledLargeTypography,
  StyledMediumTypography,
  StyledShadowedStack,
  StyledSmallTypography,
} from "./components.Style";
import Wave from "../wave.jpg";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const QueueDetails = ({
  onClick,
  classes,
}: {
  onClick: any;
  classes: any[];
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("abc");
  const [description, setDescription] = useState<string>("abc");
  const [tags, setTags] = useState<string>("Sports");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [url, setUrl] = useState("");
  const [videos, setVideos] = useState<any>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "token AvDdDrOwqrmnP1T5E6tJsHwjrA9qDeth"
      );

      const formdata = new FormData();
      formdata.append("media", e.target.files[0], "Boxing.mp4");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      fetch("https://api.thehive.ai/api/v2/task/sync", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const fileName = file.name;
      const contentType = file.type;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const fileContent = reader.result?.toString().split(",")[1]; // get the base64 part

        const response = await fetch(
          "https://tfqzrdj0ef.execute-api.ap-south-1.amazonaws.com/prod/videos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              tags: tags.split(",").map((tag) => tag.trim()),
              fileContent,
              fileName,
              contentType,
            }),
          }
        );

        setIsLoading(false);

        if (response.ok) {
          const videoData = await response.json();
          const formdata = new FormData();
          formdata.append("media", file, "test.mp4");

          const requestOptions = {
            method: "POST",
            headers: {
              Authorization: "token AvDdDrOwqrmnP1T5E6tJsHwjrA9qDeth",
            },
            body: formdata,
          };

          const hiveRes = await fetch(
            "https://api.thehive.ai/api/v2/task/sync",
            requestOptions
          );
          if (hiveRes.ok) {
            console.log(hiveRes);
          }
          console.log("Video uploaded successfully:", videoData);
          setUrl(videoData.url.S);
        } else {
          const errorData = await response.json();
          console.error("Error uploading video:", errorData);
          setMessage(`Error uploading video: ${errorData.error}`);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        setMessage("Error reading file.");
        setIsLoading(false);
      };
    } catch (error: any) {
      console.error("Error uploading video:", error);
      setMessage(`Error uploading video: ${error.message}`);
      setIsLoading(false);
    }
  };

  const getVideosByTag = async (tag: string) => {
    setSelectedTag(tag);
    const response = await fetch(
      `http://127.0.0.1:8000/classify-videos/?tags=${tag}`
    );
    if (response.ok) {
      const videosData = await response.json();
      setVideos(() => videosData);
    } else {
      setVideos(() => [
        {
          video_id: "66a78d5782dcf699a8aa486a",
          frames: [
            {
              time: 0.04170833333333333,
              score: 0.9999977350234984,
            },
            {
              time: 0.9592916666666668,
              score: 0.9999960660934448,
            },
            {
              time: 2.9612916666666664,
              score: 0.9250258207321168,
            },
            {
              time: 3.9622916666666663,
              score: 0.000001123611241382605,
            },
            {
              time: 6.965291666666666,
              score: 0.978612184524536,
            },
            {
              time: 7.966291666666666,
              score: 0.21982699632644653,
            },
            {
              time: 8.967291666666666,
              score: 0.9831867218017578,
            },
            {
              time: 10.969291666666663,
              score: 0.9798177480697632,
            },
            {
              time: 11.970291666666666,
              score: 0.8857378363609314,
            },
            {
              time: 12.971291666666666,
              score: 0.000002266412366225268,
            },
            {
              time: 13.972291666666663,
              score: 0.00000101952423392504,
            },
            {
              time: 14.973291666666666,
              score: 0.9999979734420776,
            },
          ],
        },
      ]);
    }
  };

  const getAverageScore = (data: any[]) => {
    let sum = 0;
    data.forEach((_) => {
      sum += _?.score;
    });
    return sum / data.length;
  };

  const data = [
    {
      text: "Total Volume",
      value: "X,XXX,XXX",
    },
    {
      text: "AI Moderated Volume",
      value: "X,XXX,XXX",
    },
    {
      text: "Queued Volume",
      value: "X,XXX,XXX",
    },
    {
      text: "Transferred Volume",
      value: "X,XXX,XXX",
    },
  ];

  useEffect(()=>{
    getVideosByTag(classes[0].class);
  },[])

  return (
    <>
      <Grid container spacing={2} columns={{ md: 12 }}>
        <Grid item container md={5} spacing={2}>
          {data.map((_) => (
            <Grid item md={6}>
              <StyledShadowedStack spacing={0.5}>
                <StyledSmallTypography color={"gray"}>
                  {_.text}
                </StyledSmallTypography>
                <StyledMediumTypography display={"flex"}>
                  {_.value}&nbsp;
                  <span
                    style={{
                      border: "1px solid #BFD7ED",
                      borderRadius: "50px",
                      padding: "2px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      fontSize: "8px",
                      height: "fit-content",
                      marginTop: 3,
                    }}
                  >
                    XX.XX %
                  </span>
                </StyledMediumTypography>
                <img src={Wave} width={"100%"} height={"35px"} />
              </StyledShadowedStack>
            </Grid>
          ))}
        </Grid>
        <Grid item md={1.5}>
          <StyledShadowedStack
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            height={"213px"}
            spacing={0.5}
          >
            <IconButton component="label" sx={{ alignSelf: "end", p: 0 }}>
              <Upload />
              <VisuallyHiddenInput
                //onChange={handleFileChange}
                type="file"
              />
            </IconButton>
            <StyledShadowedStack
              sx={{
                boxShadow: "none",
                height: "-webkit-fill-available",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledLargeTypography flex={1}>
                Add New Queue
              </StyledLargeTypography>
            </StyledShadowedStack>
          </StyledShadowedStack>
        </Grid>
        <Grid item container spacing={0.5} md={5.5}>
          <Grid item md={12}>
            <StyledShadowedStack
              sx={{
                background: "#006dd9",
                color: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledMediumTypography alignItems={"center"}>
                Queue Statics
              </StyledMediumTypography>
            </StyledShadowedStack>
          </Grid>
          <Grid item md={6}>
            {statics1.map((_) => (
              <StyledShadowedStack
                sx={{ flexDirection: "row" }}
                justifyContent={"space-between"}
                mb={0.5}
              >
                <StyledSmallTypography color={"gray"}>
                  {_.text}
                </StyledSmallTypography>
                <StyledSmallTypography>{_.value}</StyledSmallTypography>
              </StyledShadowedStack>
            ))}
          </Grid>
          <Grid item md={6}>
            {statics2.map((_) => (
              <StyledShadowedStack
                sx={{ flexDirection: "row" }}
                justifyContent={"space-between"}
                mb={0.5}
              >
                <StyledSmallTypography color={"gray"}>
                  {_.text}
                </StyledSmallTypography>
                <StyledSmallTypography>{_.value}</StyledSmallTypography>
              </StyledShadowedStack>
            ))}
          </Grid>
        </Grid>
        <Grid item md={12}>
          <StyledShadowedStack
            sx={{
              background: "#006dd9",
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            fontWeight={600}
          >
            Live Queuing Details
          </StyledShadowedStack>
        </Grid>
        <Grid item md={2} marginBottom={1}></Grid>
        <Grid item md={10} marginBottom={1}>
          <Stack
            color={"gray"}
            fontSize={"12px"}
            fontWeight={600}
            direction={"row"}
          >
            <StyledSmallTypography
              ml={1.5}
              display={"flex"}
              alignItems={"flex-start"}
              flex={1}
            >
              Item Details
            </StyledSmallTypography>
            <StyledSmallTypography width={150}>Pin Queue</StyledSmallTypography>
            <StyledSmallTypography width={150}>
              Live Moderators
            </StyledSmallTypography>
            <StyledSmallTypography width={140}>
              Frames Count
            </StyledSmallTypography>
            <StyledSmallTypography width={170}>Score</StyledSmallTypography>
          </Stack>
        </Grid>
      </Grid>
      <Box flex={1} height={"inherit"} overflow={"hidden"}>
        <Grid
          container
          spacing={1}
          columns={{ md: 12 }}
          height={"inherit"}
          overflow={"hidden"}
        >
          <Grid height={"inherit"} overflow={"auto"} p={1} item md={2}>
            {classes.map((_) => (
              <StyledShadowedStack
                mb={1}
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  ":hover": {
                    cursor: "pointer",
                    bgcolor: "#006dd9",
                    color: "white",
                  },
                  bgcolor: selectedTag === _.class ? "#006dd9" : "white",
                  color: selectedTag === _.class ? "white" : "black",
                }}
                maxWidth={"-webkit-fill-available"}
                p={2}
                onClick={() => {
                  getVideosByTag(_.class);
                }}
              >
                <StyledSmallTypography
                  maxWidth={"-webkit-fill-available"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  height={"24px"}
                >
                  {_.class}
                </StyledSmallTypography>
              </StyledShadowedStack>
            ))}
          </Grid>
          <Grid height={"inherit"} overflow={"auto"} pl={1} item md={10}>
            {videos.length ? (
              videos.map((_: any) => (
                <StyledShadowedStack
                  mb={1}
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    flexDirection: "row",
                    ":hover": {
                      cursor: "pointer",
                      bgcolor: "#006dd9",
                      color: "white",
                    },
                  }}
                  maxWidth={"-webkit-fill-available"}
                  onClick={() => {
                    const times = _?.frames?.map((_:any)=>_?.time)
                    onClick(_?.video_id || "", times);
                  }}
                >
                  <StyledSmallTypography
                    maxWidth={"-webkit-fill-available"}
                    textOverflow={"ellipsis"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    flex={1}
                    display={"flex"}
                  >
                    {_?.video_id}
                  </StyledSmallTypography>
                  <Typography fontSize={"6px"} width={150}>
                    <StarOutline fontSize="small" />
                  </Typography>
                  <Typography width={150}>10</Typography>
                  <Typography width={150}>{_?.frames?.length}</Typography>
                  <Typography width={150}>
                    {parseFloat(getAverageScore(_?.frames).toFixed(4))}
                  </Typography>
                </StyledShadowedStack>
              ))
            ) : (
              <StyledShadowedStack
                mb={1}
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                maxWidth={"-webkit-fill-available"}
              >
                <StyledMediumTypography>No data found.</StyledMediumTypography>
              </StyledShadowedStack>
            )}
          </Grid>
        </Grid>
      </Box>
      {/* <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        spacing={1}
        mt={1}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#177694",
              },
            },
            width: "60%",
          }}
          size="small"
          type="file"
          onChange={handleFileChange}
        />
        <Button
          sx={{
            backgroundColor: "lightBlue",
            borderRadius: "50px",
            height: "40px",
            color: "black",
          }}
          variant="contained"
          onClick={handleUpload}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload Video"}
        </Button>
      </Stack> */}
    </>
  );
};

export default QueueDetails;

const statics1 = [
  {
    text: "Average AHT",
    value: "XX.XX Sec",
  },
  {
    text: "Closed on Time",
    value: "XX.XX %",
  },
  {
    text: "Total Review Time",
    value: "XX:XX:XX",
  },
  {
    text: "Total Live Moderators",
    value: "XXX",
  },
];

const statics2 = [
  {
    text: "Total Breached Items",
    value: "XX.XX Sec",
  },
  {
    text: "# Queues Breached",
    value: "XX",
  },
  {
    text: "Average Queue Aging",
    value: "XX:XX:XX",
  },
  {
    text: "XXXXXXX",
    value: "XXX",
  },
];

const queueData = [
  {
    text: "Hate Speech",
    value: 1,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Bullying",
    value: 0.9,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Personal Information",
    value: 0.8,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Spam",
    value: 0.7,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Nudity",
    value: 0.5,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Graphic Violence",
    value: 0.4,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Copyright Violations",
    value: 1,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Self Harm",
    value: 0.3,
    moderators: 10,
    volume: "XXX,XXX",
  },
  {
    text: "Pass to SME",
    value: 0.7,
    moderators: 10,
    volume: "XXX,XXX",
  },
];
