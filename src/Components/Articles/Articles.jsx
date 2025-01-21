import React from "react";
import "./articles.css";

const Articles = () => {
          return (
                    <div className="articles-section">
                              <h2>Artikel Terbaru</h2>
                              <p>Tetap Update dengan Wawasan Pajak</p>
                              <div className="articles-container">
                                        <div className="article-card">
                                                  <img src="image-potongan.jpg" alt="Maksimalkan Potongan" />
                                                  <h3>Maksimalkan Potongan</h3>
                                                  <p>
                                                            Pelajari cara mengoptimalkan potongan Anda untuk penghematan pajak
                                                            maksimum.
                                                  </p>
                                        </div>
                                        <div className="article-card">
                                                  <img src="image-tren-pajak.jpg" alt="Tren Pajak 2022" />
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
