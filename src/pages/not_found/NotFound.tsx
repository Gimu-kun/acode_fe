import { Button, Result } from 'antd'

export default function NotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Xin lỗi, trang bạn đang truy cập không tồn tại!"
            extra={<Button type="primary">Trở về trang chủ</Button>}
        />
    )
}
