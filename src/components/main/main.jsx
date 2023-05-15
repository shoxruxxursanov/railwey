import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './main.css'
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import GroupsIcon from "@mui/icons-material/Groups";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import logo from '../../assetc/logo.png'
import profil from "../../assetc/profil.jpg";
import { Avatar, } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";





export const Main = () => {


  return (
    <div className="content">
      <div className="aside">
        <ul className="aside__menu">
          <Link style={{ textDecoration: "none" }} to="/">
            <li className="menu-link asosiy">
              <img className="menu-logo" src={logo} alt="" />
              <h2 className="menu-title home">Асосий саҳифа</h2>
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/filial">
            <li className="menu-link">
              <AssuredWorkloadIcon
                sx={{
                  fontSize: "35px",
                  marginRight: "17px",
                  marginLeft: "-30px",
                }}
              />
              <h2 className="menu-title">Филиаллар</h2>
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/hodimlar">
            <li className="menu-link">
              <GroupsIcon
                sx={{
                  fontSize: "35px",
                  marginRight: "17px",
                  marginLeft: "-30px",
                }}
              />
              <h2 className="menu-title">Нафақадаги ҳодимлар</h2>
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/elonlar">
            <li className="menu-link">
              <AnnouncementIcon
                sx={{
                  fontSize: "35px",
                  marginRight: "17px",
                  marginLeft: "-30px",
                }}
              />
              <h2 className="menu-title"> Елонлар</h2>
            </li>
          </Link>
        </ul>
      </div>
      <div className="main">
        <div className="header">
          <h1 className="header_title">"O‘ztemiryo‘lyo‘lovchi" АЖ</h1>
          <div className="box">
            <MenuOpenIcon style={{ fontSize: "40px" }} />

            <Avatar alt="Remy Sharp" src={profil} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
