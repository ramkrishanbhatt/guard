import React, { useState } from "react";
import { Box, Stack, TextField, Typography, Button, Grid } from "@mui/material";
import {StyledBoxComment, StyledBoxCommentDialog, StyledBoxDisplay, StyledBoxScore, StyledBoxTools} from "./components.Style"

const Review = ({ data, onClick }: { data: any; onClick: any }) => {
  return (
    <Stack>
      <Box sx={{display: "flex", justifyContent: 'flex-end',}}>
        <StyledBoxDisplay m={2} p={2}>
          <Typography color={"#002060"} alignItems={"center"}>Processed Count 451</Typography>
        </StyledBoxDisplay>
        <StyledBoxDisplay m={2} p={2}>
          <Typography color={"#002060"} alignItems={"center"}>Review Time 4:23:52</Typography>
        </StyledBoxDisplay>
      </Box>
      <Grid
        container
        rowSpacing={3}>
        <Grid item xs={6} m={1.5} bgcolor={"lightblue"} height={"450px"}>
          <Stack>
            <Button onClick={onClick}>Close</Button>
            <div>
              <video
                controls
                width="100%"
                height={"400px"}
                className="videoPlayer"
                src={""}
              ></video>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={2.9}>
          <Grid container>
            <Grid item justifyContent={"center"}>
              <StyledBoxTools m={"20px"} p={"20px"} >
                <Typography>AI Detection</Typography>
              </StyledBoxTools>  
            </Grid>
            <Grid item m={"20px"} p={"20px"} bgcolor={"#B2E7FA"} justifyContent={"center"} width={"340px"} height={"300px"}>
                <StyledBoxScore m={1} bgcolor={"#A9D18E"}>
                  <Typography justifyContent={"center"}>TEXT 1</Typography>
                </StyledBoxScore>
                <StyledBoxScore m={1} bgcolor={"#F4AB83"}>
                  <Typography justifyContent={"center"}>TEXT 1</Typography>
                </StyledBoxScore>
                <StyledBoxScore m={1} bgcolor={"#D6DCE5"}>
                  <Typography justifyContent={"center"}>TEXT 1</Typography>
                </StyledBoxScore>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.9}>
          <StyledBoxTools m={"5px"} p={"5px"} >
                  <Typography color={"#002060"}>RESOLUTION: XXX</Typography>
          </StyledBoxTools>  
          <StyledBoxTools m={"5px"} p={"5px"} >
                  <Typography color={"#002060"}>AUDIO QUALITY: XXX</Typography>
          </StyledBoxTools>    
          <StyledBoxTools m={"5px"} p={"5px"} >
                  <Typography color={"#002060"}>XXX: XXX</Typography>
          </StyledBoxTools> 
          <StyledBoxCommentDialog m={"5px"} p={"5px"} >
                  <Typography color={"#002060"}>NOTES</Typography>
          </StyledBoxCommentDialog> 
          <StyledBoxComment m={"5px"} p={"5px"}>
          </StyledBoxComment>
        </Grid>
      </Grid>
      <Stack m={2} p={2} bgcolor={"orange"} direction={"row"} spacing={1}>
        <Stack
          useFlexGap
          flexWrap={"wrap"}
          direction={"row"}
          width={"100%"}
          spacing={"10px"}
        >
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <Box bgcolor={"gray"} p={1}>Text {_}</Box>
          ))}
        </Stack>
        <Button variant="contained">Approve</Button>
        <Button variant="contained">Reject</Button>
      </Stack>
    </Stack>
  );
};

export default Review;
