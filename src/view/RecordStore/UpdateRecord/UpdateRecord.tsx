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
                        <a href="">Kho bản ghi</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>Cập nhật thông tin</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='title__record'>
                Bản ghi - {record.Name}
            </div>

            <div className='content'>
                <div className='record__left'>
                    <div className='record_info'>
                        <div className='title_info'>
                            Thông tin bản ghi
                        </div>
                        <div className='record_info_music'>
                            <img src={record.image} alt='' className='record__img' />
                            <div className='music__name'>
                                <BsFileEarmarkMusic className='record_icon' />
                                Matern.mp3</div>
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày thêm:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.createAt}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Người tải lên:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.presonUpload}
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} className="info_name">
                                Người duyệt:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.personApproval} <br />
                                {/* (Tự động phê duyệt) */}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày phê duyệt:
                            </Col>
                            <Col span={12} className="info_value">
                                {record.ApprovalAt}
                            </Col>
                        </Row>
                    </div>
                    <div className='record_authority'>
                        <div className='title_info'>
                            Thông tin ủy quyền
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                Số hợp đồng:
                            </Col>
                            <Col span={12} className="info_value">
                                BH123
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày nhận ủy quyền:
                            </Col>
                            <Col span={12} className="info_value">
                                01/05/2021
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày hết hạn:
                            </Col>
                            <Col span={12} className="info_value">
                                01/08/2025
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Trạng thái:
                            </Col>
                            <Col span={12} className="info_value" >
                                <div className='list_tag_time'>
                                    <div className='tag__cicrle' />
                                    Còn thời hạn
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='record_right'>
                    <div className='title_info' style={{ marginBottom: 20 }}>
                        Chỉnh sửa thông tin
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

                        <h3 >Tên bản ghi: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Tên đăng nhập"
                            name="Name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên bản ghi!' }]}
                        >
                            <Input
                                defaultValue={formData.Name}
                                onChange={(event => setFormData((prev) => ({ ...prev, Name: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >Mã ISRC: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="ISRC"
                            rules={[{ required: true, message: 'Vui lòng nhập ISRC!' }]}
                        >

                            <Input
                                defaultValue={formData.ISRC}
                                onChange={(event => setFormData((prev) => ({ ...prev, ISRC: event.target.value })))}
                            />
                        </Form.Item>
                        {/* {error && <div className='error__message'>{error}</div>} */}
                        <h3 >Ca sĩ: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="singer"
                            rules={[{ required: true, message: 'Vui lòng nhập tên ca sĩ!' }]}
                        >

                            <Input
                                defaultValue={formData.singer}
                                onChange={(event => setFormData((prev) => ({ ...prev, singer: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >Tác giả: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="author"
                            rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}
                        >

                            <Input
                                defaultValue={formData.author}
                                onChange={(event => setFormData((prev) => ({ ...prev, author: event.target.value })))}
                            />
                        </Form.Item>
                        <h3 >Nhà sản xuất: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="producer"
                            rules={[{ required: true, message: 'Vui lòng nhập tên nhà sản xuất!' }]}
                        >

                            <Input
                                defaultValue={formData.producer}
                                onChange={(event => setFormData((prev) => ({ ...prev, producer: event.target.value })))}
                            />
                        </Form.Item>


                        <h3 >Thể Loại: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="category"
                            rules={[{ required: true, message: 'Vui lòng nhập tên thể loại!' }]}
                        >

                            <Select
                                defaultValue={formData.category}
                                onChange={setSelectedItems}
                                style={{ width: 490 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
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
                        Hủy
                    </Button>
                </Link>

                <Button className='btn__save' form="updateDeviceForm" onClick={onFinish}>
                    Lưu
                </Button>
            </div>
        </div>
    )
}

export default UpdateRecord