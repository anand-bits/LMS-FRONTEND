import { Typography } from '@mui/material';

import aboutMainPage from '../assets/Images/aboutMainImage.png';
import anand from "../assets/Images/Anand2.jpg"
import apj from "../assets/Images/apj.png";
import billGates from "../assets/Images/billGates.png";
import nelsonMandela from "../assets/Images/nelsonMandela.png";
import steveJobs from "../assets/Images/steveJobs.png";
import HomeLayout from '../Layouts/HomeLayout';



function Aboutus() {
    return (
        <HomeLayout>
            <div className="flex flex-col pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                    <Typography
  variant="h3"
  color="secondary"
  gutterBottom
  style={{
    fontWeight: 'bold',
    fontFamily: 'cursive',
    letterSpacing: '1px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    marginTop: '20px',
  }}
>
  Affordable and Quality Education
</Typography>

<p className="text-xl text-black-200" style={{ lineHeight: '1.6', textAlign: 'justify' }}>
  Our goal is to provide affordable and quality education to the world. We are creating a platform for aspiring teachers and students to share their skills, creativity, and knowledge with each other, empowering and contributing to the growth and wellness of mankind.
</p>

                    </section>
                    <div className="w-1/2">
                        <img 
                            src={aboutMainPage}
                            className='drop-shadow-3xl'
                            alt="about main page"
                        />
                    </div>
                </div>
                <div className="carousel w-1/2 my-10 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-black-900'>Teaching is a very noble profession that shapes the character, caliber, and future of an individual.</p>
                            <h3 className='text-2xl font-semibold'>APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                         <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-red-800'>We dont get a chance to do that many things, and every one should be really excellent.</p>
                            <h3 className='text-2xl font-semibold'>Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-green-800'>Success is a lousy teacher. It seduces smart people into thinking they can’t lose.</p>
                            <h3 className='text-2xl font-semibold'>Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-yellow-800'>Education is the most powerful tool you can use to change the world.</p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div id="slide5" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={anand} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-yellow-800'>Chal be Chutiee Padhne Likhne se Koi Fayda nahi hai.</p>
                            <h3 className='text-2xl font-semibold'>Anand Tiwari</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </HomeLayout>
    );
}

export default Aboutus;
