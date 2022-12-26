import { Col, Pagination, Row } from 'antd'
import React from 'react'
import CardItemPlayList from './CardItemPlayList/CardItemPlayList'
import './ListCardPlayList.scss'
const ListCardPlayList = () => {
    return (
        <div className='list__view__card'>
            <Row justify="space-between">
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
            </Row>
            <Row justify="space-between">
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
            </Row>
            <div className='pani'>
                <Pagination defaultCurrent={1} total={8} />;
            </div>

        </div>
    )
}

export default ListCardPlayList