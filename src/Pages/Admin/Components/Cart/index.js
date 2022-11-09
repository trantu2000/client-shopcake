import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, ListItemButton } from "@mui/material";
import { Colors } from "../../../../styles/theme";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ title, quantity ,to}) {
  return (
    <Card sx={{ minWidth: 275, bgcolor: Colors.primary, color: Colors.white }}>
      <CardContent>
        <Typography
          align="center"
          sx={{ fontSize: 18, fontWeight: 400 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: 17, fontWeight: 300 }}
          align="center"
          variant="h5"
          component="div"
        >
          {quantity}
        </Typography>
      </CardContent>
      <Divider />
      <Link to={`${to}`}>
        <ListItemButton>
          <Button sx={{ color: Colors.white }} size="small">
            Xem chi tiết
          </Button>
        </ListItemButton>
      </Link>
    </Card>
  );
}
