import { Editor } from "@monaco-editor/react";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function PeType() {
  return (
    <>
        <Form.Item className="w-full" label="Đoạn code khung" required>
            <Editor
                className=" min-h-40"
                height="100%"
                defaultLanguage="javascript"
                defaultValue="// Gõ code ở đây"
                theme="vs-dark" // hoặc "light"
            />
        </Form.Item>
        <Form.Item className="w-full" label="Nhập testcase 1" required>
            <TextArea/>
        </Form.Item>
        <Form.Item className="w-full" label="Nhập testcase 2" required>
            <TextArea/>
        </Form.Item>
        <Form.Item className="w-full" label="Nhập testcase 3" required>
            <TextArea/>
        </Form.Item>
    </>
  )
}
