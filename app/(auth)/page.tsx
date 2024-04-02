import React, { useEffect } from "react";
import Form from "../component/Form";
import { SignUp } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
}
