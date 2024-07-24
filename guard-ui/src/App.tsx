import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadVideo from "./components/UploadVideo";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ListResults from "./components/ListResults";
import Review from "./components/Review";
import Logo from "./Sutherland_idAvkZdSwO_0.png";
import { Home, Person } from "@mui/icons-material";
import QueueDetails from "./components/QueueDetails";

function App() {
  const [view, setView] = useState(false);

  return (
    <div className="App">
      <Box height={"100vh"} display={"flex"} flexDirection={"column"}>
        <Box>
          <Stack
            bgcolor={"#243B54"}
            height={"60px"}
            px={3}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
            borderBottom={"8px solid #63BFDD"}
          >
            <img src={Logo} width={"200px"} height={"35px"} />
            <Typography alignItems={"center"} justifyContent={"center"} display={"flex"} color={"white"}>
              <Person /> &nbsp; Welcome, <span style={{ fontWeight: 600 }}>User</span>
            </Typography>
          </Stack>
          <Stack
            px={3}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <Box bgcolor={"#243B54"} px={3} py={0.48} color={"white"}>
              <IconButton sx={{p: 0.2}} color="inherit" onClick={()=>setView(false)}><Home /></IconButton>
            </Box>
            <Box bgcolor={"#243B54"} px={3} py={1} color={"white"}>
              Review Screen
            </Box>
            <Box bgcolor={"#243B54"} px={3} py={1} color={"white"}>
              Moderator Monitoring
            </Box>
          </Stack>
        </Box>
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
          <Box flex={1}>
            <QueueDetails
              onClick={() => {
                setView(true);
              }}
            />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
