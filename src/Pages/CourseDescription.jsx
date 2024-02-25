import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

const Image = styled('img')({
  width: '70%',
  height: '70%',
  objectFit: 'cover',
  borderRadius: '8px',
});

const CourseDescription = () => {
  const { state } = useLocation();

  useEffect(() => {
    // Print the state object to the console for verification
    console.log("State:", state);
  }, [state]);

  return (
    <HomeLayout>
      <Box width="80%" mx="auto" p={4} bgcolor="white" borderRadius={8} boxShadow={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <Image src={state?.thumbnail?.secure_url} alt="Course Thumbnail" />
              <Box py={3}>
                <Typography variant="h6" component="h2">
                  <span style={{ fontWeight: 'bold', color: '#FFCC00' }}>Total Lectures:</span>{" "}
                  {state?.numberOfLectures}
                </Typography>
                <Typography variant="h6" component="h2">
                  <span style={{ fontWeight: 'bold', color: '#FFCC00' }}>Instructor:</span>{" "}
                  {state?.createdBy}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" py={3}>
              <Typography variant="h4" component="h1" color="text.primary" gutterBottom>
                {state?.title}
              </Typography>
              <Typography variant="subtitle1" component="h2" color="text.secondary" gutterBottom>
                Course Description:
              </Typography>
              <Typography variant="body1" color="text.primary">
                {state?.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </HomeLayout>
  );
}

export default CourseDescription;
