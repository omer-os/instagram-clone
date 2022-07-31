import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const login = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="box xs:border border-gray-200 p-5 flex flex-col xs:shadow-md gap-2 xs:w-max  
      w-full"
      >
        <div className="logo h-10 w-max object-cover self-center mb-2">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
            className="h-full w-full"
          />
        </div>
        <TextField
          label="Username or email"
          size="small"
          variant="outlined"
          fullWidth
        />

        <TextField label="password" size="small" variant="outlined" fullWidth />

        <Button variant="contained" className="bg-blue-600">
          Log In
        </Button>
        <div className="flex my-1 items-center gap-1">
          <div className="line flex-1 h-[.1em] bg-gray-400"></div>
          <div className="text sm">OR</div>
          <div className="line flex-1 h-[.1em] bg-gray-400"></div>
        </div>

        <Button
          variant="contained"
          startIcon={<GoogleIcon color="inherit" />}
          className="bg-blue-600"
          onClick={login}
        >
          log in with google
        </Button>

        <a className="text-blue-600 hover:underline cursor-pointer text-sm self-center">
          forgot password?
        </a>
      </div>
    </div>
  );
}
