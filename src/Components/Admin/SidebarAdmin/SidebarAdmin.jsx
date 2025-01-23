import React, { useState } from "react";
import "./sidebar.css";
import { FaBars, FaBox, FaUsers, FaLaptopCode } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import Logo from "../../../Assets/image/7.png"; // Pastikan ini menunjuk ke file logo Anda.

const SidebarAdmin = () => {
          const [isOpen, setIsOpen] = useState(true);

          const toggleSidebar = () => {
                    setIsOpen(!isOpen);
          };

          return (
                    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                              <div className="sidebar-header">
                                        {isOpen && <img src={Logo} alt="CTaxify Logo" className="sidebar-logo" />}
                                        <FaBars className="menu-toggle" onClick={toggleSidebar} />
                              </div>
                              <ul className="sidebar-menu">
                                        <li className="menu-item">
                                                  <GiPieChart className="menu-icon" />
                                                  {isOpen && <span>Dashboard</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaBox className="menu-icon" />
                                                  {isOpen && <span>Data Coretax</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaLaptopCode className="menu-icon" />
                                                  {isOpen && <span>Praktikum</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaUsers className="menu-icon" />
                                                  {isOpen && <span>Data Pengguna</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaLaptopCode className="menu-icon" />
                                                  {isOpen && <span>Landing Page</span>}
                                        </li>
                              </ul>
                    </div>
          );
};

export default SidebarAdmin;
