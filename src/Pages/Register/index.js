import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Colors } from "../../styles/theme";
import { Box } from "@mui/system";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../Components/MetaData";
import { clearErrors, register } from "../../Redux/Actions/userActions";

const Register = ({ history }) => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "5rem auto 1rem auto",
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
})
const { name, email, password } = user;
const dispatch = useDispatch();
const { isAuthenticated, error, loading } = useSelector(state => state.auth);




useEffect(() => {

    if (isAuthenticated) {
        history.push('/')
        toast.success('Register success!', {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    if (error) {
        toast.error(error, {
            position: toast.POSITION.TOP_RIGHT
        });
        dispatch(clearErrors());
    }

}, [dispatch, isAuthenticated, error, history])



const onChange = e => {

    setUser({ ...user, [e.target.name]: e.target.value })

}



const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);


    dispatch(register(formData))
}



 

  return (
    <Box sx={{ mt: 2 }}>
      <Grid>
        <MetaData title="Đăng ký" />
        <ToastContainer />
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: Colors.primary }}>
              <LockIcon />
            </Avatar>
            <h2>Đăng ký</h2>
          </Grid>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "maxWidth", color: "#111" },
            }}
            noValidate
            
            onSubmit={submitHandler}
          >
            <TextField
              id="outlined-basic"
              label="Nhập họ và tên"
              type="text"
              variant="outlined"
              fullWidth
              required
              sx={{
                pb: 2,
                ".MuiInputLabel-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
                ".MuiInputBase-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
              }}
              value={name}
              name="name"
              onChange={onChange}
            />
            <TextField
              id="outlined-basic"
              label="Nhập email"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{
                pb: 2,
                ".MuiInputLabel-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
                ".MuiInputBase-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
              }}
              value={email}
              name="email"
              onChange={onChange}
            />
            <TextField
              id="outlined-basic"
              label="Nhập password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              name="password"
              onChange={onChange}
              sx={{
                pb: 2,
                ".MuiInputLabel-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
                ".MuiInputBase-root": {
                  color: Colors.black,
                  fontSize: 16,
                },
              }}
            />
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ margin: "1.5rem 0" }}
                fullWidth
              >
                Đăng ký
              </Button>
            )}

            <Typography align="center">
              {" "}
              Bạn đã có tài khoản?
              <Link to="/login">Đăng nhập</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Register;
