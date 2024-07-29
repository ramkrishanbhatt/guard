import { Box, Stack } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  StyledMediumTypography,
  StyledShadowedStack,
  StyledSmallTypography,
} from "./components.Style";

function ReviewDecidingGrid({
  text,
  data,
  required,
}: {
  text: string;
  data: any[];
  required: boolean;
}) {
  const [formats, setFormats] = useState(() => ["bold", "italic"]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <Box
      justifyContent={"center"}
      ml={"15px"}
      height={"30vh"}
      overflow={"hidden"}
			display={"flex"}
			flexDirection={"column"}
    >
      <StyledShadowedStack
        sx={{
          background: "#006dd9",
          color: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
				mb={.5}
      >
        <StyledMediumTypography alignItems={"center"}>
          {text}
        </StyledMediumTypography>
      </StyledShadowedStack>
			<Box flex={1} overflow={"auto"}>
      {data.map((_) => (
        <StyledShadowedStack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
						py: 0.5,
						px: 1,
						boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
					mb={.5}
        >
          <StyledSmallTypography alignItems={"center"}>
            {_.class}
          </StyledSmallTypography>
          <StyledSmallTypography alignItems={"center"}>
            {parseFloat((_?.score).toFixed(2))}
          </StyledSmallTypography>
        </StyledShadowedStack>
      ))}</Box>
      {/* <Box
        sx={{
          backgroundColor: "#016DD9",
          borderRadius: "5px",
          width: "290px",
          padding: "15px",
          color: "#FFFFFF",
          fontWeight: 600,
        }}
      >
        {text}
      </Box> */}
      {/* <Stack
        spacing={{ xs: 0.5, sm: 0.5 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        mt={0.5}
      >
        {required ? (
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            orientation="horizontal"
            sx={{
              borderRadius: "5px",
              flexWrap: "wrap",
              ml: "15px",
            }}
          >
            {data.map((_: any) => (
              <ToggleButton
                value={_.text}
                sx={{
                  color: "#808080",
                  textAlign: "left",
                  fontWeight: 600,
                  width: "150px",
                }}
              >
                {_.text}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        ) : (
          <>
            {data.map((_: any) => (
              <Box
                bgcolor={"#FFFFFF"}
                p={0.5}
                width={"150px"}
                borderRadius={"5px"}
                sx={{ color: "#808080", textAlign: "left", fontWeight: 600 }}
              >
                {_.text}
              </Box>
            ))}
          </>
        )}
      </Stack> */}
    </Box>
  );
}

export default ReviewDecidingGrid;
