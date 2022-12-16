import React from "react";
import { styled, Chip as MuiChip } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function FilterChip({
  label_eng,
  label_ar,
  chipTitle,
  setSortBy,
  setFilterBy,
  filterBy,
  value,
}) {
  const handleDelete = () => {
    if (chipTitle === "Sort by") {
      setSortBy(null);
    } else {
      let temp = filterBy.filter((item) => {
        return item.value !== value;
      });
      setFilterBy(temp);
    }
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000000",
      },
    },
  });

  const Chip = styled(MuiChip)(({ chiptitle }) => ({
    "&::before": {
      content: `"${chiptitle}"`,
      position: "absolute",
      top: "-8px",
      left: "16px",
      padding: "0 8px",
      backgroundColor: "#bdc1be",
      color: "#6A6A6A",
    },
  }));

  return (
    <div style={{ marginTop: "10px" }}>
      <ThemeProvider theme={theme}>
        <Chip
          label={
            <div>
              <span className="chip-label-eng">{label_eng}</span>
              <span className="chip-label-ar">{label_ar}</span>
            </div>
          }
          sx={{ height: "35px" }}
          variant="outlined"
          onDelete={handleDelete}
          chiptitle={chipTitle}
          color="secondary"
        />
      </ThemeProvider>
    </div>
  );
}
