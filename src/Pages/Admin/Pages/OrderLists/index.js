import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allOrders } from "../../../../Redux/Actions/orderActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CLEAR_ERRORS } from "../../../../Redux/Constants/orderConstants";
import MetaData from "../../../../Components/MetaData";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { CircularProgress, Paper, TableHead } from "@mui/material";
import { Colors } from "../../../../styles/theme";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useUIContext } from "../../../../context/ui";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function OrderListsAdmin() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { loading, error, orders } = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();
  console.log(orders);

  useEffect(() => {
    dispatch(allOrders());

    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(CLEAR_ERRORS());
    }

    // if (isDeleted) {
    //   toast.success("Order deleted successfully !", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    //   history.push("/admin/orders");
    //   dispatch({ type: DELETE_ORDER_RESET });
    //}
  }, [dispatch, error]);
  const { drawerOpen} = useUIContext();

  return (
    <Box sx={{ display: "flex" }}>
      <MetaData title={"Đơn đặt hàng"} />
      <ToastContainer />

      <SideBar />

      <Box
        component="main"
        sx={{ mt: 13, ml: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={2} sx={{ width: `${ drawerOpen === true ? "94rem" : "107rem"}`, height: "100%" }}>
          <Box display="center" justifyContent="center">
            <Typography variant="h4" sx={{ p: 3 }}>
              Đơn đặt hàng
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  p: 3,
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 500 }}
                  aria-label="custom pagination table"
                >
                  <TableHead sx={{ bgcolor: Colors.dove_gray }}>
                    <TableRow>
                      <TableCell sx={{ fontSize: 16 }} align="left">
                        Order ID
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="center">
                        Số lượng
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="center">
                        Tổng tiền
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="center">
                        Trạng thái
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="center">
                        #
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? orders.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : orders
                    ).map((item) => (
                      <TableRow key={item._id}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontSize: 16 }}
                        >
                          {item._id}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          align="center"
                          sx={{ fontSize: 16 }}
                        >
                          {item.orderItems.length}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          align="center"
                          sx={{ fontSize: 16 }}
                        >
                          {item.totalPrice.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </TableCell>

                        <TableCell
                          style={{ width: 160 }}
                          align="center"
                          sx={{ fontSize: 16 }}
                        >
                          {item.orderStatus &&
                          String(item.orderStatus).includes(
                            "Giao hàng thành công"
                          ) ? (
                            <div style={{ color: "green" }}>
                              {item.orderStatus}
                            </div>
                          ) : (
                            <div style={{ color: "red" }}>
                              {item.orderStatus}
                            </div>
                          )}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          align="center"
                          sx={{ fontSize: 16 }}
                        >
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Box>
                              <IconButton
                                sx={{
                                  "&:hover": {
                                    color: "red",
                                  },
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                            <Link to={`/admin/order/${item._id}`}>
                              <Box>
                                <IconButton>
                                  <VisibilityIcon />
                                </IconButton>
                              </Box>
                            </Link>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} sx={{ fontSize: 16 }} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "rows per page",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
