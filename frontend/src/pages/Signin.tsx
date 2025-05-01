import { useRef } from "react";
import Input from "../components/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config/config";

const Signin = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signin = async () => {
    const username = userRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
      username,
      password,
    });

    localStorage.setItem("token", response.data?.token);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <div className=" flex flex-col gap-4 border-1 p-8 rounded-lg border-gray-500 bg-blue-100">
        <Input type="text" placeholder="Username" ref={userRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <div className="flex w-full justify-center items-center ">
          <Button
            onClick={signin}
            variant="primary"
            size="md"
            text="Signin"
            className="w-full flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
