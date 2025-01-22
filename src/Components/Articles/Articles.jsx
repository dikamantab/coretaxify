import { useEffect} from "react";
import "./articles.css";
import Aos from "aos";
import img1 from "../../Assets/image/1.png";

const Articles = () => {
          useEffect(() => {
                    Aos.init({ duration: 2000 });
          }, []);
          return (
                    <div className="articles-section" data-aos="fade-up">
                              <h2>Artikel Terbaru</h2>
                              <p>Tetap Update dengan Wawasan Pajak</p>
                              <div className="articles-container">
                                        <div className="article-card">
                                                  <img src={img1} alt="Maksimalkan Potongan" />
                                                  <h3>Maksimalkan Potongan</h3>
                                                  <p>
                                                            Pelajari cara mengoptimalkan potongan Anda untuk penghematan pajak
                                                            maksimum.
                                                  </p>
                                        </div>
                                        <div className="article-card">
                                                  <img src={img1} alt="Tren Pajak 2022" />
                                                  <h3>Tren Pajak 2022</h3>
                                                  <p>
                                                            Jelajahi tren pajak terbaru yang membentuk industri saat ini.
                                                  </p>
                                        </div>
                              </div>
                    </div>
          );
};

export default Articles;
