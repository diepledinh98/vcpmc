import { Select } from 'antd'
import React from 'react'
import './styles.scss'
const SelectComponent = () => {
    return (
        <>
            <div className="select_item">
                <div className="select_name">
                    Thể loại:
                </div>
                <Select
                    defaultValue="All"
                    style={{ width: 90 }}
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


            <div className="select_item">
                <div className="select_name">
                    Định dạng:
                </div>
                <Select
                    defaultValue="All"
                    style={{ width: 90 }}
                    //   onChange={handleChange}

                    options={[
                        {
                            value: 'All',
                            label: 'Tất cả',
                        },
                        {
                            value: 'musiuc',
                            label: 'Âm thanh',
                        },
                        {
                            value: 'video',
                            label: 'Video',
                        },

                    ]}
                />
            </div>

            <div className="select_item">
                <div className="select_name">
                    Thời hạn sử dụng:
                </div>
                <Select
                    defaultValue="All"
                    style={{ width: 90 }}
                    //   onChange={handleChange}

                    options={[
                        {
                            value: 'All',
                            label: 'Tất cả',
                        },
                        {
                            value: 'used',
                            label: 'Còn thời hạn',
                        },
                        {
                            value: 'expire',
                            label: 'Hết hạn',
                        },

                    ]}
                />
            </div>

            <div className="select_item">
                <div className="select_name">
                    Trạng thái:
                </div>
                <Select
                    defaultValue="All"
                    style={{ width: 150 }}
                    //   onChange={handleChange}
                    options={[
                        {
                            value: 'All',
                            label: 'Tất cả',
                        },
                        {
                            value: 'customer',
                            label: 'Duyệt bởi người dùng',
                        },
                        {
                            value: 'auto',
                            label: 'Duyệt tự động',
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default SelectComponent