import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function CartLocation() {
  //   const navigate = useNavigate();

  const initialConfirm = localStorage.getItem("isConfirmed") || false;

  const [isConfirm, set_is_confirmed] = useState(initialConfirm);
  const initialChecked = localStorage.getItem("isCheckedOut");

  //   console.log(isConfirm);

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formatSubmit = (e) => {
    e.preventDefault();
    // Reset error message
    setErrorMsg("");

    // Validate form fields
    if (username.trim().length < 3) {
      setErrorMsg("Username must be at least 3 characters long");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setErrorMsg("Phone number must be exactly 10 digits");
      return;
    }

    if (location.trim().length < 3) {
      setErrorMsg("Location must be at least 3 characters long");
      return;
    }

    set_is_confirmed(true);

    // Proceed with form submission if all fields are valid
    // console.log("Form submitted:", { username, phoneNumber, location });
  };
  useEffect(() => {
    localStorage.setItem("isConfirmed", isConfirm);
  }, [isConfirm]);

  return (
    <>
      {!isConfirm && initialChecked && (
        <>
          (
          <section className="">
            <h2 className="text-primary text-2xl mb-4 font-medium text-center">Location</h2>
            <form
              className="addProduct-form md:w-[60%] !min-w-[250px] !max-w-[600px] mx-auto"
              onSubmit={formatSubmit}
            >
              <div className="mb-3">
                <TextField
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={errorMsg.includes("Username")}
                  helperText={errorMsg.includes("Username") && errorMsg}
                />
              </div>
              <div className="mb-3">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={errorMsg.includes("Phone number")}
                  helperText={errorMsg.includes("Phone number") && errorMsg}
                />
              </div>
              <div className="mb-3">
                <TextField
                  fullWidth
                  minRows={2}
                  maxRows={3}
                  multiline
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  error={errorMsg.includes("Location")}
                  helperText={errorMsg.includes("Location") && errorMsg}
                />
              </div>

              <div className="form__submit-btn my-3">
                <button className="w-full bg-secondary text-white py-2 px-4 rounded" type="submit">
                  Confirm Payment
                </button>
              </div>
            </form>
          </section>
          )
        </>
      )}
    </>
  );
}
