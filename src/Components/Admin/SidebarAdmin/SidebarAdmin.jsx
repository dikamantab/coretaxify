import React, { useState } from "react";
import "./sidebar.css";
import { FaBars, FaBox, FaUsers, FaLaptopCode, FaChevronDown } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import Logo from "../../../Assets/image/7.png"; // Pastikan ini menunjuk ke file logo Anda.

const SidebarAdmin = () => {
          const [isOpen, setIsOpen] = useState(true);
          const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk dropdown

          const toggleSidebar = () => {
                    setIsOpen(!isOpen);
          };

          const toggleDropdown = () => {
                    setIsDropdownOpen(!isDropdownOpen);
          };

          return (
                    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                              <div className="sidebar-header">
                                        {isOpen && <img src={Logo} alt="CTaxify Logo" className="sidebar-logo" />}
                                        <FaBars className="menu-toggle" onClick={toggleSidebar} />
                              </div>
                              <ul className="sidebar-menu">
                                        <li className="menu-item" onClick={() => { window.location.href = "/admin" }}>
                                                  <GiPieChart className="menu-icon" />
                                                  {isOpen && <span>Dashboard</span>}
                                        </li>
                                        <li className="menu-item" onClick={() => { window.location.href = "/admin/kontrak" }}>
                                                  <FaBox className="menu-icon" />
                                                  {isOpen && <span>Kontrak</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaLaptopCode className="menu-icon" />
                                                  {isOpen && <span>Praktikum</span>}
                                        </li>
                                        <li className="menu-item">
                                                  <FaUsers className="menu-icon" />
                                                  {isOpen && <span>Data Pengguna</span>}
                                        </li>
                                        <li className="menu-item dropdown">
                                                  <div className="dropdown-header" onClick={toggleDropdown}>
                                                            <FaLaptopCode className="menu-icon" />
                                                            {isOpen && (
                                                                      <>
                                                                                <span>Landing Page</span>
                                                                                <FaChevronDown
                                                                                          className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
                                                                                />
                                                                      </>
                                                            )}
                                                  </div>
                                                  {isDropdownOpen && isOpen && (
                                                            <ul className="dropdown-menu">
                                                                      <li className="dropdown-item">Artikel</li>
                                                                      <li className="dropdown-item">Testimoni</li>
                                                            </ul>
                                                  )}
                                        </li>
                              </ul>
                    </div>
          );
};

export default SidebarAdmin;
