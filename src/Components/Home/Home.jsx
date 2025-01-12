import React, { useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

import 'aos/dist/aos.css';
const Home = () => {
          const navigate = useNavigate()

          useEffect(() => {
                    Aos.init({ duration: 2000 });
          }, []);
    return (
          <>
        <section className='home'>
            {/* <div className="overlay"></div> */}
            <div className="secContainer">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">
                        Selamat Datang di Platform <br /> Belajar Pajak Kursus Pajak
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                        Meningkatkan Pengetahuan Pajak Anda <br /> dengan Mudah dan Menyenangkan
                    </p>

                    <button data-aos="fade-up" data-aos-duration="3000" className='btn'>
                        <a onClick={() => navigate('/package')}>Mulai Sekarang</a>
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;