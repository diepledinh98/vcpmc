import React, { useCallback, useState } from "react";
import { FiEdit, FiLock, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../../../configs/index'
import './ActionProfile.scss'
import { useDispatch } from "react-redux";
import ModalChangePassword from "../ModalChangePassword/ModalChangePassword";
import { logOut } from "../../../../redux/Auth/AuthSlice";
const ActionProfile = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, []);
    const handleLogout = async () => {
        await signOut(auth)
        dispatch(logOut({}))
        navigate('/login')
    }
    return (
        <div className='profile__action'>
            <Link to='/edit-profile' className='action_edit'>
                <div className='icon_action_profile' >
                    <FiEdit />
                </div>
                Sửa thông tin
            </Link>

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
            <ModalChangePassword onIsOpen={isOpen} setIsOpen={setIsOpen} />

        </div>
    )
}

export default ActionProfile