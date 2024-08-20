import { useState,useRef } from "react";
import SignUpImage from "../../assets/signUp.jpg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validate = () => {
    if (!validateEmail(email)) {
      alert('Iltimos, togri email kiriting');
      return false;
    }
    if (!login) {
      alert('Iltimos, login kiriting');
      return false;
    }
    if (!password || password.length < 6) {
      alert('Iltimos, kamida 6 ta belgi kiriting');
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (validate()) {

      try {
        const response = await axios.post('https://auth-rg69.onrender.com/api/auth/signup', {
          email: email,
          login: login,
          password: password,
        });

        console.log('Server javobi:', response.data);
      } catch (error) {
        console.error('Tizim xatosi: ', error);
      }
      navigate('/SignIn');
    }
   
  }
  return (
    <div className="Container">
      <div className="Signin-container">
   
        <h2>Xush kelibsiz!</h2>
        <p>Login parol yasab Sign In sahifasiga o'ting.</p>

        <div className="SignUp-Card">
          <input
            type="email"
            placeholder="Email kiriting"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <input
            type="text"
            placeholder="Login kiriting"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            ref={loginRef}
          />
          <input
            type="password"
            placeholder="Parol kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <Button text="Kirish" onClick={handleSignup} />
        </div>
      </div>
      <div className="Signin-wrapper-picture">
        <img src={SignUpImage} alt="" className="singup-image" />
      </div>
    </div>
  );
}
