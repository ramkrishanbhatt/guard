import { Stack } from "@mui/material";
import { StyledShadowedStack, StyledSmallTypography } from "./components.Style";
import { convertToTitleCase } from "./Data";

function ReviewDecidingGrid({ data }: { data: any }) {
  return (
    <StyledShadowedStack
      maxHeight={"-webkit-fill-available"}
      overflow={"auto"}
      display={"flex"}
      flexDirection={"column"}
      width={"-webkit-fill-available"}
    >
      <Stack
        width={"100%"}
        useFlexGap
        flexWrap={"wrap"}
        direction={"row"}
        spacing={1}
        overflow={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {data.high.map((_: any) => (
          <StyledShadowedStack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              p: 1,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              height: "30px",
              alignItems: "center",
              bgcolor: "rgb(231, 76, 60)",
              color: "white",
            }}
            width={"max-content"}
          >
            <StyledSmallTypography alignItems={"center"}>
              {convertToTitleCase(_.class)}{" "}
              {`(${parseFloat((_?.score).toFixed(2)) * 100}%)`}
            </StyledSmallTypography>
          </StyledShadowedStack>
        ))}
        {data.medium.map((_: any) => (
          <StyledShadowedStack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              p: 1,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              height: "30px",
              alignItems: "center",
              bgcolor: "rgb(243, 156, 18)",
              color: "white",
            }}
            width={"max-content"}
          >
            <StyledSmallTypography alignItems={"center"}>
              {convertToTitleCase(_.class)}{" "}
              {`(${parseFloat((_?.score).toFixed(2)) * 100}%)`}
            </StyledSmallTypography>
          </StyledShadowedStack>
        ))}
        {data.low.map((_: any) => (
          <StyledShadowedStack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              p: 1,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              height: "30px",
              alignItems: "center",
              bgcolor: "rgb(241, 196, 15)",
              color: "white",
            }}
            width={"max-content"}
          >
            <StyledSmallTypography alignItems={"center"}>
              {convertToTitleCase(_.class)}{" "}
              {`(${parseFloat((_?.score).toFixed(2)) * 100}%)`}
            </StyledSmallTypography>
          </StyledShadowedStack>
        ))}
      </Stack>
    </StyledShadowedStack>
  );
}

export default ReviewDecidingGrid;
