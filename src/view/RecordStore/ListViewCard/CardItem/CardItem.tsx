import React, { memo } from "react";
import './CardItem.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { FiEdit } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../../shared/hook/reduxhook";
import { IRecordStore } from "../../../../redux/RecordStore/interface";
import { Link } from "react-router-dom";

const { Meta } = Card;
interface RecordItemProps {
    record: IRecordStore
}
const CardItem = (props: RecordItemProps) => {
    return (
        <div className="card__item">
            <Card
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src={props.record.image}
                    />
                }

            >
                <div className="card__container">
                    <div className="card__title">
                        {props.record.Name}
                    </div>
                    <div className="card__content">
                        Ca sĩ:<span> {props.record.singer}</span>
                    </div>
                    <div className="card__content">
                        Sáng tác:<span> {props.record.author}</span>
                    </div>
                    <div className="card__content">
                        Số hợp đồng:<span> HD395738503</span>
                    </div>

                    <div className="card__footer">
                        <div className="card__actions">
                            <div className="card__action-item">
                                <span>Thể loại</span>
                                {props.record.category}
                            </div>
                            <div className="card__action-item">
                                <span>Định dạng</span>
                                {props.record.format}
                            </div>
                            <div className="card__action-item">
                                <span>Thời lượng</span>
                                03:00
                            </div>
                        </div>
                        <Link to={`/edit-record/${props.record.id}`}>
                            <FiEdit style={{ fontSize: 20, color: '#FFAC69', marginTop: 15, cursor: 'pointer' }} />
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default memo(CardItem)