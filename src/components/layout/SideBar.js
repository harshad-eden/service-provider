/* eslint-disable react/jsx-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';

const links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: '/sidebarIcons/dashboard.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
  {
    name: 'Pre-Auths',
    path: '/pre-auth',
    icon: '/sidebarIcons/fingerprint.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
  {
    name: 'Patients',
    path: '/patients',
    icon: '/sidebarIcons/patient.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
  {
    name: 'Claims',
    path: '/claims',
    icon: '/sidebarIcons/claim.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: '/sidebarIcons/payment.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: '/sidebarIcons/reports.png',
    activeIcon: '/sidebarIcons/dashboardActive.png',
  },
];

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <img src="icons/logo.png" className={styles.logo} />
      <div className={styles.links}>
        {links.map((item) => (
          <NavLink
            key={item.name}
            className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
            to={item.path}
          >
            <img className={styles.sidebarIcon} src={item.icon} alt="" />
            <img className={styles.sidebarIconActive} src={item.activeIcon} alt="" />

            <p>{item.name}</p>
            <div className={styles.bottomLine} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
