"use client";
import BookingTable from "../../../_features/bookings/BookingTable";
import BookingTableOperations from "../../../_features/bookings/BookingTableOperations";
import Heading from "../../../_ui/Heading";
import Row from "../../../_ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
