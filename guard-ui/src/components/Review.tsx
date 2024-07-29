import { Box, Stack, Button, Grid } from "@mui/material";
import { StyledBoxDisplay } from "./components.Style";
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

  const textInAiDetection = [
    { text: "Text 1", color: "#A9D18E" },
    { text: "Text 2", color: "#F4AB83" },
    { text: "Text 3", color: "#D6DCE5" },
  ];

  const qualityTools = [
    { text: "RESOLUTION:", val: "XXX" },
    { text: "AUDIO QUALITY:", val: "XXX" },
    { text: "XXX:", val: "XXX" },
  ];

  const notes = [
    { text: "Notes" },
    { text: "Annotations" },
    //{text: "Transfer"},
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

  const getVideoDetails = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/get-processed-data/${id}`
    );
    if (response.ok) {
      const videosData = await response.json();
      setUrl(() => videosData.fileData.file_path);
    } else {
      setUrl("");
    }
  };

  useEffect(() => {
    getVideoDetails();
  }, [id]);
  console.log(id);

  return (
    <Box bgcolor={"#F1FAFC"}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {countTime.map((_) => (
          <StyledBoxDisplay m={1} p={1} color={"#FFFFFF"} fontWeight={600}>
            {`${_.text} ${_.val}`}
          </StyledBoxDisplay>
        ))}
      </Box>
      <Grid container rowSpacing={3}>
        <Grid
          item
          xs={6}
          mt={"30px"}
          marginLeft={"10px"}
          pt={"30px"}
          height={"420px"}
        >
          <Stack>
            {/* <Button onClick={onClick}>Close</Button> */}
            <Frames url={url || ""} times={times} />
          </Stack>
        </Grid>
        <Grid
          item
          xs={5.9}
          mt={2}
          p={"15px"}
          direction={"row"}
          spacing={1}
          borderRadius={"25px"}
        >
          <Grid container spacing={{ md: 0.5 }}>
            <Grid item md={5.9} /* border={"1px solid black"} */ mr={1.5}>
              <ReviewDecidingGrid
                text="High confidence score"
                data={rejectionText}
                required={false}
              />
            </Grid>
            <Grid item md={5.9}>
              <ReviewDecidingGrid
                text="Medium confidence score"
                data={rejectionText}
                required={false}
              />
            </Grid>
            <Grid item md={5.9} mt={"16px"} mr={1.5}>
              <ReviewDecidingGrid
                text="Low confidence score"
                data={rejectionText}
                required={false}
              />
            </Grid>
            <Grid item md={5.9} mt={"16px"}>
              <ReviewDecidingGrid
                text="Rejection or Approval space"
                data={rejectionText}
                required={false}
              />
              <Grid mt={"16px"} spacing={{ md: 0.5 }}>
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
          </Grid>
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
