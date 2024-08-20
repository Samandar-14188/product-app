import { useState } from "react";
import SignInImage from "../../../public/Signin.webp";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
export default function SignIn() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validate = () => {
    if (!validateEmail(login)) {
      alert('Iltimos, to‘g‘ri email kiriting');
      return false;
    }
    if (password.length < 8) {
      alert('Iltimos, kamida 8 ta belgi kiriting');
      return false;
    }
    return true; 
  };
  

  const handleSignin = () => {
    if (validate()) {
      navigate("/product");

      return;
    } 
  };
  

  return (
    <div className="Container">
      <div className="Signin-container">
        <h2>Xush kelibsiz!</h2>
        <p>Login parolingizni kiritib o'z kabinetingizga kiring.</p>

        <div className="Sign-Card">
          <input
            label="Login"
            type="text"
            placeholder="Loginingizni kiriting"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            label="Password"
            type="password"
            placeholder="Paroliningizni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Kirish" onClick={handleSignin} />
        </div>
      </div>
      <div className="Signin-wrapper-picture">
        <img src={SignInImage} alt="" />
      </div>
    </div>
  );
}
