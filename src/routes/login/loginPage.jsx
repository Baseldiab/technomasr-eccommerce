import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth";
import Swal from "sweetalert2";
import axios from "axios";
import PageTitle from "../../components/title/page.title";
import {
  Alert,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setName] = useState("kevinryan");
  const [password, setPassword] = useState("kev02937@");
  const [showPassword, setShowPassword] = useState(false);

  // SHOW AND HIDE PASSWORD
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const succesLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  const formatSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        auth.login(data.config.data);
        auth.checkAdmin(JSON.parse(data.config.data).username);
        navigateLogin();
        setErrorMsg(null);
        succesLogin();
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
        setErrorMsg(error.response.data);
      });
  };

  const redirectPath = location.state?.path || "/";

  const navigateLogin = () => {
    if (auth.isAdmin) {
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <PageTitle title={"Login"} />
      <div className="container md:py-16 py-10 shadow-md">
        <form
          className="addProduct-form md:w-[60%] !min-w-[250px] !max-w-[600px] mx-auto"
          onSubmit={formatSubmit}
        >
          <div className="mb-3">
            <TextField
              required
              fullWidth
              id="filled-required"
              label="Username"
              value={username}
              onChange={(e) => setName(e.target.value)}
              variant="filled"
            />
          </div>
          <div className="mb-3">
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                fullWidth
                required
                value={password}
                // defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <div className="form__submit-btn">
            <button className="w-full bg-primary text-white py-2 px-4 rounded" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
