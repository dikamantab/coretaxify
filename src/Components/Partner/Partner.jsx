import { useEffect} from "react";
import "./partner.css";
import UTM from "../../Assets/image/UTM.png";
import PANCASILA from "../../Assets/image/pancasila.png";
import UNISILA from "../../Assets/image/UNISSULA.png";
import Aos from "aos";

const Partner = () => {
          useEffect(() => {
                    Aos.init({ duration: 2000 });
          }, []);
          return (
                    <div className="partner-section" data-aos="fade-up">
                              <h2>Partner Kami</h2>
                              <div className="partner-container" data-aos="fade-up">
                                        <div className="partner-logo">
                                                  <img src={UTM} alt="Universitas A" />
                                                  <p>Universitas A</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src={PANCASILA} alt="Institut B" />
                                                  <p>Institut B</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src={UNISILA} alt="Sekolah C" />
                                                  <p>Sekolah C</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src={UNISILA} alt="Sekolah C" />
                                                  <p>Sekolah C</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src={UTM} alt="Universitas A" />
                                                  <p>Universitas A</p>
                                        </div>
                              </div>
                    </div>
          );
};

export default Partner;
