import { EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import '../../components/layout/auth.css'


export default function Login() {
  return (
    <Form className='auth-field flex flex-col p-15 w-2/3 bg-white'>
      <div className="mb-5">
        <h3 className="text-3xl">Đăng nhập</h3>
        <span className="text-gray-500 text-sm">Điền thông tin bên dưới</span>
      </div>
      <Form.Item>
        <Input size="large" placeholder="Nhập tài khoản" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item>
        <Input.Password size="large" placeholder="Nhập mật khẩu" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} prefix={<KeyOutlined />} />
      </Form.Item>
      <Button size="large" type="primary">Đăng nhập</Button>
    </Form>
  )
}
