/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export default function SecondaryButton(props) {
  const { text, onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="!bg-secondary text-white hover:!bg-orange-400 my-0.5"
      variant="contained"
    >
      {text}
    </Button>
  );
}
