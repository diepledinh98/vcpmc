import { Button, Col, Row, Select, Table } from "antd";
import Search from "antd/es/input/Search";
import { ColumnsType } from "antd/es/table";
import React from "react";
import './__AddRecord.scss'
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
    ,
    {
        title: '',
        key: 'listen',
        dataIndex: 'listen',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>
            )
        }
    },

    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Thêm</a>
            )
        }
    },
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
const AddRecord = () => {
    return (
        <div className="add__record__page">
            <div className='title__page'>
                Thêm bản ghi
            </div>
            <div className="content__add__record">
                <div className="store__add__record">
                    <div className="title__name__add___record">Kho bản ghi</div>
                    <div className="actions__add__record">
                        <div className="select__add__record">
                            <div className="name__select">Thể loại</div>
                            <Select
                                defaultValue="All"
                                style={{ width: 118, marginRight: 24 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'edm',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />

                            <div className="name__select">Playlist mẫu</div>
                            <Select
                                defaultValue="All"
                                style={{ width: 155 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'edm',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />
                        </div>

                        <div className="search__add__record">
                            <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 500 }} />
                        </div>

                    </div>


                    <div className='Table_detail__list_playlist' style={{ width: 540 }}>
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>

                </div>
                <div className="table__record__added">
                    <div className="title__name__add___record">Danh sách bản ghi được thêm vào Playlist</div>
                    <div className="info__added__record">
                        <div className="list__info__added__record">
                            <div className="name__added__record">Tổng số</div>
                            <div className="value__added__record">0 bản ghi</div>
                        </div>

                        <div className="list__info__added__record">
                            <div className="name__added__record">Tổng thời lượng</div>
                            <div className="value__added__record">00:03:12</div>
                        </div>
                    </div>
                    <div className="search__add__record">
                        <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 500 }} />
                    </div>
                    <div className='Table_detail__list_playlist' style={{ width: 570 }}>
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                </div>


            </div>
            <div className="btn__actions">

                <Button className='btn__cancel' >
                    Hủy
                </Button>
                <Button htmlType="submit" className='btn__save'>
                    Lưu
                </Button>
            </div>
        </div>
    )
}

export default AddRecord