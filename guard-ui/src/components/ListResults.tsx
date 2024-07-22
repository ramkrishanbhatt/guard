import React, { useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

const ListResults = ({ data, onClick }: { data: any[]; onClick: any }) => {
  return (
    <Stack m={2} p={2} bgcolor={"lightblue"}>
      {data.map((_) => (
        <Stack
          bgcolor={"gray"}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          spacing={1}
          mt={1}
          px={1}
        >
          <Typography color={"black"}>Item {_}</Typography>
          <Button onClick={onClick} variant="text">View</Button>
        </Stack>
      ))}
    </Stack>
  );
};

export default ListResults;
