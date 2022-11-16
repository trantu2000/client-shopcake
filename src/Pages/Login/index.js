import React, {  useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
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
import { clearErrors, login } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import MetaData from "../../Components/MetaData";

const Login = ({ history, location }) => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "5rem auto 1rem auto",
  };
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
      // toast.success("Login success !", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }

    if (error) {
      // alert.error(error);
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history]);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Grid> 
      <MetaData title="Đăng nhập" />
      <ToastContainer />
      <Box sx={{mt:10}}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: Colors.primary }}>
              <LockIcon />
            </Avatar>
            <h2>Đăng nhập</h2>
          </Grid>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "maxWidth", color: "#111" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitHandle}
          >
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Nhập password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="nhớ mật khẩu"
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
                style={{ margin: "8px 0" }}
                fullWidth
              >
                Đăng nhập
              </Button>
            )}

            <Typography align="center" sx={{ p: 2 }}>
              <Link href="#">Quên mật khẩu?</Link>
            </Typography>
            <Typography align="center">
              {" "}
              Bạn chưa có tài khoản?
              <Link to="/register">Đăng ký</Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Login;
