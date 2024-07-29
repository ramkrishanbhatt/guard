import { Box, Grid, Stack } from "@mui/material";
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
    width: "310px"
  })

  export const StyledBoxScore = styled(Box)({
    height: "30px",
    borderRadius: "25px",
    justifyContent: "center"
  })

  export const StyledBoxCommentDialog = styled(Box)({
    backgroundColor: "#D6DCE5",
    width: "310px"
  })

  export const StyledBoxComment = styled(Box)({
    backgroundColor: "#D5E4F1",
    justifyContent: "center",
    width: "310px",
    height: "100px"
  })

  export const StyledShadowedStack = styled(Stack)({
    backgroundColor: "#fff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    textShadow: "rgba(0,0,0,.01) 0 0 1px",
    fontWeight: "bold",
    alignItems: "flex-start"
  })

  export const StyledSmallTypography = styled(Box)({
    fontSize: "16px",
    fontWeight: 550
  })

  export const StyledMediumTypography = styled(Box)({
    fontSize: "20px",
    fontWeight: 600
  })

  export const StyledLargeTypography = styled(Box)({
    fontSize: "24px",
    fontWeight: 600
  })
