import { Form, Input } from "antd";

export default function FnType() {
  return (
    <>
        <Form.Item className="w-full" label="Đáp án" required>
            <Input type="number"/>
        </Form.Item>
        <Form.Item className="w-full" label="Sai số" required>
            <Input type="number" defaultValue={0}/>
        </Form.Item>
    </>
  )
}
