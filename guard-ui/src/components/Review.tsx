import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography, Button, Grid } from "@mui/material";
import {StyledBoxComment, StyledBoxCommentDialog, StyledBoxDisplay, StyledBoxScore, StyledBoxTools} from "./components.Style"
import Frames from "./Frames";

const Review = ({ id, onClick, times }: { id: string; onClick: any, times: number[] }) => {

  const countTime = [
    {text: "Processed Count", val: "451"},
    {text: "Review Time", val: "4:23:52"}
    ];

  const textInAiDetection = [
    {text: "Text 1", color: "#A9D18E"},
    {text: "Text 2", color: "#F4AB83"},
    {text: "Text 3", color: "#D6DCE5"},
  ];

  const qualityTools = [
    {text: "RESOLUTION:", val: "XXX"},
    {text: "AUDIO QUALITY:", val: "XXX"},
    {text: "XXX:", val: "XXX"}
  ];

  const notes = [
    {text: "Notes"},
    {text: "Annotations"},
    //{text: "Transfer"},
  ]

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

  useEffect(()=>{
    getVideoDetails();
  },[id])
console.log(id);

  return (
    <Stack>
      <Box sx={{display: "flex", justifyContent: 'flex-end'}}>
        {countTime.map((_) => (
          <StyledBoxDisplay m={2} p={2} color={"#002060"} fontWeight={400}>
            {`${_.text} ${_.val}`}
        </StyledBoxDisplay>
        ))}
      </Box>
      <Grid
        container
        rowSpacing={3}>
        <Grid item xs={6} m={1.5} bgcolor={"lightblue"} height={"435px"}>
          <Stack>
            {/* <Button onClick={onClick}>Close</Button> */}
              <Frames url={url || ""} times={times}/>
            </Stack>
        </Grid>
        <Grid item xs={2.9}>
          <Grid container>
            <Grid item justifyContent={"center"}>
              <StyledBoxTools m={"15px"} p={"15px"} >
                <Typography>AI Detection</Typography>
              </StyledBoxTools>  
            </Grid>
            <Grid item m={"15px"} p={"15px"} bgcolor={"#B2E7FA"} justifyContent={"center"} width={"500px"} height={"325px"}>
              {textInAiDetection.map((_)=>(
                <StyledBoxScore m={"20px"} p={"20px"} bgcolor={_.color} textAlign={"center"}>
                  {_.text}
              </StyledBoxScore>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.9}>
          {qualityTools.map((_)=>(
            <StyledBoxTools m={"5px"} p={"5px"} color={"#002060"} fontWeight={"450px"}>
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
          
        </Grid>
      </Grid>
      <Stack m={2} p={"15px"} bgcolor={"#DAC4B6"} direction={"row"} spacing={1} borderRadius={"25px"} width={"1000px"}>
        <Stack
          useFlexGap
          flexWrap={"wrap"}
          direction={"row"}
          width={"100%"}
          spacing={"10px"}
        >
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <Box bgcolor={"#DCDDDC"} p={1} color={"#1B376F"}>Text {_}</Box>
          ))}
        </Stack>
        <Button sx={{backgroundColor: "#00B0F0", color: "#FFFFFF", padding: "10px", fontWeight: 500, borderRadius: "10px"}}>Approve</Button>
        <Button sx={{backgroundColor: "#8497B0", color: "#FFFFFF", padding: "10px", fontWeight: 500, borderRadius: "10px"}}>Reject</Button>
      </Stack>
    </Stack>
  );
};

export default Review;
