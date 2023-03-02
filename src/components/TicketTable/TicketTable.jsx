import React from "react";
// import faker from "faker";
import { faker } from "@faker-js/faker";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material/core";

import "./table.css";

let USERS = [],
  STATUSES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.name(),
    joinDate: faker.date.past(),
    // time: faker.name.findName(),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

console.log(USERS);
const TicketTable = () => {
  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Dessert (100g serving)</TableCell>
  //           <TableCell align="right">Calories</TableCell>
  //           <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //           <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow
  //             key={row.name}
  //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //           >
  //             <TableCell component="th" scope="row">
  //               {row.name}
  //             </TableCell>
  //             <TableCell align="right">{row.calories}</TableCell>
  //             <TableCell align="right">{row.fat}</TableCell>
  //             <TableCell align="right">{row.carbs}</TableCell>
  //             <TableCell align="right">{row.protein}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
};

export default TicketTable;
