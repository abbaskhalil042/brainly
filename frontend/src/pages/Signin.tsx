import { useRef } from "react";
import Input from "../components/Input";
import Button from "../components/ui/Button";

const Signin = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <div className=" flex flex-col gap-4 border-1 p-8 rounded-lg border-gray-500 bg-blue-100">
        <Input type="text" placeholder="Username" ref={userRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <div className="flex w-full justify-center items-center ">
          <Button
            onClick={() => console.log("Signin")}
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
