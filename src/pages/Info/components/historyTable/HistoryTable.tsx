import { Space, Table, Tag, Tooltip, type TableColumnsType } from 'antd';
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import React from 'react'
import { data } from 'react-router-dom';


export default function HistoryTable() {
    const { Column, ColumnGroup } = Table;

    interface DataType {
        key: React.Key;
        time: string;
        title: string;
        result: string;
    }

    const data: DataType[] = [
        {
            key: '1',
            time: '16-07-2025',
            title: 'Kiểm tra 1',
            result: '32 / 40',
        },
        {
            key: '2',
            time: '15-07-2025',
            title: 'Kiểm tra 2',
            result: '35 / 40'
        },
        {
            key: '3',
            time: '14-07-2025',
            title: 'Kiểm tra 3',
            result: '28 / 40'
        },
        {
            key: '4',
            time: '16-07-2025',
            title: 'Kiểm tra 1',
            result: '32 / 40',
        },
        {
            key: '5',
            time: '15-07-2025',
            title: 'Kiểm tra 2',
            result: '35 / 40'
        },
        {
            key: '6',
            time: '14-07-2025',
            title: 'Kiểm tra 3',
            result: '28 / 40'
        },
        {
            key: '7',
            time: '16-07-2025',
            title: 'Kiểm tra 1',
            result: '32 / 40',
        },
        {
            key: '8',
            time: '15-07-2025',
            title: 'Kiểm tra 2',
            result: '35 / 40'
        },
        {
            key: '9',
            time: '14-07-2025',
            title: 'Kiểm tra 3',
            result: '28 / 40'
        },
        {
            key: '10',
            time: '15-07-2025',
            title: 'Kiểm tra 2',
            result: '35 / 40'
        },
        {
            key: '11',
            time: '14-07-2025',
            title: 'Kiểm tra 3',
            result: '28 / 40'
        },
        {
            key: '12',
            time: '15-07-2025',
            title: 'Kiểm tra 2',
            result: '35 / 40'
        },
        {
            key: '13',
            time: '14-07-2025',
            title: 'Kiểm tra 3',
            result: '28 / 40'
        }
    ];

    return (
        <Table<DataType> size="middle" dataSource={data} pagination={{ pageSize: 5 }} scroll={{ y: 400 }}>
            <Column className='w-1/5' ellipsis title="Thời gian" dataIndex="time" key="time" />
            <Column className='w-1/5' ellipsis title="Tiêu đề" dataIndex="title" key="title" render={(record) => <Tooltip placement="topLeft" title={record}>
                {record}
            </Tooltip>} />
            <Column className='w-1/5' ellipsis title="Kết quả" dataIndex="result" key="result" />
            <Column
                className='w-1/5'
                ellipsis
                title="Action"
                key="action"
                render={(_: any, record: DataType) => (
                    <Space size="middle">
                        <a>Chi tiết</a>
                    </Space>
                )}
            />
        </Table>
    )
}
