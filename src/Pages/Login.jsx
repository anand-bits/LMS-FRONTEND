import { Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { isEmail } from "../Helpers/regesMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',
    });

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        });
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (!signinDetails.email || !signinDetails.password) {
            return alert("Please fill in all the details");
        }

        if (!isEmail(signinDetails.email)) {
            return alert("Invalid email provided");
        }

        const response = await dispatch(login(signinDetails));

        if (response?.payload?.data) {
            navigate("/");
        }

        setSigninDetails({
            email: '',
            password: '',
        });
    }

    return (
        <HomeLayout>
            <Container sx={{ minHeight: '70vh' }} maxWidth="md">
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100%' }}
                >
                    <Grid item xs={12} md={6} sx={{ marginTop: "20vh" }}>
                        <Typography variant="h3" component="h1" align="center" mb={4}>
                            Login
                        </Typography>
                        <form onSubmit={onFormSubmit}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                name="email"
                                type="email"
                                value={signinDetails.email}
                                onChange={handleUserInput}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                name="password"
                                type="password"
                                value={signinDetails.password}
                                onChange={handleUserInput}
                                required
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mt: 2 }}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" mt={2}>
                            Don't have an account?{" "}
                            <Link component={RouterLink} to="/signup" underline="hover">
                                Sign up
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </HomeLayout>
    );
}

export default Signin;
