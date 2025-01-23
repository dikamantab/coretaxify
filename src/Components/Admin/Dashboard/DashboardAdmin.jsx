import React, { useEffect } from 'react';
import './dashboardAdmin.css';
import {reactLoading} from 'react-loading';
import {OrbitProgress} from 'react-loading-indicators';

const DashboardAdmin = () => {
          return (
                    <div className="dashboard-admin">
                              <h1>Dashboard Admin</h1>
                              <OrbitProgress variant="disc" dense color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} size="large" text="" textColor="" />
                    </div>
          );
};

export default DashboardAdmin;