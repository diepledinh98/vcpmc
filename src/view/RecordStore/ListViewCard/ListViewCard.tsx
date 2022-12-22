import { Col, Pagination, Row } from 'antd'
import React from 'react'
import CardItem from './CardItem/CardItem'
import './ListViewCard.scss'
const ListViewCard = () => {
    return (
        <div className='list__view__card'>
            <Row justify="space-between">
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
            </Row>
            <Row justify="space-between">
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
            </Row>
            <div className='pani'>
                <Pagination defaultCurrent={1} total={8} />;
            </div>

        </div>
    )
}

export default ListViewCard