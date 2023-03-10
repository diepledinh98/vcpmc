import { Breadcrumb, Button, Col, Form, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { BsFileEarmarkMusic } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../shared/hook/reduxhook'
import music from '../../../shared/images/music.png'
import { updateRecord } from '../../../redux/RecordStore/repository'
import './UpdateRecord.scss'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../configs'
import { IRecordStore } from '../../../redux/RecordStore/interface'
import { useFormState } from 'react-hook-form'


const UpdateRecord = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const idd = useParams()



    let id: any = idd.id
    const ListRecord: Array<any> | undefined = useAppSelector((state) => {
        return state.record.ListRecord
    });
    const record: IRecordStore = ListRecord?.find((value) => value.id == id);

    const [formData, setFormData] = useState({
        Name: record.Name,
        ISRC: record.ISRC,
        time: record.time,
        singer: record.singer,
        author: record.author,
        image: record.image,
        category: record.category,
        format: record.format,
        video: record.video,
        usetime: record.usetime,
        presonUpload: record.presonUpload,
        personApproval: record.personApproval,
        producer: record.producer,
        ApprovalAt: record.ApprovalAt,
        createAt: record.createAt
    });

    const onFinish = () => {
        const idRecord = id
        const body = formData
        dispatch(updateRecord({ idRecord, body }))
        navigate('/')
    }

    const setSelectedItems = (value: string) => {
        setFormData((prev) => ({ ...prev, category: value }))
    }
    return (
        <div className='update__record__page'>
            <div className="breadcumb">
                <Breadcrumb separator=">">

                    <Breadcrumb.Item>
                        <a href="">Kho b???n ghi</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>C???p nh???t th??ng tin</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='title__record'>
                B???n ghi - {record.Name}
            </div>

            <div className='content'>
                <div className='record__left'>
                    <div className='record_info'>
                        <div className='title_info'>
                            Th??ng tin b???n ghi
                        </div>
                        <div className='record_info_music'>
                            <img src={record.image} alt='' className='record__img' />
                            <div className='music__name'>
                                <BsFileEarmarkMusic className='record_icon' />
                                Matern.mp3</div>
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                Ng??y th??m:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.createAt}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ng?????i t???i l??n:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.presonUpload}
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} className="info_name">
                                Ng?????i duy???t:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.personApproval} <br />
                                {/* (T??? ?????ng ph?? duy???t) */}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ng??y ph?? duy???t:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.ApprovalAt}
                            </Col>
                        </Row>
                    </div>
                    <div className='record_authority'>
                        <div className='title_info'>
                            Th??ng tin ???y quy???n
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                S??? h???p ?????ng:
                            </Col>
                            <Col span={12} className="info_value">
                                BH123
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ng??y nh???n ???y quy???n:
                            </Col>
                            <Col span={12} className="info_value">
                                01/05/2021
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ng??y h???t h???n:
                            </Col>
                            <Col span={12} className="info_value">
                                01/08/2025
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Tr???ng th??i:
                            </Col>
                            <Col span={12} className="info_value" >
                                <div className='list_tag_time'>
                                    <div className='tag__cicrle' />
                                    C??n th???i h???n
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='record_right'>
                    <div className='title_info' style={{ marginBottom: 20 }}>
                        Ch???nh s???a th??ng tin
                    </div>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        id='updateDeviceForm'

                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <h3 >T??n b???n ghi: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="T??n ????ng nh???p"
                            name="Name"
                            rules={[{ required: true, message: 'Vui l??ng nh???p t??n b???n ghi!' }]}
                        >
                            <Input
                                defaultValue={formData.Name}
                                onChange={(event => setFormData((prev) => ({ ...prev, Name: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >M?? ISRC: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="ISRC"
                            rules={[{ required: true, message: 'Vui l??ng nh???p ISRC!' }]}
                        >

                            <Input
                                defaultValue={formData.ISRC}
                                onChange={(event => setFormData((prev) => ({ ...prev, ISRC: event.target.value })))}
                            />
                        </Form.Item>
                        {/* {error && <div className='error__message'>{error}</div>} */}
                        <h3 >Ca s??: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="singer"
                            rules={[{ required: true, message: 'Vui l??ng nh???p t??n ca s??!' }]}
                        >

                            <Input
                                defaultValue={formData.singer}
                                onChange={(event => setFormData((prev) => ({ ...prev, singer: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >T??c gi???: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="author"
                            rules={[{ required: true, message: 'Vui l??ng nh???p t??n t??c gi???!' }]}
                        >

                            <Input
                                defaultValue={formData.author}
                                onChange={(event => setFormData((prev) => ({ ...prev, author: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >Nh?? s???n xu???t: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="producer"
                            rules={[{ required: true, message: 'Vui l??ng nh???p t??n nh?? s???n xu???t!' }]}
                        >

                            <Input
                                defaultValue={formData.producer}
                                onChange={(event => setFormData((prev) => ({ ...prev, producer: event.target.value })))}
                            />
                        </Form.Item>


                        <h3 >Th??? Lo???i: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="category"
                            rules={[{ required: true, message: 'Vui l??ng nh???p t??n th??? lo???i!' }]}
                        >

                            <Select
                                defaultValue={formData.category}
                                onChange={setSelectedItems}
                                style={{ width: 490 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'T???t c???',
                                    },
                                    {
                                        value: 'Pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'EDM',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'Ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>



            </div>
            <div className='list__btn' >
                <Link to='/'>

                    <Button className='btn__cancel' >
                        H???y
                    </Button>
                </Link>

                <Button className='btn__save' form="updateDeviceForm" onClick={onFinish}>
                    L??u
                </Button>
            </div>
        </div>
    )
}

export default UpdateRecord