import { Button, Divider, Form, Input, Select, Space, Upload, type GetProp, type UploadFile, type UploadProps } from "antd";
import { useEffect, useState } from "react";
import ImgCrop from 'antd-img-crop';
import McqType from "./typeDetail/McqType";
import TextArea from "antd/es/input/TextArea";
import { setMathJax } from "../../../../services/mathJaxService";
import FnType from "./typeDetail/FnType";
import FnsType from "./typeDetail/FnsType";
import FssType from "./typeDetail/FssType";
import FpsType from "./typeDetail/FpsType";
import FeType from "./typeDetail/FeType";
import MpType from "./typeDetail/MpType";
import PeType from "./typeDetail/PeType";

type Props = {
  setAddingFormState: React.Dispatch<React.SetStateAction<boolean>>;
};

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export default function AddQuestionForm({ setAddingFormState }: Props) {
  const [typeState, setTypeState] = useState("mp");
  const [questionContent, setQuestionContent] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleTypeChange = (value: string) => {
    setTypeState(value);
  };

  const questionContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionContent(e.target.value);
  };

  const appendMathSyntax = (appendItem:string) => {
    console.log("test");
    
    setQuestionContent(questionContent + appendItem)
  }

  useEffect(() => {
    setMathJax();
  }, [questionContent,typeState]);

  return (
    <div className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen bg-gray-300/50 z-10">
      <div className="w-2/4 h-3/4 bg-white rounded-2xl p-10 overflow-y-auto">
        <h3 className="text-2xl text-center font-semibold">Thêm câu hỏi mới</h3>
        <Form layout="vertical">
          <Form.Item label="Dạng câu hỏi" required>
            <Select defaultValue={"mcq"} onChange={handleTypeChange}>
              <Select.Option value="mcq">MCQ</Select.Option>
              <Select.Option value="fn">FN</Select.Option>
              <Select.Option value="fns">FNS</Select.Option>
              <Select.Option value="fps">FPS</Select.Option>
              <Select.Option value="fss">FSS</Select.Option>
              <Select.Option value="fe">FE</Select.Option>
              <Select.Option value="mp">MP</Select.Option>
              <Select.Option value="pe">PE</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Bloom" required>
            <Select defaultValue={"r"}>
              <Select.Option value="r">Nhớ</Select.Option>
              <Select.Option value="u">Hiểu</Select.Option>
              <Select.Option value="an">Vận dụng</Select.Option>
              <Select.Option value="ap">Phân tích</Select.Option>
            </Select>
          </Form.Item>
          <div className="flex gap-2 w-full justify-between">
            <Form.Item className="flex-1" label="Độ khó" required>
              <Input type="number" defaultValue={0.5} />
            </Form.Item>
            <Form.Item className="flex-1" label="Độ phân biệt" required>
              <Input type="number" defaultValue={0.5} />
            </Form.Item>
          </div>
          <Form.Item label="Trạng thái" required>
            <Select defaultValue={"active"}>
              <Select.Option value="active">Kích hoạt</Select.Option>
              <Select.Option value="inactive">Tạm ngưng</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Nội dung" required>
            <div className="py-2 flex gap-x-2 w-full">
                <button dangerouslySetInnerHTML={{ __html: `\\(a^2\\)`}} onClick={()=>{appendMathSyntax(`\\(a^2\\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\(x_1\\)`}} onClick={()=>{appendMathSyntax(`\\(x_1\\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\(\\frac{a}{b}\\)` }} onClick={()=>{appendMathSyntax(`\\(\\frac{a}{b}\\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\( \\sum_{i=1}^{n} i \\)` }} onClick={()=>{appendMathSyntax(`\\( \\sum_{i=1}^{n} i \\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\( \\sqrt{x} \\)`}} onClick={()=>{appendMathSyntax(`\\( \\sqrt{x} \\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\( \\int_{0}^{1} x^2 dx\\)`}} onClick={()=>{appendMathSyntax(`\\( \\int_{0}^{1} x^2 dx\\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
                <button dangerouslySetInnerHTML={{ __html: `\\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)`}} onClick={()=>{appendMathSyntax(`\\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)`)}} className="px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-700 active:text-blue-400 active:border-blue-400 cursor-pointer"/>
            </div>
            <TextArea onChange={questionContentChange} value={questionContent} autoSize={{ minRows: 3, maxRows: 10 }} />
          </Form.Item>
          <Form.Item label="Preview">
            <div
              className="p-2  bg-gray-100  rounded min-h-[80px]"
              dangerouslySetInnerHTML={{ __html: questionContent.replace(/\n/g, '<br/>') }}
            />
          </Form.Item>
          <Form.Item>
            <ImgCrop rotationSlider>
                <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </ImgCrop>
          </Form.Item>
          <Divider>Chi tiết câu hỏi</Divider>
          {
          typeState == "mcq" ? <McqType /> :
          typeState == "fn" ? <FnType/> :
          typeState == "fns" ? <FnsType/> :
          typeState == "fss" ? <FssType/> :
          typeState == "fps" ? <FpsType/> :
          typeState == "fe" ? <FeType/> :
          typeState == "mp" ? <MpType/> :
          typeState == "pe" ? <PeType/> : <></>}
          <Space className="flex justify-end w-full">
            <Button type="primary">Thêm</Button>
            <Button type="link" onClick={() => setAddingFormState(false)}>
              Huỷ bỏ
            </Button>
          </Space>
        </Form>
      </div>
    </div>
  );
}
