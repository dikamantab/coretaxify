import React from "react";
import "./partner.css";

const Partner = () => {
          return (
                    <div className="partner-section">
                              <h2>Partner Kami</h2>
                              <div className="partner-container">
                                        <div className="partner-logo">
                                                  <img src="logo-universitas-a.png" alt="Universitas A" />
                                                  <p>Universitas A</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src="logo-institut-b.png" alt="Institut B" />
                                                  <p>Institut B</p>
                                        </div>
                                        <div className="partner-logo">
                                                  <img src="logo-sekolah-c.png" alt="Sekolah C" />
                                                  <p>Sekolah C</p>
                                        </div>
                              </div>
                    </div>
          );
};

export default Partner;
