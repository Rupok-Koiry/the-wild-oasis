"use client";
import React from "react";
import Row from "../../_ui/Row";
import Heading from "../../_ui/Heading";
import DashboardFilter from "../../_features/dashboard/DashboardFilter";
import DashboardLayout from "../../_features/dashboard/DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
