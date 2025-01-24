import React, { useEffect } from 'react';
import './dashboardAdmin.css';

const DashboardAdmin = () => {
          return (
                    <div className="dashboard-admin">
                              <h2>Dashboard Admin</h2>
                              <p>Selamat datang di halaman admin Coretify</p>
                              <div className="dashboard-admin-content">
                                        <div className="dashboard-card">
                                                  <h3>1,000</h3>
                                                  <p>Kelas</p>
                                        </div>
                                        <div className="dashboard-card">
                                                  <h3>2,389</h3>
                                                  <p>Mahasiswa</p>
                                        </div>
                                        <div className="dashboard-card">
                                                  <h3>2,389</h3>
                                                  <p>Pengajar</p>
                                        </div>
                              </div>
                    </div>
                    
          );
};

export default DashboardAdmin;