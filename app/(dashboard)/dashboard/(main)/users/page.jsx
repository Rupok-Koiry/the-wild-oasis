"use client";
import SignupForm from "../../../_features/authentication/SignupForm";
import Heading from "../../../_ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
