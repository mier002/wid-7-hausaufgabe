import { useState } from "react"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Header({ minMag, setMinMag, timespan, setTimespan }) {
  const [Mag, setMag] = useState("sigi");
  const [selectedTime, setSelectedTime] = useState("tag");

  function onTimeSelect(value) {
    setTimespan(value);
    setSelectedTime(value);
  }

  function onMagnitudeSelect(value) {
    setMinMag(value);
    setMag(value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#000000" }}>
        <Toolbar variant="regular">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            USGS Earthquakes
          </Typography>
        </Toolbar>
        <div>Select Magnitude</div>
        <Stack spacing={0} direction="row">
          <Button
            value="all"
            onClick={(event) => onMagnitudeSelect(event.target.value)}
            color={Mag === "all" ? "secondary" : "primary"}
          >
            All
          </Button>
          <Button
            value="1.0"
            onClick={(event) => onMagnitudeSelect(event.target.value)}
            color={Mag === "1.0" ? "secondary" : "primary"}
          >
            M 1.0+
          </Button>
          <Button
            value="2.5"
            onClick={(event) => onMagnitudeSelect(event.target.value)}
            color={Mag === "2.5" ? "secondary" : "primary"}
          >
            M 2.5+
          </Button>
          <Button
            value="4.5"
            onClick={(event) => onMagnitudeSelect(event.target.value)}
            color={Mag === "4.5" ? "secondary" : "primary"}
          >
            M 4.5+
          </Button>
          <Button
            value="significant"
            onClick={(event) => onMagnitudeSelect(event.target.value)}
            color={Mag === "significant" ? "secondary" : "primary"}
          >
            Significant
          </Button>
        </Stack>
        <div>Select Time Period</div>
        <Stack spacing={0} direction="row">
          <Button
            value="hour"
            onClick={(event) => onTimeSelect(event.target.value)}
            color={selectedTime === "hour" ? "secondary" : "primary"}
          >
            Last Hours
          </Button>
          <Button
            value="day"
            onClick={(event) => onTimeSelect(event.target.value)}
            color={selectedTime === "day" ? "secondary" : "primary"}
          >
            Last Day
          </Button>
          <Button
            value="week"
            onClick={(event) => onTimeSelect(event.target.value)}
            color={selectedTime === "week" ? "secondary" : "primary"}
          >
            Last 7 Days
          </Button>
          <Button
            value="month"
            onClick={(event) => onTimeSelect(event.target.value)}
            color={selectedTime === "month" ? "secondary" : "primary"}
          >
            Last 30 Days
          </Button>
        </Stack>
      </AppBar>
    </Box>
  );
}
