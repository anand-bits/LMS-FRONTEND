import { Avatar, Button,  TextField, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../Helpers/regesMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        fullName: "",
        password: "",
        avatar: ""
    });

    const [previewImage, setPreviewImage] = useState("");

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        });
    };

    const handleImage = (e) => {
        const uploadedImage = e.target.files[0];
        if (!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.onload = function () {
            setPreviewImage(this.result);
        };
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (!signupDetails.email || !signupDetails.password || !signupDetails.fullName) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupDetails.fullName.length < 5) {
            toast.error("Name should be at least 5 characters");
            return;
        }
        if (!isEmail(signupDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        if (!isValidPassword(signupDetails.password)) {
            toast.error("Invalid password provided, password should be 6-16 characters long with at least a number and a special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupDetails.fullName);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password);
        formData.append("avatar", signupDetails.avatar);

        const response = await dispatch(createAccount(formData));
        console.log(response);
        if (response?.payload?.data) {
            navigate("/login");
        }
        setSignupDetails({
            email: "",
            fullName: "",
            password: "",
            avatar: ""
        });
        setPreviewImage("");
    };

  
    return (
      <HomeLayout>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
              <Card sx={{ width: 500 }}>
                  <CardContent>
                  <Typography variant="h3" mb={4} sx={{ color: "blue", fontWeight: "bold", textAlign: "center" }}>
    Create an Account
</Typography>

                      <label htmlFor="image_uploads" style={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>
    {previewImage ? (
        <Avatar alt="Avatar Preview" src={previewImage} sx={{ width: 150, height: 150 }} />
    ) : (
        <BsPersonCircle style={{ width: 140, height: 150,marginBottom: "16px" }} />
    )}
</label>
                  <input
                      onChange={handleImage}
                      type="file"
                      style={{ display: "none", marginBottom: "16px" }}
                      name="image_uploads"
                      id="image_uploads"
                      accept=".jpg, .jpeg, .png, .svg"
                  />
                  <TextField
                      onChange={handleUserInput}
                      value={signupDetails.fullName}
                      required
                      type="text"
                      name="fullName"
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{ marginBottom: 2 }}
                  />
                  <TextField
                      onChange={handleUserInput}
                      value={signupDetails.email}
                      required
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{ marginBottom: 2 }}
                  />
                  <TextField
                      onChange={handleUserInput}
                      value={signupDetails.password}
                      required
                      type="password"
                      name="password"
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{ marginBottom: 2 }}
                  />
                 <Button
    variant="contained"
    color="primary"
    onClick={onFormSubmit}
    fullWidth
    sx={{ marginBottom: 2 }} // Adjust the margin as needed
>
    Create Account
</Button>
                  <Typography mb={2}>
    Already have an account?{"  "}
    <Link to="/login" style={{ color: "blue", textDecoration: "underline" }}>Login here</Link>
</Typography>

                  </CardContent>
                </Card>
            </div>
        </HomeLayout>
  );
}

export default Signup;