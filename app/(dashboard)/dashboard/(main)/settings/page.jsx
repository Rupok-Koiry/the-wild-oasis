"use client";
import UpdateSettingsForm from "../../../_features/settings/UpdateSettingsForm";
import Heading from "../../../_ui/Heading";
import Row from "../../../_ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
