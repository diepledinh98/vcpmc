import { Select } from "antd";
import React from "react";
import Chart from "./components/Chart/Chart";
import './Report.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
const Report = () => {
    const data = [
        {
            name: '1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '3',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '5',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },

        {
            name: '8',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '9',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '11',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '12',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '13',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '14',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '15',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '16',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '17',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '18',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '19',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '20',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '21',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '22',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '23',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '24',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '25',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '26',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '27',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '28',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '29',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '30',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '31',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="report__page">
            <div className="title__page">B??o c??o doanh thu</div>
            <div className="action">
                <div className="action__name">Theo th??ng:</div>
                <Select
                    defaultValue="Theo th??ng"
                    style={{ width: 150 }}
                    //   onChange={handleChange}
                    options={[
                        {
                            value: 'Theo th??ng',
                            label: 'Theo th??ng',
                        },
                        {
                            value: 'Theo Ng??y',
                            label: 'Theo Ng??y',
                        },
                        {
                            value: 'Theo Tu???n',
                            label: 'Theo Tu???n',
                        }
                    ]}
                />

                <Select
                    defaultValue="6/2021"
                    style={{ width: 150 }}
                    //   onChange={handleChange}
                    options={[
                        {
                            value: '6/2021',
                            label: '6/2021',
                        },
                        {
                            value: '7/2021',
                            label: '7/2021',
                        },
                        {
                            value: '8/2021',
                            label: '8/2021',
                        }
                    ]}
                />
            </div>
            <div className="container">
                <div className="content">
                    <div className="content__info">
                        <div className="content__info__item">
                            <div className="content__name">
                                T???ng s??? b??i h??t
                            </div>
                            <div className="content__value">
                                100
                            </div>
                        </div>
                        <div className="content__info__item">
                            <div className="content__name">
                                T???ng s??? l?????t ph??t
                            </div>
                            <div className="content__value">
                                32.000.000
                            </div>
                        </div>
                        <div className="content__info__item">
                            <div className="content__name">
                                Doanh thu tr??n l?????t ph??t
                            </div>
                            <div className="content__value">
                                1.564.745.000??
                            </div>
                        </div>
                        <div className="content__info__item">
                            <div className="content__name">
                                Doanh thu ch??a ph??n ph???i
                            </div>
                            <div className="content__value">
                                164.745.000??
                            </div>
                        </div>
                        <div className="content__info__item">
                            <div className="content__name">
                                H??nh ch??nh ph??
                            </div>
                            <div className="content__value">
                                3.253.000??
                            </div>
                        </div>
                    </div>
                    <div className="title__Name">Bi???u ????? theo d??i l?????t ph??t - 29/06/2021</div>
                    <div className="" style={{ width: 1110, height: 500, marginBottom: 100 }} >
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={1110} height={100} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='profile__action' style={{ height: 110 }}>
                    <Link to='/revenue/report-revenue/detail-report' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        B??o c??o chi ti???t
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Report