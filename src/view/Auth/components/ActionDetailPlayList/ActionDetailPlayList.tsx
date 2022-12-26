import React, { useCallback, useState } from "react";
import { FiEdit, FiLock, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";

const ActionDetailPlayList = () => {

    return (
        <div className='profile__action' style={{ height: 170 }}>
            <Link to='/edit-profile' className='action_edit'>
                <div className='icon_action_profile' >
                    <FiEdit />
                </div>
                Chỉnh sửa
            </Link>

            <div className='action_edit' >
                <div className='icon_action_profile' >
                    <HiOutlineTrash style={{ color: 'red' }} />
                </div>
                Xóa Playlist
            </div>



        </div>
    )
}

export default ActionDetailPlayList