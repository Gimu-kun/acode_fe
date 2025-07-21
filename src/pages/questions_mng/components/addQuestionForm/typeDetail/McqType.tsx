import { Form, Checkbox, Input } from 'antd'


export default function McqType() {
    return (
        <>
            <Form.Item className="w-full" label="Đáp án 1" required>
                <div className="flex items-center gap-2 w-full">
                    <Checkbox />
                    <Input className="flex-1" />
                </div>
            </Form.Item>
            <Form.Item className="w-full" label="Đáp án 2" required>
                <div className="flex items-center gap-2 w-full">
                    <Checkbox />
                    <Input className="flex-1" />
                </div>
            </Form.Item><Form.Item className="w-full" label="Đáp án 3" required>
                <div className="flex items-center gap-2 w-full">
                    <Checkbox />
                    <Input className="flex-1" />
                </div>
            </Form.Item><Form.Item className="w-full" label="Đáp án 4" required>
                <div className="flex items-center gap-2 w-full">
                    <Checkbox />
                    <Input className="flex-1" />
                </div>
            </Form.Item>
        </>
    )
}
