"use client";
import AddCabin from "../../../_features/cabins/AddCabin";
import CabinTable from "../../../_features/cabins/CabinTable";
import CabinTableOperations from "../../../_features/cabins/CabinTableOperations";
import Heading from "../../../_ui/Heading";
import Row from "../../../_ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
