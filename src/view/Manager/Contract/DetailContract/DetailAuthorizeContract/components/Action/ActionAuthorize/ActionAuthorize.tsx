import React from 'react'
import { BsFillFileEarmarkTextFill, BsXLg } from 'react-icons/bs'
import { FiEdit, FiLock, FiLogOut, FiSlash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './style.scss'
const ActionAuthorize = () => {
    return (
        <div className='list__action__info_x'>
            <Link to='/' className='action_edit'>
                <div className='icon_action_profile' >
                    <FiEdit />
                </div>
                Chỉnh sửa hợp đồng
            </Link>

            <div className='action_edit' >
                <div className='icon_action_profile' >
                    <BsFillFileEarmarkTextFill />
                </div>
                Gia hạn hợp đồng
            </div>
            <div className='action_edit' >
                <div className='icon_action_profile' >
                    <FiSlash />
                </div>
                Hủy hợp đồng
            </div>

            <div className='action_edit'>
                <div className='icon_action_profile'  >
                    <BsXLg />
                </div>
                Hủy hợp đồng
            </div>
        </div>
    )
}

export default ActionAuthorize