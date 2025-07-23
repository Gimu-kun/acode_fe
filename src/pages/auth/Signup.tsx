import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Radio, Space } from "antd";
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import '../../components/layout/auth.css'
import axios  from "axios";
import type { userCreateType } from "../../types/user";

type signUpFormType ={
    confirm_password:string;
    dob:Dayjs;
    fullname:string;
    gender:string;
    passwords:string;
    username:string
}

export default function Signup() {

    dayjs.extend(customParseFormat);
    const dateFormat = 'YYYY-MM-DD';

    const [form] = Form.useForm();

    const handleForm = async (values: signUpFormType) => {
        const formattedDob = values.dob.format('YYYY-MM-DD');
        const payload = {
            ...values,
            dob: formattedDob
        };
        
        const user:userCreateType = {
            dob:payload.dob,
            fullname:payload.fullname,
            gender:payload.gender,
            passwords:payload.passwords,
            username:payload.username,
            role:"student",
            achievement:"newbie"
        }

        console.log(user);
        
        
        try {
            const res = await axios.post("http://localhost:8080/api/user", user, {
              headers: { "Content-Type": "application/json" }
            });
        
            console.log("Status:", res.status);
            console.log("Data:", res.data);
          } catch (error) {
            console.error("Lỗi khi gửi request:", error);
          }
                  
    };

  return (
    <Form form={form} onFinish={handleForm} className='auth-field flex flex-col p-15 w-2/3 bg-white'>
        <div className="mb-5">
            <h3 className="text-3xl">Đăng ký</h3>
            <span className="text-gray-500 text-sm">Điền thông tin bên dưới</span>
        </div>
        <Form.Item name={"fullname"} rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}>
            <Input size="large" placeholder="Nhập họ và tên" prefix={<InfoCircleOutlined />} />
        </Form.Item>
        <Space>
            <Form.Item name={"gender"} rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}>
                <Radio.Group>
                    <Radio value={"m"}>Nam</Radio>
                    <Radio value={"f"}>Nữ</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={"dob"} rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}>
                <DatePicker format={dateFormat} />
            </Form.Item>
        </Space>
        <Form.Item name={"username"} rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}>
            <Input size="large" placeholder="Nhập tài khoản" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name={"passwords"} rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input.Password size="large" placeholder="Nhập mật khẩu" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} prefix={<KeyOutlined />} />
        </Form.Item>
        <Form.Item name={"confirm_password"} rules={[{ required: true, message: 'Vui lòng xác nhận lại mật khẩu!' },
            ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('passwords') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không khớp!'));
                },
              }),
        ]}>
            <Input.Password size="large" placeholder="Xác nhận mật khẩu" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} prefix={<KeyOutlined />} />
        </Form.Item>
        <Button size="large" type="primary" htmlType="submit">Đăng ký</Button>
    </Form>
  )
}
