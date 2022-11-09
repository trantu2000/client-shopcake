import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Loading from "../../Components/Loading";
import MetaData from "../../Components/MetaData";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <Container>
      <MetaData title={"Trang cá nhân"} />
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ mt: 10, mb: 2, p: 5 }}>
          <Paper elevation={10}>
            <Box sx={{ p: 3 }}>
              <Box textAlign="center">
                <Typography sx={{ p: 2 }} variant="h4">
                  Trang cá nhân
                </Typography>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={6}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Box sx={{ p: 2 }}>
                        <Avatar
                          src={user.avatar && user.avatar.url}
                          alt={user.name}
                          sx={{ width: "18rem", height: "18rem" }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Link to="/update-profile">
                          <Button variant="contained">
                            Cập nhật thông tin
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mt: 12 }}>
                      <Box display="flex" sx={{ mb: 2 }}>
                        <Box>
                          <Typography sx={{ mr: 1 }} variant="h5">
                            Họ và tên:
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6">{user.name}</Typography>
                        </Box>
                      </Box>
                      <Box display="flex" sx={{ mb: 2 }}>
                        <Box>
                          <Typography sx={{ mr: 1 }} variant="h5">
                            Email:
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6">{user.email}</Typography>
                        </Box>
                      </Box>
                      <Box display="flex" sx={{ mb: 2 }}>
                        <Box>
                          <Typography sx={{ mr: 1 }} variant="h5">
                            Ngày đăng ký:
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6">
                            {String(user.createdAt).substring(0, 10)}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{ pr: 10, pt: 5 }}
                          display="flex"
                          
                        >
                          <Link to="/password/update">
                            <Button fullWidth variant="contained">
                              Đổi mật khẩu
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
