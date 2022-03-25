import { Box, LinearProgress } from "@mui/material";

export const ProgressBar = ({ title, heading, value, index }) => {
  return (
    <div className={title} key={index}>
      <div className="progress-title">
        <span className="progress-heading">{heading}</span>
        <span className="progress-value">{value}%</span>
      </div>

      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          className={"progress-bar-" + title}
          color="inherit"
        />
      </Box>
    </div>
  );
};
