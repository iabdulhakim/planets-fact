import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h3>
                <Outlet /> United Kingdom
            </h3>
            <a href="./index.html">The Planets</a>
            <div>
                <NavLink to="/mercury">Mercury</NavLink>
                <NavLink to="/venus">Venus</NavLink>
                <NavLink to="/earth">Earth</NavLink>
                <NavLink to="/mars">Mars</NavLink>
                <NavLink to="/jupiter">Jupiter</NavLink>
                <NavLink to="/saturn">Saturn</NavLink>
                <NavLink to="/uranus">Uranus</NavLink>
                <NavLink to="/neptune">Neptune</NavLink>
            </div>
        </div>
    )
}


export default Header;