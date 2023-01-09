import { Avatar, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Reviews = ({ reviews }) => {
  return (

    <Box sx={{ mt: 1, mb: 1 }}>
      {reviews &&
        reviews.map((review) => (
          <Box display="flex" sx={{mt:1}}>
            <Box sx={{ mt: 1, mb: 1, p: 1 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://res.cloudinary.com/da5zt66t6/image/upload/v1673284083/avatars/default_avatar_j5ddjb.jpg"
              />
            </Box>
            <Box>
              <Paper elevation={5} sx={{ p: 2 }}>
                <Typography variant="h6">{review.name}</Typography>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography variant="body1">{review.comment}</Typography>
              </Paper>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default Reviews;
