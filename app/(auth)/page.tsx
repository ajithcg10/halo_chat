import React, { useEffect } from "react";
import Form from "../component/Form";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
