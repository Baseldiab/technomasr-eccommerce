import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="sm:mb-0 mb-[40px]">
      <div className="container flex justify-center flex-col items-center md:py-10 py-5">
        <Link to={"/"} className="my-2">
          <img src="/images/logo.png" className="md:w-52 md:h-auto" alt="" />
        </Link>
        <a className="text-primary text-xl font-medium my-2" href="mailto:Baseldiab21@gmail.com">
          <MailOutlineIcon className="me-2" />
          Baseldiab21@gmail.com
        </a>
        <a className="text-primary text-xl font-medium my-2" href="tel:201068769643">
          <PhoneInTalkIcon className="me-2" />
          +20168769643
        </a>
        <div className="flex justify-between items-center my-2">
          <a href="https://twitter.com/">
            <XIcon className=" text-primary" />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon className="mx-3 text-primary" />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon className=" text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
