import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadVideo from "./components/UploadVideo";
import { Box, Stack, Typography } from "@mui/material";
import ListResults from "./components/ListResults";
import Review from "./components/Review";

function App() {
  const [view, setView] = useState(false);

  return (
    <div className="App">
      <Box height={"100vh"} display={"flex"} flexDirection={"column"}>
        <Stack
          bgcolor={"gray"}
          height={"60px"}
          px={3}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Typography color={"white"}>ClientLogo</Typography>
          <Typography color={"white"}>Welcome</Typography>
        </Stack>

        {view ? (
          <Box overflow={"auto"} flex={1}>
            <Review
              onClick={() => {
                setView(false);
              }}
              data={""}
            />
          </Box>
        ) : (
          <Box overflow={"auto"} flex={1}>
            <UploadVideo />
            <ListResults
              onClick={() => {
                setView(true);
              }}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
