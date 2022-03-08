import React from 'react'
import { NavLink } from 'react-router-dom'
import SushiyaLogo from '../../../img/sushiya_logo.png'

function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to="" className="navbar-brand">
                        <img src={SushiyaLogo} alt="" width="100" height="84" className="d-inline-block align-text-top" />
                    </NavLink>
                    <div className="d-flex" style={{ width: '28%', marginRight: '1rem' }}>
                        <label style={{ width: '100%', marginTop: '0.4rem' }}>Account Status :</label>
                        <select className="form-control">
                            <option>JOINING</option>
                        </select>
                        {/* <button class ="btn btn-outline-success" type ="button">ENGLISH</button> */}
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header
