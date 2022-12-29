import { Col, Pagination, Row } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/hook/reduxhook'
import CardItem from './CardItem/CardItem'
import './ListViewCard.scss'
const ListViewCard = () => {
    const dispatch = useAppDispatch()
    const ListRecord = useAppSelector(state => state.record.ListRecord)
    return (
        <div className='list__view__card'>

            <Row style={{ display: 'flex', gap: 117 }}>
                {ListRecord.map((record, index) => {

                    return (
                        <>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                            <Col key={index} span={4} ><CardItem record={record} /></Col>
                        </>

                    )
                })}

                {/* <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col> */}
            </Row>
            {/* <Row justify="space-between">
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
                <Col span={4}><CardItem /></Col>
            </Row> */}
            <div className='pani'>
                <Pagination defaultCurrent={1} total={8} />;
            </div>

        </div>
    )
}

export default ListViewCard