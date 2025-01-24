import React, { useState, useEffect } from 'react';
import {
          Chart as ChartJS,
          CategoryScale,
          LinearScale,
          BarElement,
          Title,
          Tooltip,
          Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './dashboardAdmin.css';
import { FaUsers } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';

ChartJS.register(
          CategoryScale,
          LinearScale,
          BarElement,
          Title,
          Tooltip,
          Legend
);

const DashboardAdmin = () => {
          const [chartData, setChartData] = useState({
                    labels: [],
                    datasets: [],
          });
          const [userData, setUserData] = useState({
                    totalPengguna: 0,
                    pembimbing: 0,
                    mahasiswa: 0
          })



          useEffect(() => {
                    // Simulasi fetching data dari API
                    const fetchData = async () => {
                              try {
                                        // Ganti ini dengan fetch API yang sesungguhnya
                                        const dataFromApi = await new Promise((resolve) => {
                                                  setTimeout(() => {
                                                            resolve({
                                                                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                                                                      datasets: [
                                                                                {
                                                                                          label: 'Total Pengguna',
                                                                                          data: [250, 280, 290, 310, 240, 200, 400, 300, 280, 250, 290, 200],
                                                                                          backgroundColor: 'skyblue',
                                                                                },
                                                                                {
                                                                                          label: 'Pembimbing',
                                                                                          data: [200, 250, 270, 290, 220, 180, 350, 280, 250, 220, 270, 180],
                                                                                          backgroundColor: 'royalblue',
                                                                                },
                                                                                {
                                                                                          label: 'Mahasiswa',
                                                                                          data: [300, 320, 350, 330, 280, 220, 450, 350, 300, 280, 320, 250],
                                                                                          backgroundColor: 'mediumblue',
                                                                                },
                                                                      ],
                                                            });
                                                  }, 1000); // Simulasi delay 1 detik
                                        });

                                        setChartData(dataFromApi);
                              } catch (error) {
                                        console.error("Error fetching data:", error);
                                        // Handle error, misalnya dengan menampilkan pesan error ke user
                              }
                    };

                    const fetchUserData = async () => {
                              try {
                                        const userDataFromApi = await new Promise((resolve) => {
                                                  setTimeout(() => {
                                                            resolve({
                                                                      totalPengguna: 1440,
                                                                      pembimbing: 1440,
                                                                      mahasiswa: 1440
                                                            });
                                                  }, 500);
                                        });
                                        setUserData(userDataFromApi)
                              } catch (error) {
                                        console.error("Error fetching user data:", error)
                              }
                    }

                    fetchData();
                    fetchUserData();
          }, []); // [] memastikan useEffect hanya dijalankan sekali setelah render pertama

          const options = {
                    responsive: true,
                    plugins: {
                              legend: {
                                        position: 'bottom',
                              },
                              title: {
                                        display: true,
                                        text: 'Statistik Pertumbuhan Data 2024',
                              },
                    },
                    scales: {
                              x: {
                                        stacked: true
                              },
                              y: {
                                        stacked: true
                              }
                    }
          };

          if (!chartData.labels.length) {
                    return <div className="loading"><ClipLoader color="#7502B5" size={50} /></div>; // Tampilkan pesan loading
          }

          return (
                    <div className="dashboard-container">
                              <div className="card-container">
                                        <div className="card card-purple"> {/* Tambah class card-purple */}
                                                  <FaUsers className="card-icon" /> {/* Tambah ikon */}
                                                  <h2>Total Pengguna</h2>
                                                  <p>{userData.totalPengguna}</p>
                                                  <p>Dari Sebelumnya 1000</p>
                                        </div>
                                        <div className="card"> {/* Card default */}
                                                  <FaUsers className="card-icon" />
                                                  <h2>Pembimbing</h2>
                                                  <p>{userData.pembimbing}</p>
                                                  <p>Dari Sebelumnya 1000</p>
                                        </div>
                                        <div className="card"> {/* Card default */}
                                                  <FaUsers className="card-icon" />
                                                  <h2>Mahasiswa</h2>
                                                  <p>{userData.mahasiswa}</p>
                                                  <p>Dari Sebelumnya 1000</p>
                                        </div>
                              </div>
                              <div className="chart-container">
                                        <Bar options={options} data={chartData} />
                              </div>
                    </div>
          );
};

export default DashboardAdmin;