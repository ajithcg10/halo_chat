import Form from "@/app/component/Form";
import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div>
      {/* <Form type='register' /> */}
      <SignUp />
    </div>
  );
}
