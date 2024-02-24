// Import necessary dependencies from Material-UI and other libraries
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import homePageMainImage from '../assets/Images/Anand.jpg'; // Import the image
import HomeLayout from '../Layouts/HomeLayout'; // Import the HomeLayout component

// Functional component for the home page
const HomePage = () => {
    return (
        // Use the HomeLayout component to wrap the content
        <HomeLayout>
            {/* Container for the main content */}
            <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'white'}}>
                {/* Grid container with spacing and alignment */}
                <Grid container spacing={3} alignItems="center" justifyContent="space-between" style={{ flex: 1 }}>
                    {/* Left side content */}
                    <Grid item md={6} style={{ backgroundColor: '#f6f1c2', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                        {/* Typography for the main heading */}
                        <Typography variant="h3" component="h1" color="textPrimary" gutterBottom>
                            Discover the Best <span style={{ color: '#FFD700' }}>Online Courses</span>
                        </Typography>
                        {/* Typography for the paragraph */}
                        <Typography variant="body1" color="textSecondary" paragraph>
                            Explore a vast library of courses taught by highly skilled and qualified faculties at an affordable cost.
                        </Typography>
                        {/* Buttons for navigation */}
                        <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                            <Link to="/courses">
                                <Button variant="contained" color="primary">
                                    Explore Courses
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="contained" color="secondary">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                    {/* Right side content */}
                    <Grid item md={6} style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>
                        {/* Card component with image */}
                        <Card sx={{ maxWidth: 400, boxShadow: 6, borderRadius: '8px', overflow: 'hidden' }}>
                            {/* Image with styling */}
                            <img src={homePageMainImage} alt="home page" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </HomeLayout>
    );
};

// Export the HomePage component
export default HomePage;
