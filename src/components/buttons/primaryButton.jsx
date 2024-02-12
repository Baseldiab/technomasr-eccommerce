/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export default function PrimaryButton(props) {
  return (
    <Button className="!bg-primary text-white hover:!bg-sky-700 my-0.5" variant="contained">
      {props.text}
    </Button>
  );
}
