import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../Components/CorseCard";
import HomeLayout from "../Layouts/HomeLayout";
import { getAllCourses } from "../Redux/Slices/courseSlice";

function CourseList() {
    const dispatch = useDispatch();

    const { courseList } = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() =>{
        loadCourses();
    }, [])

    return (
        <HomeLayout>
            <Container sx={{ minHeight: "90vh", paddingTop: "12px" }}>
                <Grid container direction="column" alignItems="center" spacing={4}>
                    <Grid item>
                        <Typography variant="h4" align="center" fontWeight="bold" color="primary">
                            Explore Courses
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="center" color="textSecondary">
                            Courses are created by top industry experts to provide you with high-quality learning experiences.
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" spacing={3}>
                        {courseList.map((course) => (
                            <Grid item key={course._id}>
                                <CourseCard data={course} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </HomeLayout>
    );
}

export default CourseList;
