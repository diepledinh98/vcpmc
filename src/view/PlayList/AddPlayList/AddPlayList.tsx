import React, { useState } from "react";
import './__addPlayList.scss';
import { UploadOutlined } from '@ant-design/icons';
import { Col, Input, Row, Select, Switch, Table, UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { ColumnsType } from "antd/es/table";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
interface DataType {
    STT: string
    Name: string
    singer: string
    author: string


}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',

    },
    {
        title: 'Tên bản ghi',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'ca sĩ',
        dataIndex: 'singer',

        key: 'singer',
    },
    {
        title: 'Tác giả',
        key: 'author',

        dataIndex: 'author',

    }
];

const data: DataType[] = [
    {
        STT: '1',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '2',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '3',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '4',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '5',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    }
]
const AddPlayList = () => {
    const OPTIONS = ['Chill', 'Lofi', 'Maskup'];
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
        <div className="add__playlist">
            <div className="title__page">Thêm bản ghi</div>
            <div className="content__add_playlist">
                <div className="info__add__playlist">
                    <div className="add__playlist">
                        <div className="add__name">Ảnh bìa :<span style={{ color: 'red' }}>*</span></div>
                        {/* <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload png only</Button>
                        </Upload> */}
                    </div>
                    <div className="add__playlist">
                        <div className="add__name">Tiêu đề :<span style={{ color: 'red' }}>*</span></div>
                        <Input value='Top USUK 2022' />
                    </div>
                    <div className="add__playlist">
                        <div className="add__name">Tiêu đề :<span style={{ color: 'red' }}>*</span></div>
                        <Row style={{ marginTop: 10 }}>
                            <Col span={15}>Tổng số:</Col>
                            <Col span={9} className="info__value">0 bản ghi</Col>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
                            <Col span={15}>Tổng thời lượng:</Col>
                            <Col span={9} className="info__value">--:--:--</Col>
                        </Row>
                    </div>
                    <div className="add__playlist">
                        <div className="add__name">Mô tả :<span style={{ color: 'red' }}>*</span></div>
                        <TextArea rows={4} />
                    </div>
                    <div className="add__playlist" style={{ border: 'none' }}>
                        <div className="add__name">Chủ đề :<span style={{ color: 'red' }}>*</span></div>
                        <Select
                            className="add__service"
                            mode="multiple"
                            placeholder='Nhập dịch vụ sử dụng'
                            value={selectedItems}
                            onChange={setSelectedItems}
                            options={filteredOptions.map(item => ({
                                value: item,
                                label: item,
                            }))}
                            style={{ width: 195, borderBlockColor: 'none', marginTop: 10, }}
                        />
                        <div className="" style={{ display: 'flex', gap: 10, marginTop: 10 }}>

                            <Switch defaultChecked /> <div className="add__name" style={{ marginTop: 5 }}>Chế độ công khai </div>
                        </div>


                    </div>
                </div>
                <div className="table__record__add">
                    <div className='Table_detail__list_playlist' style={{ height: 500 }}>
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                </div>
                <Link to='/playlist/add-playlist/add-record' className="actions__add__record">
                    <div className='action_edit' >
                        <div className='icon_action_profile' >
                            <AiOutlinePlus />
                        </div>
                        Thêm bản ghi
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AddPlayList