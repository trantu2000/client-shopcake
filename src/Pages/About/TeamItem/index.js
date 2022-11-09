import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Colors } from "../../../styles/theme";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const BackgroundImageTeam = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    // backgroundImage: `url(${src})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    width: "20rem",
    height: "25rem",
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "320px",
    //   height: "300px",
    // },
    
    
  }));

const TeamItem = ({src}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        visibility: "visible",
      }}
    >
      <Box
        sx={{
          width: "20rem",
          height: "25rem",
        }}
      >
        <BackgroundImageTeam src={src} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: Colors.light_gray,
          width: "20rem",
          height: "10rem",
          position: "absolute",
          mt: 25,
          opacity: 0,
          "&:hover": {
            opacity: 1,
          },
          // visibility: "hidden",
          transition: "all, 0.5s",
        }}
      >
        <Box>
          <Typography variant="h6">RANDY BUTLER</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">Decorater</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box>
            <IconButton type="button">
              <FacebookOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Box>
          <Box>
            <IconButton type="button">
              <TwitterIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Box>
          <Box>
            <IconButton type="button">
              <YouTubeIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Box>
          <Box>
            <IconButton type="button">
              <InstagramIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamItem;
