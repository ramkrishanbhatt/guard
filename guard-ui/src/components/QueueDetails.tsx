import React, { useState } from "react";
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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
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

        const response = await fetch("", {
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
        });

        setIsLoading(false);

        if (response.ok) {
          const videoData = await response.json();
          console.log("Video uploaded successfully:", videoData);
          setMessage("Video uploaded successfully!");
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
  return (
    <Box px={3} py={1}>
      <Grid container spacing={{ md: 0.5 }} columns={{ md: 12 }}>
        <Grid item md={2}>
          {data.map((_) => (
            <Box
              mb={0.5}
              bgcolor={"#47B9DF"}
              px={3}
              py={1}
              color={"darkblue"}
              fontWeight={600}
            >
              {_.text}
            </Box>
          ))}
        </Grid>
        <Grid item md={1.3}>
          {data.map((_) => (
            <Box
              mb={0.5}
              bgcolor={"#5296C4"}
              px={3}
              py={1}
              color={"darkblue"}
              fontWeight={600}
            >
              {_.value}
            </Box>
          ))}
        </Grid>
        <Grid item md={1.2}>
          {data.map((_) => (
            <Box
              mb={0.5}
              bgcolor={"#5296C4"}
              px={3}
              py={1}
              color={"darkblue"}
              fontWeight={600}
            >
              XX.XX %
            </Box>
          ))}
        </Grid>
        <Grid item md={1.5}>
          <Box
            mb={0.5}
            bgcolor={"#47B9DF"}
            p={1}
            color={"darkblue"}
            fontWeight={600}
            height={"136px"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"20px"}
            flexDirection={"column"}
          >
            <IconButton component="label" sx={{ alignSelf: "end", p: 0 }}>
              <Upload />
              <VisuallyHiddenInput type="file" />
            </IconButton>
            <Box p={3}>Add New Queue</Box>
          </Box>
        </Grid>
        <Grid mt={"-26px"} item md={6}>
          <Box
            mb={0.5}
            bgcolor={"#F3879D"}
            color={"white"}
            fontWeight={600}
            height={"22px"}
          >
            Queue Statics
          </Box>
          <Box
            mb={0.5}
            bgcolor={"#5296C4"}
            p={1}
            color={"darkblue"}
            fontWeight={600}
            height={"136px"}
          >
            <Grid container spacing={{ md: 0.5 }} columns={{ md: 12 }}>
              <Grid item md={4}>
                {statics1.map((_) => (
                  <Box
                    mb={0.5}
                    bgcolor={"#DADADA"}
                    p={1}
                    color={"darkblue"}
                    fontWeight={600}
                    fontSize={"12px"}
                  >
                    {_.text}
                  </Box>
                ))}
              </Grid>
              <Grid item md={2}>
                {statics1.map((_) => (
                  <Box
                    mb={0.5}
                    bgcolor={"#DADADA"}
                    p={1}
                    color={"darkblue"}
                    fontWeight={600}
                    fontSize={"12px"}
                  >
                    {_.value}
                  </Box>
                ))}
              </Grid>
              <Grid item md={4}>
                {statics2.map((_) => (
                  <Box
                    mb={0.5}
                    bgcolor={"#DADADA"}
                    p={1}
                    color={"darkblue"}
                    fontWeight={600}
                    fontSize={"12px"}
                  >
                    {_.text}
                  </Box>
                ))}
              </Grid>
              <Grid item md={2}>
                {statics2.map((_) => (
                  <Box
                    mb={0.5}
                    bgcolor={"#DADADA"}
                    p={1}
                    color={"darkblue"}
                    fontWeight={600}
                    fontSize={"12px"}
                  >
                    {_.value}
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            mb={0.5}
            bgcolor={"#F3879D"}
            color={"white"}
            fontWeight={600}
            height={"22px"}
          >
            Live Queuing Details
          </Box>
          <Stack
            color={"darkblue"}
            fontSize={"12px"}
            fontWeight={600}
            direction={"row"}
          >
            <Typography flex={1}>Queue Ageing</Typography>
            <Typography width={100}>Pin Queue</Typography>
            <Typography width={125}>Live Moderators</Typography>
            <Typography width={120}>Queue Volume</Typography>
          </Stack>
        </Grid>
        <Grid container spacing={{ md: 0.5 }} height={"50vh"} overflow={"auto"} columns={{ md: 12 }}>
          <Grid item md={2}>
            <Box
              mb={0.5}
              bgcolor={"#47B9DF"}
              p={1}
              color={"darkblue"}
              fontWeight={600}
            >
              {classes.map((_) => (
                <Box
                  mb={0.5}
                  bgcolor={"#DADADA"}
                  p={0.37}
                  color={"darkblue"}
                  fontWeight={600}
                  fontSize={"12px"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography
                    textOverflow={"ellipsis"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                  >
                    {_.class}{" "}
                  </Typography>
                  <IconButton
                    onClick={onClick}
                    size="small"
                    sx={{ p: 0, height: "8px" }}
                  >
                    <EditOutlined />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box
              mb={0.5}
              bgcolor={"#5296C4"}
              p={1}
              color={"darkblue"}
              fontWeight={600}
            >
              {classes.map((_) => (
                <Box
                  mb={0.5}
                  bgcolor={"#DADADA"}
                  p={0.37}
                  color={"darkblue"}
                  fontWeight={600}
                  fontSize={"12px"}
                >
                  <Stack
                    color={"darkblue"}
                    fontSize={"12px"}
                    fontWeight={600}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Box flex={1}>
                      <Box
                        height={"10px"}
                        width={`${_.average_score * 100}%`}
                        sx={{
                          background:
                            "linear-gradient(to right, #9c3, #820F0F)",
                        }}
                      ></Box>
                    </Box>
                    <Typography fontSize={"6px"} width={100}>
                      <StarOutline fontSize="small" />
                    </Typography>
                    <Typography width={125}>10</Typography>
                    <Typography width={120}>XXX,XXX</Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
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
    </Box>
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
