import { Form, Input } from 'antd'

export default function FssType() {
  return (
    <>
        <Form.Item className="w-full" label="Đáp án" required>
            <Input type="text"/>
        </Form.Item>
        <Form.Item className="w-full" label="Nhập các từ tương đồng (cách nhau bằng dấu phẩy)">
            <Input type="text"/>
        </Form.Item>
    </>
  )
}
