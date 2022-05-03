import Sidebar from "../components/Sidebar"
import Main from "../components/Main"


export default function Home() {
  return (
    <div className="h-full w-full flex bg-[#fff]">
      <Sidebar />
      <Main />
    </div>
  )
}
