import { Form, Input } from 'antd'

export default function FpsType() {
  return (
    <>
        <Form.Item className="w-full" label="Đáp án" required>
            <Input type="text"/>
        </Form.Item>
        <Form.Item className="w-full" label="Nhập cú pháp tương tự (Tuỳ chọn)">
            <Input type="text"/>
        </Form.Item>
    </>
  )
}
