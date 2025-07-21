import { Form, Input } from "antd";

export default function MpType() {
    return (
        <>
            <div className="flex justify-between gap-5">
                <Form.Item className="w-full" label="Cột A" required>
                    <div className="flex flex-col gap-3 w-full">
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                </Form.Item>
                <Form.Item className="w-full" label="Cột B" required>
                    <div className="flex flex-col gap-3 w-full">
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                </Form.Item>
            </div>
        </>
    )
}
