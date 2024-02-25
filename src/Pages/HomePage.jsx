import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import homePageMainImage from '../assets/Images/Anand.jpg';
import HomeLayout from '../Layouts/HomeLayout';

const HomePage = () => {
    return (
        <HomeLayout>
           <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', minWidth: 'auto', backgroundColor: '#E0FFFF' }}>

                <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ flex: 1 }}>
                    <Grid item md={4} xs={12} style={{ backgroundColor: '#f6f1c2', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                        <Typography variant="h3" component="h1" color="textPrimary" gutterBottom>
                            Discover the Best <span style={{ color: '#FFD700' }}>Online Courses</span>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph>
                            Explore a vast library of courses taught by highly skilled and qualified faculties at an affordable cost.
                        </Typography>
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
                    <Grid item md={4} xs={12} style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>
                        <Card sx={{ maxWidth: 400, boxShadow: 6, borderRadius: '8px', overflow: 'hidden' }}>
                            <img src={homePageMainImage} alt="home page" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </HomeLayout>
    );
};

export default HomePage;
