import React from "react";
import './CardItem.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { FiEdit } from "react-icons/fi";

const { Meta } = Card;
const CardItem = () => {
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
                    <div className="card__content">
                        Ca sĩ:<span> Bella Poarch</span>
                    </div>
                    <div className="card__content">
                        Sáng tác:<span> Leilani Zulauf</span>
                    </div>
                    <div className="card__content">
                        Số hợp đồng:<span> HD395738503</span>
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
                        <FiEdit style={{ fontSize: 20, color: '#FFAC69', marginTop: 15, cursor: 'pointer' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardItem