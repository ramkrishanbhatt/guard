import { Box, Stack, Button, Grid } from "@mui/material";
import { StyledBoxDisplay, StyledShadowedStack } from "./components.Style";
import Frames from "./Frames";
import ReviewDecidingGrid from "./ReviewDecidingGrid";
import { useEffect, useState } from "react";

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

  const rejectionText = [
    { text: "Hate Speech" },
    { text: "Nudity" },
    { text: "Personal Information" },
    { text: "Copy right's violation" },
    { text: "Bullying" },
    { text: "Graphics" },
    { text: "Spam" },
    { text: "Pass to SME" },
  ];

  const [url, setUrl] = useState("");
  const [output, setOutput] = useState<any[]>([]);
  const [data, setData] = useState({
    low: [],
    medium: [],
    high: [],
    reject: [],
  });

  const getClassesAndScore = (time: number) => {
    const res = output.find((_) => _.time === time);
    console.log(time, res);
    const filteredData = {
      low: [],
      high: [],
      medium: [],
      reject: [],
    };

    res?.classes.forEach((e: any) => {
      const score = e.score;

      if (score < 0.2 && score > 0) {
        filteredData.low = filteredData.low.concat(e);
      } else if (score < 0.4 && score > 0.2) {
        filteredData.medium = filteredData.medium.concat(e);
      } else if (score < 0.6 && score > 0.4) {
        filteredData.high = filteredData.high.concat(e);
      } else if (score > 0.8) {
        filteredData.reject = filteredData.reject.concat(e);
      }
    });
    setData(() => filteredData);
    console.log(filteredData);
  };

  const getVideoDetails = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/get-processed-data/${id}`
    );
    if (response.ok) {
      const videosData = await response.json();
      setUrl(() => videosData.fileData.file_path);
      setOutput(() => videosData.hiveResponse.status[0].response.output);
    } else {
      setUrl("");
    }
  };

  useEffect(() => {
    getVideoDetails();
  }, [id]);

  useEffect(()=>{
    getClassesAndScore(times[0]);
  },[output])

  return (
    <Box bgcolor={"#F1FAFC"} px={3}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {countTime.map((_) => (
          <StyledBoxDisplay m={1} p={1} color={"#FFFFFF"} fontWeight={600}>
            {`${_.text} ${_.val}`}
          </StyledBoxDisplay>
        ))}
      </Box>
      <Grid container columns={12} spacing={3}>
        <Grid
          item
          md={6}
          //mt={"30px"}
          //marginLeft={"10px"}
          pt={"30px"}
          height={"60vh"}
        >
          <Frames url={url || ""} times={times} onClick={getClassesAndScore} />
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
          <Grid item md={6}>
            <ReviewDecidingGrid
              text="Rejection or Approval space"
              data={data.reject}
              required={false}
            />
          </Grid>
        </Grid>
        <Grid item md={12} display={"flex"} justifyContent={"flex-end"}>
          <Button
            sx={{
              backgroundColor: "#405BBA",
              color: "#FFFFFF",
              padding: "10px",
              fontWeight: 500,
              borderRadius: "10px",
              ":hover": { bgcolor: "#405BBA" },
            }}
          >
            Approve
          </Button>
          <Button
            sx={{
              backgroundColor: "#FF0054",
              color: "#FFFFFF",
              padding: "10px",
              fontWeight: 500,
              borderRadius: "10px",
              marginLeft: "10px",
              ":hover": { bgcolor: "#FF0054" },
            }}
          >
            Reject
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;

{
  /* <Grid item xs={2.9}>
          <Grid container>
            <Grid item justifyContent={"center"}>
              <StyledBoxTools marginLeft={"15px"} p={"15px"} mt={"5px"}>
                <Typography mt={"5px"} color={"#FFFFFF"}>AI Detection</Typography>
              </StyledBoxTools>  
            </Grid>
            <Grid item m={"15px"} p={"15px"} bgcolor={"#E3E3E9"} justifyContent={"center"} width={"330px"} height={"350px"}>
              {textInAiDetection.map((_)=>(
                <StyledBoxScore m={"20px"} p={"20px"} bgcolor={_.color} textAlign={"center"} color={"#000000"}>
                  {_.text}
              </StyledBoxScore>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.9}>
          {qualityTools.map((_)=>(
            <StyledBoxTools m={"5px"} p={"5px"} color={"#FFFFFF"} fontWeight={"450px"}>
              {`${_.text} ${_.val}`}
            </StyledBoxTools>
          ))}
          {notes.map((_)=>(
            <>
            <StyledBoxCommentDialog m={"5px"} p={"5px"} >
              <Typography color={"#002060"}>{_.text}</Typography>
            </StyledBoxCommentDialog> 
            <StyledBoxComment m={"5px"} p={"5px"}>
            </StyledBoxComment>
            </>
          ))}
        </Grid> */
}
