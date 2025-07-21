import { Table, Tooltip } from 'antd';
import React from 'react'


export default function RankingTable() {
    const { Column } = Table;

    interface DataType {
        key: React.Key;
        rank: string;
        name: string;
        level: string;
        score: string;
    }

    const data: DataType[] = [
        { key: '16', rank: '1', name: 'Đỗ Thị P', level: '29', score: '900' },
        { key: '5', rank: '2', name: 'Hoàng Văn E', level: '30', score: '890' },
        { key: '14', rank: '3', name: 'Hoàng Thị N', level: '26', score: '830' },
        { key: '10', rank: '4', name: 'Nguyễn Thị J', level: '14', score: '800' },
        { key: '13', rank: '5', name: 'Phạm Văn M', level: '20', score: '790' },
        { key: '8', rank: '6', name: 'Bùi Thị H', level: '17', score: '770' },
        { key: '18', rank: '7', name: 'Vũ Thị R', level: '18', score: '750' },
        { key: '1', rank: '8', name: 'Nguyễn Văn A', level: '15', score: '720' },
        { key: '3', rank: '9', name: 'Lê Văn C', level: '21', score: '810' },
        { key: '2', rank: '10', name: 'Trần Thị B', level: '28', score: '650' },
        { key: '20', rank: '11', name: 'Trần Thị T', level: '16', score: '640' },
        { key: '7', rank: '12', name: 'Đỗ Văn G', level: '24', score: '610' },
        { key: '11', rank: '13', name: 'Trần Văn K', level: '25', score: '610' },
        { key: '19', rank: '14', name: 'Nguyễn Văn S', level: '23', score: '580' },
        { key: '4', rank: '15', name: 'Phạm Thị D', level: '12', score: '550' },
        { key: '12', rank: '16', name: 'Lê Thị L', level: '13', score: '510' },
        { key: '6', rank: '17', name: 'Ngô Thị F', level: '11', score: '420' },
        { key: '15', rank: '18', name: 'Ngô Văn O', level: '10', score: '360' },
      ];      
      

    return (
        <Table<DataType> size="middle" dataSource={data} pagination={{ pageSize: 3 }} scroll={{ y: 400 }}>
            <Column className='w-1/5' ellipsis title="Hạng" dataIndex="rank" key="rank" />
            <Column className='w-1/5' ellipsis title="Tên" dataIndex="name" key="name" render={(record) => <Tooltip placement="topLeft" title={record}>
                {record}
            </Tooltip>} />
            <Column className='w-1/5' ellipsis title="Cấp độ" dataIndex="level" key="level" />
            <Column className='w-1/5' ellipsis title="Điểm" dataIndex="score" key="score" />
        </Table>
    )
}
