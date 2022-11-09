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
  updateProfile,
} from "../../Redux/Actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../Redux/Constants/userConstants";

const UpdateProfile = ({ history }) => {
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatar(user.avatar && user.avatar.url);
    }
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.success("Cập nhật thành công!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(loadUser());

      history.push("/me");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, history, isUpdated, user]);
  const handleChangeAvt = (e) => {
    //console.log(e.base64);
    setAvatar(e.base64);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("avatar", avatar);

    // console.log(name);
    // console.log(email);
    // console.log(avatar);

    dispatch(updateProfile(formData));
  };
  return (
    <Container>
      <ToastContainer />
      <MetaData title={"Cập nhật thông tin"} />
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
                  Cập nhật thông tin
                </Typography>
              </Box>
              <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                <Typography variant="h6">Họ và tên</Typography>
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
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                <Typography variant="h6">Email</Typography>
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
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                <Typography variant="h6">Ảnh đại diện</Typography>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="Remy Sharp"
                      src={avatar}
                    />
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <FileBase64
                      multiple={false}
                      onDone={handleChangeAvt}
                      name="avatar"
                      value={avatar}
                      accept="image/*"
                      //className='custom-file-input'
                    />
                  </Box>
                </Box>
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

export default UpdateProfile;
