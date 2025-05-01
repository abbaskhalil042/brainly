import { useRef } from "react";
import Input from "../components/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigation = useNavigate();
  const signup = async () => {
    const username = userRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      username,
      email,
      password,
    });
    navigation("/signin");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <div className=" flex flex-col gap-4 border-1 p-8 rounded-lg border-gray-500 bg-blue-100">
        <Input type="text" placeholder="Username" ref={userRef} />
        <Input type="email" placeholder="Email" ref={emailRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <div className="flex w-full justify-center items-center ">
          <Button
            onClick={signup}
            variant="primary"
            size="md"
            text="Signup"
            className="w-full flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
