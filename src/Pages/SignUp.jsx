import { Button, Container, TextField, Typography } from '@mui/material';
import  { useState } from 'react';
import toast from 'react-hot-toast';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import { createAccount } from '../Redux/Slices/AuthSlice';

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

  // Profile Picture Handeling......

  const handleFileChange = (e) => {
    e.preventDefault();

    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      // Handle file preview or upload logic
      setsignupData(
        {
            ...signupData,
            avatar:uploadedImage
        }
      )
      const fileReader= new FileReader

      fileReader.readAsDataURL(uploadedImage)
      fileReader.addEventListener("load",function()
      {
        
        setpreviewImage(this.result)
      })
    }
  };










 

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if(!signupData.email || !signupData.fullName || !signupData.password || !signupData.avatar)
    {
        toast.error("Please fill all the details");
        return;


    }


    // Checking Field Length

    if(signupData.fullName.length<5)
    {
        toast.error("Name Should not be less than 5");

    }
    const formData=new FormData();
    formData.append("fullName",signupData.fullName);

    formData.append("email",signupData.email);
    formData.append("password",signupData.password);
    formData.append("avatar",signupData.avatar);

    const response= await dispatch(createAccount(formData))
    console.log(response)

    try{
    if (response.meta.requestStatus === 'fulfilled') {
      toast.success(response.payload); // Show success message
      navigate("/"); // Redirect to home page
    } else {
      toast.error(response.error.message || "Failed to create account"); // Show error message
    }
  } catch (error) {
    toast.error(error.message || "Failed to create account"); // Show error message
  }
    navigate("/")

    setsignupData({
        fullName: '',
    email: '',
    password: '',
    avatar: '',

    });

    setpreviewImage("");




    // Add logic to handle form submission
    console.log('Form submitted:', formData);
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

            <Button type="submit" variant="contained" color="primary" fullWidth
            onChange={handleSubmit}>
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
