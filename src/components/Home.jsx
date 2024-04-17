import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import Ai from '../assets/ani.json';
import Ai2 from "../assets/ai.json"
import "./Home.css"
const Home = () => {
    const style={
        width:"700px",
    }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade">
      <Navbar />
      <div className="cont">
      <div>
        <Lottie  style={style} animationData={Ai} />
      </div>
      </div>
    </div>
  );
}

export default Home;
