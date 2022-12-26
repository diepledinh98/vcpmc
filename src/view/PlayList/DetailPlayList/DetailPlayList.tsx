import { Breadcrumb, Col, Row } from 'antd'
import React from 'react'
import './DetailPlayList.scss'
import music from '../../../shared/images/music.png'
import { BsFillHeartFill } from 'react-icons/bs'
import TableDetailPlayList from './TableDetailPlayList/TableDetailPlayList'
import ActionDetailPlayList from '../../Auth/components/ActionDetailPlayList/ActionDetailPlayList'
import { IoEarthSharp, IoRepeatOutline } from "react-icons/io5";
import { IoMdShuffle } from "react-icons/io";
const DetailPlayList = () => {
    return (
        <div className='detail__playlist__page'>
            <div className="breadcumb">
                <Breadcrumb separator=">">

                    <Breadcrumb.Item>
                        <a href="">Kho bản ghi</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>Cập nhật thông tin</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='title__page'>
                Playlist Top ca khúc 2021
            </div>
            <div className='content__detail'>
                <div className='info__playlist'>
                    <div className='title__info__playlist'>
                        <img src={music} alt='' className='img__info__playlist' />
                        <h3> Top ca khúc 2021</h3>
                    </div>
                    <div className='content__info__playlist'>
                        <Row>
                            <Col span={15}>Người Tạo:</Col>
                            <Col span={9} className="info__value">Super Admin</Col>
                        </Row>
                        <Row>
                            <Col span={15}>Tổng số:</Col>
                            <Col span={9} className="info__value">8 bản ghi</Col>
                        </Row>
                        <Row>
                            <Col span={15}>Tổng thời lượng:</Col>
                            <Col span={9} className="info__value">01:31:16</Col>
                        </Row>
                    </div>
                    <div className='des__info__playlist'>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
                    </div>
                    <div className='topic__info__playlist'>
                        <Row>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 1
                                    </div>

                                </div>
                            </Col>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 2
                                    </div>

                                </div>
                            </Col>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 3
                                    </div>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 1
                                    </div>

                                </div>
                            </Col>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 2
                                    </div>

                                </div>
                            </Col>
                            <Col span={8}>
                                <div >
                                    <div className='list_tag_time' >
                                        <div className='tag__cicrle' />
                                        Chủ đề 3
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='select__info__playlist'>
                        <div className='select__info__playlist-item'>
                            <IoEarthSharp style={{ fontSize: 18, marginTop: -4 }} />
                            Hiển thị ở chế độ công khai
                        </div>
                        <div className='select__info__playlist-item'>
                            <IoMdShuffle style={{ fontSize: 18, marginTop: -4 }} />
                            Phát ngẫu nhiên
                        </div>
                        <div className='select__info__playlist-item'>
                            <IoRepeatOutline style={{ fontSize: 18, marginTop: -4 }} />
                            Lặp lại
                        </div>
                    </div>
                </div>
                <div className='list__record'>
                    <TableDetailPlayList />
                </div>
                <div className='list__actions'>
                    <ActionDetailPlayList />
                </div>
            </div>
        </div>
    )
}

export default DetailPlayList