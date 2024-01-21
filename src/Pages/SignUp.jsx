import { Button, Container,TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {BsPersonCircle} from "react-icons/bs"

import HomeLayout from '../Layouts/HomeLayout';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const[previewImage,setpreviewImage]= useState("");


  return (
    <HomeLayout>
      <Container maxWidth="xs">
        <div className="flex items-center justify-center">
          <form className="flex flex-col justify-center gap-3 rounded-lg p-4" onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
              Registration Page
            </Typography>

            <label htmlFor='image_uploads' className='cursor-pointer'>
                {previewImage?(
                    <img className='w-24 h-24 rounded-full m-auto' src={previewImage}/>
                ):(<BsPersonCircle className='w-24 h-24 rounded-full m-auto'/>)}

            </label>

            <input
            className='hidden'
            type='file'
            name='image_uploads'
            id='image_uploads'
            accept='.jpg,.jpeg,.png,.svg'
            />






            <TextField label="Full Name" variant="outlined" fullWidth margin="normal" required />
            <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" required />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
            
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </HomeLayout>
  );
};

export default SignUp;
