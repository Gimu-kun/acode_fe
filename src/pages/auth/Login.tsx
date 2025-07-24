import { EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import '../../components/layout/auth.css'
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type loginFormType ={
  username:string,
  passwords:string
}

export default function Login() {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();
  const [form] = Form.useForm();

  const handleLoginForm = async(values:loginFormType) => {
    try{
      const res = await axios.post("http://localhost:8080/api/user/login",values,{
        headers:{"Content-Type":"application/json"}
      })
      modal.success({
        title:"Đăng nhập thành công",
        content:"Chúc bạn có ngày học tập vui vẻ",
        okCancel:false,
        onOk:()=>{
          document.cookie = `token=${res.data}`
          navigate("/info")
        }
      })
    }catch(error){
      const err = error as AxiosError
      modal.error({
        title:"Đăng nhập không thành công",
        okCancel:false,
        okText:"Đóng",
        content:err.response?.data as string,
      })
    }
  }

  return (
    <Form form={form} onFinish={handleLoginForm} className='auth-field flex flex-col p-15 w-2/3 bg-white'>
      {contextHolder}
      <div className="mb-5">
        <h3 className="text-3xl">Đăng nhập</h3>
        <span className="text-gray-500 text-sm">Điền thông tin bên dưới</span>
      </div>
      <Form.Item name={"username"}>
        <Input size="large" placeholder="Nhập tài khoản" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name={"passwords"}>
        <Input.Password size="large" placeholder="Nhập mật khẩu" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} prefix={<KeyOutlined />} />
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit">Đăng nhập</Button>
    </Form>
  )
}
