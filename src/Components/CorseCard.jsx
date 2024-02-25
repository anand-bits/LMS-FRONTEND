import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseCardWrapper = styled('div')({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  width: '24rem',
  height: '480px',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CourseCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const CourseCardImage = styled('img')({
  width: '100%',
  height: '50%',
  objectFit:'contain',
  borderRadius: '8px 8px 0 0',
  transition: 'transform 0.3s ease-in-out',
});

const CourseCardDetails = styled('div')({
  padding: '1rem',
  '& h2': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFCC00',
    margin: 0,
    marginBottom: '1rem', // Increased margin bottom for separation
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderBottom: '2px solid #FFCC00', // Added bottom border for emphasis
    paddingBottom: '0.5rem', // Adjusted padding bottom for space
  },
  '& p': {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
});

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

 
  return (
    <CourseCardWrapper
    onClick={() => navigate("/course/description", { state: {...data}})}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CourseCardContent>
        <CourseCardImage src={data?.thumbnail?.secure_url} alt="Course thumbnail" />
        <CourseCardDetails>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <div>
            <p><span style={{ fontWeight: 'bold', color: '#009B4D' }}>Category:</span> {data?.category}</p>
            <p><span style={{ fontWeight: 'bold', color: '#009B4D' }}>Total Lectures:</span> {data?.numberoflectures}</p>
          </div>
          <div>
            <p><span style={{ fontWeight: 'bold', color: '#009B4D' }}>Instructor:</span> {data?.createdBy}</p>
            <p><span style={{ fontWeight: 'bold', color: '#009B4D' }}>Duration:</span> {data?.duration}</p>
          </div>
        </CourseCardDetails>
      </CourseCardContent>
    </CourseCardWrapper>
  );
};

export default CourseCard;
