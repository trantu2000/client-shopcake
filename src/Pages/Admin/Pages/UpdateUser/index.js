import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../../../Components/MetaData";

import {
  Button,
  CircularProgress,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import { Colors } from "../../../../styles/theme";
import { useUIContext } from "../../../../context/ui";
import { useState } from "react";
import {
  clearErrors,
  getUserDetails,
  updateUser,
} from "../../../../Redux/Actions/userActions";
import { UPDATE_USER_RESET } from "../../../../Redux/Constants/userConstants";

const roles = ["user", "admin"];


export default function UpdateUser({ history, match }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const {loading, error, isUpdated } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userDetails);
  const userId = match.params.id;

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }

    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Cập nhật người dùng thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });

      history.push("/admin/users");

      dispatch({
        type: UPDATE_USER_RESET,
      });
    }
  }, [dispatch, error, history, isUpdated, userId, user]);

  const { drawerOpen } = useUIContext();

  const paperStyle = {
    padding: 5,
    height: "100%",
    width: "40rem",
    margin: "1rem auto 1rem auto",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("role", role);

    dispatch(updateUser(user._id, formData));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MetaData title={"Cập nhật thông tin bánh"} />
      <ToastContainer />

      <SideBar />

      <Box
        component="main"
        sx={{ mt: 10, ml: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={2}
          sx={{
            width: `${drawerOpen === true ? "94rem" : "107rem"}`,
            height: "100%",
          }}
        >
          <Box display="center" justifyContent="center">
            <Typography variant="h4" sx={{ p: 1 }}>
              Cập nhật thông tin người dùng
            </Typography>
          </Box>
          <Box>
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
              <>
                <Box>
                  <Paper elevation={10} style={paperStyle}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          width: "maxWidth",
                          color: "#111",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                      onSubmit={submitHandler}
                    >
                      <Box>
                        <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                          <TextField
                            id="outlined-basic"
                            label="Tên người dùng"
                            type="text"
                            variant="outlined"
                            fullWidth
                            required
                            sx={{
                              pb: 1,
                              ".MuiInputLabel-root": {
                                color: Colors.black,
                                fontSize: 15,
                              },
                              ".MuiInputBase-root": {
                                color: Colors.black,
                                fontSize: 15,
                              },
                            }}
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Box>

                        <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                          <TextField
                            sx={{
                              pb: 1,
                              ".MuiInputLabel-root": {
                                color: Colors.black,
                                fontSize: 15,
                              },
                              ".MuiInputBase-root": {
                                color: Colors.black,
                                fontSize: 15,
                              },
                            }}
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Box>
                        <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                          <Box
                            component="form"
                            sx={{
                              "& .MuiTextField-root": {},
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              sx={{
                                pb: 1,
                                ".MuiInputLabel-root": {
                                  color: Colors.black,
                                  fontSize: 15,
                                },
                                ".MuiInputBase-root": {
                                  color: Colors.black,
                                  fontSize: 15,
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              label="Phân quyền"
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              fullWidth
                            >
                              {roles.map((category) => (
                                <MenuItem key={role} value={role}>
                                  {category}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          pl: 10,
                          pr: 10,
                          pt: 2,
                          mb: 2,
                        }}
                      >
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          style={{ margin: "5px 0" }}
                          fullWidth
                        >
                          Cập nhật
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
