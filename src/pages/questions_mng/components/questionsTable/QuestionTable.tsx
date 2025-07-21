import { Table, Tag, Space, type TableColumnsType } from "antd";

interface DataType {
    key: React.Key;
    bloom: string;
    chapter: string;
    type: string;
    diff_level: number;
    disc_level: number;
    content: string;
    status: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Thứ tự',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        width: 70,
        align: "center"
    },
    {
        title: 'Bloom',
        dataIndex: 'bloom',
        showSorterTooltip: { target: 'full-header' },
        width: 70,
        align: "center",
        filters: [
            {
                text: 'Nhớ',
                value: 'r',
            },
            {
                text: 'Hiểu',
                value: 'u',
            },
            {
                text: 'Vận dụng',
                value: 'an',
            },
            {
                text: 'Phân tích',
                value: 'ap',
            }
        ],
        onFilter: (value, record) => record.bloom.indexOf(value as string) === 0,
        sorter: (a, b) => a.bloom.length - b.bloom.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Chương',
        dataIndex: 'chapter',
        sorter: (a, b) => a.chapter.localeCompare(b.chapter),
        width:80,
        filters: [
            {
                text: 'Chương 1',
                value: '1',
            },
            {
                text: 'Chương 2',
                value: '2',
            },
            {
                text: 'Chương 3',
                value: '3',
            },
            {
                text: 'Chương 4',
                value: '4',
            },
            {
                text: 'Chương 5',
                value: '5',
            },
            {
                text: 'Chương 6',
                value: '6',
            }
        ]
    },
    {
        title: 'Dạng',
        dataIndex: 'type',
        sorter: (a, b) => a.type.localeCompare(b.type),
        width:80,
        filters: [
            {
                text: 'MCQ',
                value: 'mcq',
            },
            {
                text: 'FN',
                value: 'fn',
            },
            {
                text: 'FNS',
                value: 'fns',
            },
            {
                text: 'FPS',
                value: 'fps',
            },
            {
                text: 'FSS',
                value: 'fss',
            },
            {
                text: 'FE',
                value: 'fe',
            },
            {
                text: 'MP',
                value: 'mp',
            },
            {
                text: 'PE',
                value: 'pe',
            }
        ]
    },
    {
        title: 'Nội dung',
        dataIndex: 'content',
        minWidth:300,
        sorter: (a, b) => a.content.localeCompare(b.content),
    },
    {
        title: 'Độ khó',
        dataIndex: 'diff_level',
        width:80,
        sorter: (a, b) => a.content.localeCompare(b.content),
    },
    {
        title: 'Độ phân biệt',
        dataIndex: 'disc_level',
        width:120,
        sorter: (a, b) => a.content.localeCompare(b.content),
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (status: string) => (
            <Tag color={status.toLocaleLowerCase() == 'kích hoạt' ? 'green' : 'red'}>
                {status.toUpperCase()}
            </Tag>
        ),
        width:120,
        sorter: (a, b) => a.content.localeCompare(b.content),
        filters: [
            {
                text: 'Kích hoạt',
                value: 'active',
            },
            {
                text: 'Tạm dừng',
                value: 'inactive',
            }
        ]
    },
    {
        title: 'Thao tác',
        render: (_: any) => (
            <Space size="middle">
                <a>Cập nhật</a>
                <a>Xoá</a>
            </Space>
        )
    }
];

const data: DataType[] = [
    { key: '1', bloom: 'R', chapter: 'Chương 1', type: 'MCQ', content: 'Question content 1', status: 'Kích hoạt', diff_level: 0.7, disc_level: 0.5 },
    { key: '2', bloom: 'U', chapter: 'Chương 2', type: 'Essay', content: 'Question content 2', status: 'Nháp', diff_level: 0.5, disc_level: 0.6 },
    { key: '3', bloom: 'A', chapter: 'Chương 3', type: 'MCQ', content: 'Question content 3', status: 'Kích hoạt', diff_level: 0.8, disc_level: 0.9 },
    { key: '4', bloom: 'R', chapter: 'Chương 1', type: 'MCQ', content: 'Question content 4', status: 'Hủy', diff_level: 0.3, disc_level: 0.4 },
    { key: '5', bloom: 'U', chapter: 'Chương 4', type: 'Essay', content: 'Question content 5', status: 'Kích hoạt', diff_level: 0.9, disc_level: 0.7 },
    { key: '6', bloom: 'A', chapter: 'Chương 2', type: 'MCQ', content: 'Question content 6', status: 'Nháp', diff_level: 0.6, disc_level: 0.6 },
    { key: '7', bloom: 'R', chapter: 'Chương 5', type: 'MCQ', content: 'Question content 7', status: 'Kích hoạt', diff_level: 0.4, disc_level: 0.3 },
    { key: '8', bloom: 'U', chapter: 'Chương 1', type: 'Essay', content: 'Question content 8', status: 'Kích hoạt', diff_level: 1.0, disc_level: 0.8 },
    { key: '9', bloom: 'A', chapter: 'Chương 3', type: 'MCQ', content: 'Question content 9', status: 'Hủy', diff_level: 0.2, disc_level: 0.5 },
    { key: '10', bloom: 'R', chapter: 'Chương 2', type: 'MCQ', content: 'Question content 10', status: 'Nháp', diff_level: 0.6, disc_level: 0.7 },
    { key: '11', bloom: 'U', chapter: 'Chương 4', type: 'Essay', content: 'Question content 11', status: 'Kích hoạt', diff_level: 0.9, disc_level: 0.9 },
    { key: '12', bloom: 'A', chapter: 'Chương 1', type: 'MCQ', content: 'Question content 12', status: 'Hủy', diff_level: 0.5, disc_level: 0.2 },
    { key: '13', bloom: 'R', chapter: 'Chương 5', type: 'Essay', content: 'Question content 13', status: 'Kích hoạt', diff_level: 0.8, disc_level: 0.6 },
    { key: '14', bloom: 'U', chapter: 'Chương 3', type: 'MCQ', content: 'Question content 14', status: 'Nháp', diff_level: 0.3, disc_level: 0.4 },
    { key: '15', bloom: 'A', chapter: 'Chương 2', type: 'MCQ', content: 'Question content 15', status: 'Kích hoạt', diff_level: 0.7, disc_level: 1.0 },
  ];  

export default function QuestionTable() {
  return (
    <Table<DataType>
            size="middle"
            dataSource={data}
            pagination={{ pageSize: 10 }}
            columns={columns}
            showSorterTooltip={{ target: 'sorter-icon' }}>
    </Table>
  )
}
