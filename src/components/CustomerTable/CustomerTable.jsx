import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./customertable.css";
// import FilterListIcon from "@material-ui/icons/FilterList";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import Avatar1 from "../../assets/images/avatar-1.png";
import Avatar2 from "../../assets/images/avatar-2.png";
import Avatar3 from "../../assets/images/avatar-3.png";
import Avatar4 from "../../assets/images/avatar-4.png";
import Avatar5 from "../../assets/images/avatar-5.png";
import Avatar6 from "../../assets/images/avatar-6.png";
import Avatar7 from "../../assets/images/avatar-7.png";
import Avatar8 from "../../assets/images/avatar-8.png";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    img: Avatar1,
    title: "Contact Email not Linked",
    content: "Updated 1 day ago",
    company: "Jared O'Hara DVM",
    location: "Otilia58@yahoo.com",
    date: "March 2, 2023",
    time: " 10:30 AM",
    priority: "High",
  },
  {
    img: Avatar2,
    title: "Adding Images to Featured Posts",
    content: "Updated 1 day ago",
    company: "Robin Prosacco",
    location: "Alvina.Jenkins46@yahoo.com",
    date: "March 1, 2023 ",
    time: "2:45 PM",
    priority: "Low",
  },
  {
    img: Avatar3,
    title: "When will I be charged this month?",
    content: "Updated 1 day ago",
    company: "Manuel Nolan",
    location: "Muhammad.Considine@yahoo.com",
    date: "February 28, 2023 ",
    time: "9:15 AM",
    priority: "High",
  },
  {
    img: Avatar4,
    title: "Payment not going through",
    content: "Updated 2 day ago",
    company: "Christian Bale",
    location: "christianbale24@yahoo.com",
    date: "January 10, 2009 ",
    time: "6:05 AM",
    priority: "Normal",
  },
  {
    img: Avatar5,
    title: "Unable to add replies",
    content: "Updated 2 day ago",
    company: "Henry Cavil",
    location: "henrycavil@gmail.com",
    date: "December 15, 2021 ",
    time: "12:20 PM",
    priority: "High",
  },
  {
    img: Avatar6,
    title: "Downtime since last week",
    content: "Updated 3 day ago",
    company: "Chris Evans",
    location: "christyy6@yahoo.com",
    date: "November 2, 2021 ",
    time: "9:15 AM",
    priority: "Normal",
  },
  {
    img: Avatar7,
    title: "Referral Bonus",
    content: "Updated 4 day ago",
    company: "Sam Smith",
    location: "samsmith@yahoo.com",
    date: "February 15, 2022 ",
    time: "7:30 AM",
    priority: "Low",
  },
  {
    img: Avatar8,
    title: "How do I change my password?",
    content: "Updated 6 day ago",
    company: "Steve Rogers",
    location: "Stevogers@gmail.com",
    date: "March 06, 2022 ",
    time: "2:35 PM",
    priority: "Normal",
  },
  {
    img: Avatar1,
    title: "Contact Email not Linked",
    content: "Updated 1 day ago",
    company: "Jared O'Hara DVM",
    location: "Otilia58@yahoo.com",
    date: "March 2, 2023",
    time: " 10:30 AM",
    priority: "High",
  },
  {
    img: Avatar2,
    title: "Adding Images to Featured Posts",
    content: "Updated 1 day ago",
    company: "Robin Prosacco",
    location: "Alvina.Jenkins46@yahoo.com",
    date: "March 1, 2023 ",
    time: "2:45 PM",
    priority: "Low",
  },
  {
    img: Avatar3,
    title: "When will I be charged this month?",
    content: "Updated 1 day ago",
    company: "Manuel Nolan",
    location: "Muhammad.Considine@yahoo.com",
    date: "February 28, 2023 ",
    time: "9:15 AM",
    priority: "High",
  },
  {
    img: Avatar4,
    title: "Payment not going through",
    content: "Updated 2 day ago",
    company: "Christian Bale",
    location: "christianbale24@yahoo.com",
    date: "January 10, 2009 ",
    time: "6:05 AM",
    priority: "Normal",
  },
  {
    img: Avatar5,
    title: "Unable to add replies",
    content: "Updated 2 day ago",
    company: "Henry Cavil",
    location: "henrycavil@gmail.com",
    date: "December 15, 2021 ",
    time: "12:20 PM",
    priority: "High",
  },
  {
    img: Avatar6,
    title: "Downtime since last week",
    content: "Updated 3 day ago",
    company: "Chris Evans",
    location: "christyy6@yahoo.com",
    date: "November 2, 2021 ",
    time: "9:15 AM",
    priority: "Normal",
  },
  {
    img: Avatar7,
    title: "Referral Bonus",
    content: "Updated 4 day ago",
    company: "Sam Smith",
    location: "samsmith@yahoo.com",
    date: "February 15, 2022 ",
    time: "7:30 AM",
    priority: "Low",
  },
  {
    img: Avatar8,
    title: "How do I change my password?",
    content: "Updated 6 day ago",
    company: "Steve Rogers",
    location: "Stevogers@gmail.com",
    date: "March 06, 2022 ",
    time: "2:35 PM",
    priority: "Normal",
  },
];

const CustomerTable = () => {
  const classes = useStyles();
  // Define a custom style for the ticket details cell
  const ticketDetailsStyle = {
    display: "flex",
    verticalAlign: "middle",
    paddingLeft: "2rem",
  };

  // Define a custom style for the ticket details image
  const ticketImageStyle = {
    display: "block",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "20px",
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterPriority(event.target.value);
  };

  return (
    <div className="table_container">
      <div className="table-header">
        <div className="table-header-title">
          <h3>All Ticket items</h3>
        </div>
        <div className="search_filter">
          <div className="table-header-search">
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              id="outlined-search"
              placeholder="Search..."
              type="search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="table-header-filter">
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
            >
              <InputLabel>
                <FilterAltIcon />
              </InputLabel>
              <Select
                inputProps={{
                  style: { border: "none", outline: "none" },
                }}
                value={filterPriority}
                onChange={handleFilter}
                label={<FilterAltIcon />}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ticket Details</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter((row) => {
              if (filterPriority === "All") return true;
              return row.priority === filterPriority;
            })
            .filter((row) => {
              if (searchTerm === "") return true;
              return row.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.title}>
                <TableCell
                  component="th"
                  scope="row"
                  style={ticketDetailsStyle}
                >
                  <img src={row.img} alt={row.title} style={ticketImageStyle} />
                  <div>
                    <h3>{row.title}</h3>
                    <p>{row.content}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <p>{row.company}</p>
                  <p>{row.location}</p>
                </TableCell>
                <TableCell>
                  <p>{row.date}</p>
                  <p>{row.time}</p>
                </TableCell>
                <TableCell>{row.priority}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default CustomerTable;
