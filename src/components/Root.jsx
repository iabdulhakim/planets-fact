import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="header">
                <a className="logo" href="#">The Planets</a>
                <ul className="sitenav">
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}} to={"/"}>Mercury</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}} to={"/venus"}>Venus</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}  to={"/earth"}>Earth</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}  to={"/mars"}>Mars</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}  to={"/jupiter"}>Jupiter</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}  to={"/saturn"}>Saturn</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}  to={"/uranus"}>Uranus</NavLink>
                    </li>
                    <li className="sitenav-item">
                        <NavLink style={{color: "white", fontSize: "11px", textTransform: "uppercase", textDecoration: "none", listStyle: "none", letterSpacing: "1px"}}   to={"/neptune"}>Neptune</NavLink>
                    </li>
                </ul>
            </div>
            <div className="main">
                <img className="main-img" src="./mercury.svg" alt="" />
                <div className="content-wrapper">
                    <h1 className="content-title">
                        <Outlet /> 
                    </h1>
                    <p className="content-typ">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                    <p className="content-wiki">Source: <span>Wikipedia</span></p>
                    <div className="content-btns">
                        <button>
                            <NavLink style={{color: "white", textDecoration: "none"}} to={"/overview"}>Overview</NavLink>
                        </button>
                        <button>
                            <NavLink style={{color: "white", textDecoration: "none"}}  to={"/structure"}>Internal Structure</NavLink>
                        </button>
                        <button>
                            <NavLink style={{color: "white", textDecoration: "none"}}  to={"/geology"}>Surface geology</NavLink>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-item">
                    <p className="footer-typ">ROTATION TIME</p>
                    <h2 className="footer-num">58.6 days</h2>
                </div>
                <div className="footer-item">
                    <p className="footer-typ">REVOLUTION TIME</p>
                    <h2 className="footer-num">87.97 days</h2>
                </div>
                <div className="footer-item">
                    <p className="footer-typ">radius</p>
                    <h2 className="footer-num">2,439.7 km</h2>
                </div>
                <div className="footer-item">
                    <p className="footer-typ">AVERAGE TEMP.</p>
                    <h2 className="footer-num">430°c</h2>
                </div>
            </div>
        </div>
        
    )
}


export default Root;