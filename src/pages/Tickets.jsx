import React from "react";
import CustomerTable from "../components/CustomerTable/CustomerTable";

import TicketTable from "../components/TicketTable/TicketTable";

const Tickets = () => {
  return (
    <>
      <TicketTable />
      <CustomerTable />
    </>
  );
};

export default Tickets;
