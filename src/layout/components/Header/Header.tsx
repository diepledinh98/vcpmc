import React from "react";
import ChangeLanguage from "../../../shared/components/Language/Language";
import './Header.scss'
import user from '../../../shared/images/user.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    const handleLink = () => {
        navigate('/profile')
    }
    return (
        <div className="header">
            <div className="language__topbar">
                <ChangeLanguage />
            </div>

            <div className="topbar__account" onClick={handleLink}>
                <div className="topbar__account-avatar">
                    <img src={user} alt='' className="avatar__user" />
                </div>
                <div className="topbat__account-info">
                    <h3>Ng.Tuyết</h3>
                    <p>Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Header