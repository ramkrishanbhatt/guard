import { Box, Stack, Button, Grid } from "@mui/material";
import {
  StyledBoxDisplay,
  StyledShadowedStack,
  StyledSmallTypography,
} from "./components.Style";
import Frames from "./Frames";
import ReviewDecidingGrid from "./ReviewDecidingGrid";
import { useEffect, useState } from "react";
import { classes } from "./Data";

const Review = ({
  id,
  onClick,
  times,
}: {
  id: string;
  onClick: any;
  times: number[];
}) => {
  const countTime = [
    { text: "Processed Count", val: "451" },
    { text: "Review Time", val: "4:23:52" },
  ];

  const [url, setUrl] = useState("");
  const [output, setOutput] = useState<any[]>([]);
  const [data, setData] = useState({
    low: [],
    medium: [],
    high: [],
    reject: [],
  });
  const [tags, setTags] = useState<string[]>([]);

  const getClassesAndScore = (time: number) => {
    const res = output.find((_) => _.time === time);
    const filteredData = {
      low: [],
      high: [],
      medium: [],
      reject: [],
    };

    res?.classes.forEach((e: any) => {
      const score = e.score;
      const item = classes.find((_)=>_.class===e.class);
      if (score < 0.4 && score > 0.01 && item?.include === "Y") {
        filteredData.low = filteredData.low.concat(e);
      } else if (score <= 0.7 && score >= 0.4 && item?.include === "Y") {
        filteredData.medium = filteredData.medium.concat(e);
      } else if (score > 0.7 && item?.include === "Y") {
        filteredData.high = filteredData.high.concat(e);
      } 
      // else if (score > 0.8) {
      //   filteredData.reject = filteredData.reject.concat(e);
      // }
    });
    setData(() => filteredData);
  };

  const getVideoDetails = async () => {
    const response = await fetch(
      `http://3.143.254.4/get-processed-data/${id}`
    );
    if (response.ok) {
      const videosData = await response.json();
      setUrl(() => videosData.fileData.file_path);
      setOutput(() => videosData.hiveResponse.status[0].response.output);
    } else {
      setUrl("");
    }
  };

  const approveOrRejectContent = async (val: string) => {
    const response = await fetch(`http://3.143.254.4/update-decision`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        video_id: id,
        status: val,
        classes: tags
      }),
    });
    if (response.ok) {
      alert(val);
      onClick();
    }
  };

  useEffect(() => {
    getVideoDetails();
  }, [id]);

  useEffect(() => {
    getClassesAndScore(times[0]);
  }, [output]);

  return (
    <Box bgcolor={"#F1FAFC"} px={3}>
      <Stack
        spacing={1}
        mb={1}
        direction={"row"}
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {countTime.map((_) => (
          <StyledBoxDisplay p={1} color={"#FFFFFF"} fontWeight={600}>
            {`${_.text} ${_.val}`}
          </StyledBoxDisplay>
        ))}
      </Stack>
      <Grid container columns={12} spacing={3}>
        <Grid item md={6} pt={"30px"} height={"60vh"}>
          <Frames url={url} times={times} onClick={getClassesAndScore} />
        </Grid>

        <Grid item container md={6} spacing={1}>
          <Grid item md={6}>
            <ReviewDecidingGrid
              text="High confidence score"
              data={data.high}
              required={false}
            />
          </Grid>
          <Grid item md={6}>
            <ReviewDecidingGrid
              text="Medium confidence score"
              data={data.medium}
              required={false}
            />
          </Grid>
          <Grid item md={6}>
            <ReviewDecidingGrid
              text="Low confidence score"
              data={data.low}
              required={false}
            />
          </Grid>

        </Grid>
        <Grid
          item
          md={7.2}
          mt={-1.5}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          <StyledShadowedStack
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Stack
              width={"fit-content"}
              spacing={1}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              {queueData.map((_) => (
                <StyledShadowedStack
                  width={"130px"}
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    ":hover": {
                      cursor: "pointer",
                      bgcolor: "#006dd9",
                      color: "white",
                    },
                    bgcolor: tags.includes(_) ? "#006dd9" : "white",
                    color: tags.includes(_) ? "white" : "black",
                  }}
                  onClick={() =>
                    setTags((prev) => {
                      const data = prev.includes(_)
                        ? prev.filter((e) => e !== _)
                        : [...prev, _];
                      return data;
                    })
                  }
                >
                  <StyledSmallTypography sx={{ fontSize: "12px" }}>
                    {_}
                  </StyledSmallTypography>
                </StyledShadowedStack>
              ))}
            </Stack>
            <Stack mt={0} direction={"row"} spacing={1}>
              <Button
                sx={{
                  backgroundColor: "#405BBA",
                  color: "#FFFFFF",
                  padding: "10px",
                  fontWeight: 500,
                  borderRadius: 1,
                  height: "100%",
                  ":hover": { bgcolor: "#405BBA" },
                }}
                onClick={()=>approveOrRejectContent("Approved")}
              >
                Approve
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FF0054",
                  color: "#FFFFFF",
                  padding: "10px",
                  fontWeight: 500,
                  borderRadius: 1,
                  ":hover": { bgcolor: "#FF0054" },
                }}
                onClick={()=>approveOrRejectContent("Rejected")}
              >
                Reject
              </Button>
            </Stack>
          </StyledShadowedStack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;

const queueData = [
  "Hate Speech",
  "Bullying",
  "Personal Information",
  "Spam",
  "Nudity",
  "Graphic Violence",
  "Copyright Violations",
  "Pass to SME",
];
