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
import Frames from "./components/Frames";
import { classes } from "./components/Data";

function App() {
  const [view, setView] = useState(false);
  const [id, setId] = useState("");
  const [times, setTimes] = useState<number[]>([]);

  return (
    <div className="App">
      <Box
        height={"100vh"}
        bgcolor={"#F1FAFC"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box>
          <Stack
            height={"60px"}
            px={3}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <img src={Logo} width={"230px"} height={"35px"} />
              <Typography fontSize={"22px"}>DefendR</Typography>{" "}
            </Stack>
            
            <Typography
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              color={"#006dd9"}
            >
              <Person /> &nbsp; Welcome,{" "}
              <span style={{ fontWeight: 600 }}>User</span>
            </Typography>
          </Stack>
          <Stack px={3} alignItems={"center"} direction={"row"} spacing={1}>
            <Box
              px={3}
              py={0.48}
              color={view ? "black" : "#006dd9"}
              borderBottom={view ? "none" : "4px solid #006dd9"}
            >
              <IconButton
                sx={{ p: 0.2 }}
                color="inherit"
                onClick={() => setView(false)}
              >
                <Home />
              </IconButton>
            </Box>
            <Box
              px={3}
              py={1}
              fontWeight={600}
              color={view ? "#006dd9" : "black"}
              borderBottom={!view ? "none" : "4px solid #006dd9"}
            >
              Review Screen
            </Box>
            <Box px={3} py={1} fontWeight={600} color={"black"}>
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
              id={id}
              times={times}
            />
          </Box>
        ) : (
          <Box flex={1} p={3} mb={2} height={"inherit"} overflow={"hidden"}>
            <QueueDetails
              classes={classes.filter((_)=>_.include==="Y")}
              onClick={(id: string, times: number[]) => {
                setView(true);
                setId(id);
                setTimes(()=>times);
              }}
            />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
