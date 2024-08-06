import { Button, TextField } from "@mui/material";
import React from "react";

const TestForm = () => {
  return (
    <div>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(11)].map((_, index) => (
          <TextField
            key={index}
            fullWidth
            variant="outlined"
            label={`Field ${index + 1}`}
            placeholder={`Enter Field ${index + 1}`}
            sx={{ margin: "8px 0" }}
          />
        ))}
        <div className="col-span-full flex justify-start mt-4">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
