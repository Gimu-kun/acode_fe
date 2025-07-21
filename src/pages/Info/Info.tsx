import LineChart from "../../components/ui/chart/LineChart"
import HistoryTable from "./components/historyTable/HistoryTable"
import RankingTable from "./components/rankingTable/RankingTable"

export default function Info() {
  return (
    <div className="flex gap-5 w-full h-full">
      <div className="flex flex-col gap-5 w-1/2 h-full">
        <div className="flex gap-5 w-full h-2/6">
          <div className="w-1/2 h-full bg-white rounded-xl p-5">
            <div className="flex justify-between my-2">
              <span className="text-2xl">Cấp độ</span>
              <span className="flex justify-center items-center border-2 border-gray-300 rounded-full p-1 text-gray-300 hover:border-black hover:text-black cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </div>
            <div className="flex justify-between items-end my-3">
              <span className="text-6xl">12</span>
              <div className="px-3 py-2 rounded-2xl bg-lime-300 text-sm">
                Trung cấp
              </div>
            </div>
            <p className="text-gray-400 text-sm">Thật ngạc nhiên, bạn thăng cấp khá nhanh đấy!</p>
          </div>
          <div className="w-1/2 h-full bg-white rounded-xl p-5">
            <div className="flex justify-between my-2">
              <span className="text-2xl">Đã hoàn thành</span>
              <span className="flex justify-center items-center border-2 border-gray-300 rounded-full p-1 text-gray-300 hover:border-black hover:text-black cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </div>
            <div className="flex justify-between items-end my-3">
              <span className="text-6xl">10</span>
              <div className="px-3 py-2 rounded-2xl bg-lime-300 text-sm ">
                Thợ săn điểm
              </div>
            </div>
            <p className="text-gray-400 text-sm">Rất tuyệt, hãy tiếp tục kiên trì bạn nhé!</p>
          </div>
        </div>
        <div className="w-full h-4/6 bg-white rounded-xl p-5">
          <div className="flex justify-between items-center">
            <span className="text-2xl">Lịch sử bài kiểm tra</span>
            <a className="text-md hover:text-amber-400 underline" href="">Xem tất cả</a>
          </div>
          <div className="pt-8 h-full">
            <HistoryTable/>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 h-full">
        <div className="flex flex-col w-full h-1/2 bg-white rounded-xl p-5">
          <span className="text-2xl">Đã hoàn thành</span>
          <div className="h-full">
            <LineChart/>
          </div>
        </div>
        <div className="w-full h-1/2 bg-white rounded-xl p-5">
          <span className="text-2xl">Bảng xếp hạng</span>
          <div className="pt-4 h-full">
            <RankingTable/>
          </div>
        </div>
      </div>
    </div>
  )
}
