import React, { useState } from "react";

import { faker } from "@faker-js/faker";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./table.css";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Grid,
  TableFooter,
  TablePagination,
  Typography,
} from "@mui/material";

let USERS = [],
  STATUSES = ["High", "Low", "Normal"];
for (let i = 0; i < 40; i++) {
  USERS[i] = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.name(),
    joinDate: faker.date.past().toISOString(),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

console.log(USERS);
const TicketTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead
            style={{
              fontWeight: "bold",
              backgroundColor: "grey",
              color: "black",
            }}
          >
            <TableRow>
              <TableCell>User Info</TableCell>
              <TableCell>Job Info</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Grid container>
                    <Grid item lg={2}>
                      <Avatar alt={row.name} src="." />
                    </Grid>
                    <Grid item lg={10}>
                      <Typography>{row.name}</Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.email}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {/* {row.phone} */}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {row.jobTitle}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {row.company}
                  </Typography>
                </TableCell>
                <TableCell>{row.joinDate}</TableCell>
                <TableCell>
                  <Typography
                    className="status"
                    style={{
                      backgroundColor:
                        (row.status === "High" && "#F12B2C") ||
                        (row.status === "Low" && "#FEC400") ||
                        (row.status === "Normal" && "#29CC97"),
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      color: "white",
                      borderRadius: 6,
                      padding: "5px 12px",
                      display: "inline-block",
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={USERS.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default TicketTable;
