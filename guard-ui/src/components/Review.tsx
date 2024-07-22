import React, { useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

const Review = ({ data, onClick }: { data: any; onClick: any }) => {
  return (
    <Stack>
      <Stack m={2} p={2} bgcolor={"lightblue"}>
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
