import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './section.css';
import Aos from 'aos';
import wulan from '../../Assets/image/wulan.png';

const Section = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="secIntro">
      <div className="section-container">
        <div className="profile-wrapper">
          <img className="profile-image" src={wulan} alt="Putri Nuril Wulanatining Asih" />
        </div>
        <div className="content-container">
          <div className="name">Putri Nuril Wulanatining Asih, S.Pd., M.Ak</div>
          <div className="tag-container">
            <div className="tag">Ahli Pajak</div>
          </div>
          <div className="description">Bergabunglah dengan saya dalam menguasai dunia pajak</div>
        </div>
        <div className="button-container">
          <button className="profile-button" onClick={() => navigate('/')}>Lihat Profil</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
