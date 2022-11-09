import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading";
import MetaData from "../../Components/MetaData";
import { Colors } from "../../styles/theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase64 from "react-file-base64";
import {
  clearErrors,
  loadUser,
  updatePassword,
  updateProfile,
} from "../../Redux/Actions/userActions";
import { UPDATE_PASSWORD_RESET, UPDATE_PROFILE_RESET } from "../../Redux/Constants/userConstants";

const UpdatePassword = ({ history }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error('Đổi mật khẩu thất bại', {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.success('Đổi mật khẩu thành công', {
          position: toast.POSITION.TOP_RIGHT
      });

      history.push('/me')

      dispatch({
          type: UPDATE_PASSWORD_RESET
      })
  }
  }, [dispatch, error, history, isUpdated, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('oldPassword', oldPassword);
    formData.set('password', password);

    dispatch(updatePassword(formData))
}
  return (
    <Container>
      <ToastContainer />
      <MetaData title={"Đổi mật khẩu"} />
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{ mt: 8, mb: 1, p: 5 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={2} sx={{ width: "35rem" }}>
            <Box sx={{ p: 3 }} component="form" onSubmit={submitHandler}>
              <Box textAlign="center">
                <Typography sx={{ p: 2 }} variant="h4">
                  Đổi mật khẩu
                </Typography>
              </Box>
              <Box sx={{ pl: 3, pr: 3, pt: 2 }}>
                <Typography variant="h6">Nhập mật khẩu cũ</Typography>
                <TextField
                  id="outlined-basic"
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
                  value={oldPassword}
                  name="oldPassword"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </Box>
              <Box sx={{ pl: 3, pr: 3, pt: 2 }}>
                <Typography variant="h6">Nhập mật khẩu mới</Typography>
                <TextField
                  id="outlined-basic"
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
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>

              <Box sx={{ pl: 5, pr: 5, pt: 2 }}>
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
      )}
    </Container>
  );
};

export default UpdatePassword;
