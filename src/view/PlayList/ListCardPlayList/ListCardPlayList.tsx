import { Col, Pagination, Row } from 'antd'
import React, { useEffect } from 'react'
import { fetchPlayLists } from '../../../redux/PlayList/repository'
import { useAppDispatch, useAppSelector } from '../../../shared/hook/reduxhook'
import CardItemPlayList from './CardItemPlayList/CardItemPlayList'
import './ListCardPlayList.scss'
const ListCardPlayList = () => {
    const dispatch = useAppDispatch()
    const playlists = useAppSelector((state) => state.playlist.PlayLists)
    useEffect(() => {
        dispatch(fetchPlayLists())
    }, [dispatch])
    return (
        <div className='list__view__card'>
            <Row style={{ display: 'flex', gap: 117 }}>
                {playlists.map((item, index) => {
                    return (
                        <Col span={4} key={index}>
                            <CardItemPlayList item={item} />
                        </Col>
                    )
                })}

                {/* <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col> */}
            </Row>
            {/* <Row justify="space-between">
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
                <Col span={4}><CardItemPlayList /></Col>
            </Row> */}
            <div className='pani'>
                <Pagination defaultCurrent={1} total={8} />;
            </div>

        </div>
    )
}

export default ListCardPlayList