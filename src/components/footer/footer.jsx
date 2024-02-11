import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <div className="container flex justify-center flex-col items-center py-10">
        <Link to={"/"} className="my-2">
          <img src="/images/logo.png" className="md:w-52 md:h-auto" alt="" />
        </Link>
        <a className="text-primary text-xl font-medium my-2" href="mailto:example@example.com">
          <MailOutlineIcon className="me-2" />
          example@example.com
        </a>
        <a className="text-primary text-xl font-medium my-2" href="tel:+125 699 9171">
          <PhoneInTalkIcon className="me-2" />
          +125 699 9171
        </a>
        <div className="flex justify-between items-center my-2">
          <XIcon className=" text-primary" />
          <FacebookIcon className="mx-3 text-primary" />
          <InstagramIcon className=" text-primary" />
        </div>
      </div>
    </footer>
  );
}
