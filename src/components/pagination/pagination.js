import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },

  ul: {
    justifyContent: "center",
  },
}));

export default function BasicPagination({
  imagesPerPage,
  totalImages,
  paginate,
}) {
  const classes = useStyles();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={
        pageNumbers.length === 1 ? { display: "none" } : { display: "block" }
      }
      className={classes.root}
    >
      <Pagination
        count={pageNumbers.length}
        color="#9bcc58"
        onChange={paginate}
        style={{ color: "blue" }}
      />
    </div>
  );
}
