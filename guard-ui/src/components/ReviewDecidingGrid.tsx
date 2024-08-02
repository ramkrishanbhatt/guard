import { Chip, Stack } from "@mui/material";
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
      border={"2px solid #006dd9"}
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
          <Chip
            sx={{ bgcolor: "rgb(231, 76, 60)", color: "white" }}
            label={`${convertToTitleCase(_.class)} (${
              parseFloat((_?.score).toFixed(2)) * 100
            }%)`}
          />
        ))}
        {data.medium.map((_: any) => (
          <Chip
            sx={{ bgcolor: "rgb(243, 156, 18)", color: "white" }}
            label={`${convertToTitleCase(_.class)} (${
              parseFloat((_?.score).toFixed(2)) * 100
            }%)`}
          />
        ))}
        {data.low.map((_: any) => (
          <Chip
            sx={{ bgcolor: "rgb(241, 196, 15)", color: "white" }}
            label={`${convertToTitleCase(_.class)} (${
              parseFloat((_?.score).toFixed(2)) * 100
            }%)`}
          />
        ))}
      </Stack>
    </StyledShadowedStack>
  );
}

export default ReviewDecidingGrid;
