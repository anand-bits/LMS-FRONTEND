import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setsignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    avatar: '',
  });

  const [previewImage, setpreviewImage] = useState('');

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setsignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file preview or upload logic
      const reader = new FileReader();
      reader.onloadend = () => {
        setpreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', signupData);
    // You can dispatch actions, make API calls, etc. here
  };

  return (
    <HomeLayout>
      <Container maxWidth="xs">
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col justify-center gap-3 rounded-lg p-4"
            onSubmit={handleSubmit}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Registration Page
            </Typography>

            <label htmlFor="image_uploads" className="cursor-pointer">
              {previewImage ? (
                <img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="Preview" />
              ) : (
                <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
              )}
            </label>

            <input
              className="hidden"
              type="file"
              name="image_uploads"
              id="image_uploads"
              accept=".jpg,.jpeg,.png,.svg"
              onChange={handleFileChange}
            />
           


            
<TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={handleUserInput}
              value={signupData.fullName}
              name="fullName"  // Add name attribute for the Full Name field
            />

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={handleUserInput}
              value={signupData.email}
              name="email"  // Add name attribute for the Email field
            />

<TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={handleUserInput}
              value={signupData.password}
              name="password"  // Add name attribute for the password field
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="link text-accent cursor-pointer">
                Login
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </HomeLayout>
  );
};

export default SignUp;
