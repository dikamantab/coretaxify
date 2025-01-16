import React, {useEffect} from "react";
import "./fitur.css";
import featureImage from "../../Assets/image/img1.png"; // Ganti dengan path gambar Anda
import aos from "aos";

const Fitur = () => {

          
            useEffect(() => {
              aos.init({ duration: 2000 });
            }, []);

          const features = [
                    {
                              title: "E-Faktur",
                              points: [
                                        "Faktur Masukan",
                                        "Faktur Keluaran",
                                        "Retur Pajak Keluaran",
                                        "Retur Pajak Masukan",
                              ],
                    },
                    {
                              title: "E-Bupot",
                              points: [
                                        "Bupot Unifikasi",
                                        "Pembuatan sendiri",
                                        "Penerapan secara digunggung",
                              ],
                    },
                    {
                              title: "SPT",
                              points: [
                                        "Pelaporan SPT",
                                        "Pencatatan Pembukuan SPT",
                                        "Dasar Kompensasi",
                                        "Mengunggah ketidakberesan SPT",
                              ],
                    },
                    {
                              title: "Pembayaran",
                              points: [
                                        "Pemeriksaan Pembukuan Bulanan",
                                        "Pembuatan Standar Invoice Billing",
                                        "Top Up e-Billing",
                                        "Pengelolaan Tagihan",
                                        "Penerimaan Pembayaran Dibayar",
                                        "Rekapitulasi Pembayaran Individu",
                                        "Penyiapan PDF SPT dan CSV",
                                        "Pengolahan PDAM",
                              ],
                    },
                    {
                              title: "E-Bupot",
                              points: [
                                        "Bupot Unifikasi",
                                        "Pembuatan sendiri",
                                        "Penerapan secara digunggung",
                              ],
                    },
          ];

          return (
                    <div className="fitur-container">
                              <h1 className="fitur-title" data-aos="fade-up" data-aos-duration="1500">Fitur Coretaxify</h1>
                              <div className="fitur-grid" data-aos="fade-up" >
                                        {features.map((feature, index) => (
                                                  <div className="fitur-card" key={index}>
                                                            <img
                                                                      src={featureImage}
                                                                      alt={feature.title}
                                                                      className="fitur-image"
                                                            />
                                                            <div className="fitur-content">
                                                                      <h2 className="fitur-card-title">{feature.title}</h2>
                                                                      <ul className="fitur-points">
                                                                                {feature.points.map((point, idx) => (
                                                                                          <li key={idx}>{point}</li>
                                                                                ))}
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                    </div>
          );
};

export default Fitur;
