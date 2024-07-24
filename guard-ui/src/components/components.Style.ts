import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { style } from "@mui/system";

export const StyledBoxDisplay = styled(Box)({
    backgroundColor: "#00B0F0", 
    borderRadius: "25px",
    width: "200px"
  });

  export const StyledBoxTools = styled(Box)({
    backgroundColor: "#F1F0F0",
    justifyContent: "center",
    width: "300px"
  })

  export const StyledBoxScore = styled(Box)({
    height: "80px",
    borderRadius: "25px",
    justifyContent: "center"
  })

  export const StyledBoxCommentDialog = styled(Box)({
    backgroundColor: "#D6DCE5",
    width: "300px"
  })

  export const StyledBoxComment = styled(Box)({
    backgroundColor: "#D5E4F1",
    justifyContent: "center",
    width: "300px",
    height: "100px"
  })