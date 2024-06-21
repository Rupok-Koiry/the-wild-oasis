"use client";

import UpdatePasswordForm from "../../../_features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../../../_features/authentication/UpdateUserDataForm";
import Heading from "../../../_ui/Heading";
import Row from "../../../_ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
