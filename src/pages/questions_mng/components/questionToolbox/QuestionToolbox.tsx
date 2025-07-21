import { useState } from "react";
import AddQuestionForm from "../addQuestionForm/AddQuestionForm";

export default function QuestionToolbox() {
    const [addingFormState , setAddingFormState] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-15 bg-white rounded-xl px-5 p-2'>
        {
            addingFormState && <AddQuestionForm setAddingFormState={setAddingFormState}/>
        }
        <h3 className='text-2xl font-semibold'>Quản lý câu hỏi</h3>
        <button onClick={()=>setAddingFormState(true)} className='border-1 border-gray-400 p-2 text-sm text-gray-400 rounded-xl hover:bg-black hover:text-white cursor-pointer'>Thêm câu hỏi mới</button>
    </div>
  )
}
