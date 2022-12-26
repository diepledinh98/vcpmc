import React from "react";
import './CardItemPlayList.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { FiEdit } from "react-icons/fi";
import { BsExclamationCircle, BsFillExclamationCircleFill } from "react-icons/bs";

const { Meta } = Card;
const CardItemPlayList = () => {
    return (
        <div className="card__item">
            <Card
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <div className="card__container">
                    <div className="card__title">
                        Handcrafted Fresh Bacon Multy
                    </div>
                    <div className="card__actions">
                        <div className="card__action-item">
                            <span style={{ fontSize: 11 }}>Chủ đề ví dụ</span>

                        </div>
                        <div className="card__action-item">
                            <span style={{ fontSize: 11 }}>Pop</span>

                        </div>
                        <div className="card__action-item">
                            <span style={{ fontSize: 11 }}>Trending</span>
                        </div>
                        <div className="card__action-item">
                            <span style={{ fontSize: 11 }}>Good</span>
                        </div>
                    </div>
                    <div className="card__content">
                        Người tạo:<span> Admin</span>
                    </div>
                    <div className="card__content">
                        Ngày tạo:<span>12/12/2020</span>
                    </div>

                    <div className="card__footer">
                        <div className="card__actions">
                            <div className="card__action-item">
                                <span>Thể loại</span>
                                Pop
                            </div>
                            <div className="card__action-item">
                                <span>Định dạng</span>
                                Audio
                            </div>
                            <div className="card__action-item">
                                <span>Thời lượng</span>
                                03:00
                            </div>
                        </div>
                        <BsExclamationCircle style={{ fontSize: 20, color: '#FFAC69', marginTop: 15, cursor: 'pointer' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardItemPlayList