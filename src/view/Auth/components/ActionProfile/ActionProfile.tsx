import React, { useState } from "react";
import { FiEdit, FiLock, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../../../configs/index'
import './ActionProfile.scss'
import ModalChangePassword from "../ModalChangePassword/ModalChangePassword";
const ActionProfile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleLogout = async () => {
        await signOut(auth)
        navigate('/login')
    }
    const handleOpen = () => {
        setIsOpen(true)
    }
    return (
        <div className='profile__action'>
            <div className='action_edit'>
                <div className='icon_action_profile' >
                    <FiEdit />
                </div>
                Sửa thông tin
            </div>

            <div className='action_edit' onClick={handleOpen} >
                <div className='icon_action_profile' >
                    <FiLock />
                </div>
                Đổi mặt khẩu
            </div>

            <div className='action_edit'>
                <div className='icon_action_profile' onClick={handleLogout} >
                    <FiLogOut />
                </div>
                Đăng xuất
            </div>


        </div>
    )
}

export default ActionProfile