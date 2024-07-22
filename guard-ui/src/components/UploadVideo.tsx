import React, { useState } from "react";
import { Box, Stack, TextField, Button } from "@mui/material";

const UploadVideo: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const fileName = file.name;
      const contentType = file.type;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const fileContent = reader.result?.toString().split(",")[1]; // get the base64 part

        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            tags: tags.split(",").map((tag) => tag.trim()),
            fileContent,
            fileName,
            contentType,
          }),
        });

        setIsLoading(false);

        if (response.ok) {
          const videoData = await response.json();
          console.log("Video uploaded successfully:", videoData);
          setMessage("Video uploaded successfully!");
        } else {
          const errorData = await response.json();
          console.error("Error uploading video:", errorData);
          setMessage(`Error uploading video: ${errorData.error}`);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        setMessage("Error reading file.");
        setIsLoading(false);
      };
    } catch (error: any) {
      console.error("Error uploading video:", error);
      setMessage(`Error uploading video: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <Box p={3}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        spacing={1}
        mt={1}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#177694",
              },
            },
            width: "60%"
          }}
          size="small"
          type="file"
          onChange={handleFileChange}
        />
        <Button
          sx={{ backgroundColor: "lightBlue", borderRadius: "50px", height: "40px", color: "black" }}
          variant="contained"
          onClick={handleUpload}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload Video"}
        </Button>
      </Stack>
    </Box>
  );
};

export default UploadVideo;
