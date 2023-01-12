import React from "react";
import './CardItemPlayList.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { FiEdit } from "react-icons/fi";
import { BsExclamationCircle, BsFillExclamationCircleFill } from "react-icons/bs";
import { IPlayList } from "../../../../redux/PlayList/interface";

const { Meta } = Card;
interface PlayListProps {
    item: IPlayList
}
const CardItemPlayList = (props: PlayListProps) => {
    return (
        <div className="card__item">
            <Card
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src={props.item.image}
                        style={{ objectFit: 'cover' }}
                    />
                }

            >
                <div className="card__container">
                    <div className="card__title">
                        {props.item.namePlayList}
                    </div>
                    <div className="card__actions">
                        {props.item.topic.map((topic_item, index) => {
                            return (
                                <div className="card__action-item" key={index}>
                                    <span style={{ fontSize: 11 }}>{topic_item}</span>
                                </div>
                            )
                        })}

                    </div>
                    <div className="card__content">
                        Người tạo:<span> {props.item.personAt}</span>
                    </div>
                    <div className="card__content">
                        Ngày tạo:<span>{props.item.createAt}</span>
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