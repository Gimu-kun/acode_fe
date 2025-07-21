import { Form, Input } from 'antd'

export default function FeType() {
  return (
    <>
        <Form.Item className="w-full" label="Đáp án" required>
            <Input type="text"/>
        </Form.Item>
        <Form.Item className="w-full" label="Nhập biểu thức tương tự (Tuỳ chọn)">
            <Input type="text"/>
        </Form.Item>
    </>
  )
}
