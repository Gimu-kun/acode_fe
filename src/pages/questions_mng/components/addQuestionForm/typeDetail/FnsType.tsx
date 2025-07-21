import { Form, Input } from "antd";

export default function FnsType() {
  return (
    <>
        <Form.Item className="w-full" label="Đáp án (dãy số cách nhau bằng dấu phẩy)" required>
            <Input type="text"/>
        </Form.Item>
    </>
  )
}
