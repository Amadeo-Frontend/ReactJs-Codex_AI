import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen px-6 py-4 flex flex-col justify-between bg-[#f0f4f9]">
      <div className="top">
        <img className='menu block ml-3 w-5 cursor-pointer' src={assets.menu_icon}  alt="menu icon" />
        <div className='new-chat mt-12 inline-flex items-center gap-3 px-3 py-4 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer'>
            <img className='w-5' src={assets.plus_icon} alt="plus icon" />
            <p className='font-medium'>New Chat</p>
        </div>
        <div className='recent flex flex-col'>
            <p className="recent-title mt-8 mb-5 p-3">Recent</p>
            <div className="recent-entry flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
                <img className='w-5' src={assets.message_icon} alt="message icon" />
                <p>What is ReactJs ...</p>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <img className='w-5' src={assets.question_icon} alt="question icon" />
            <p>Help</p>
        </div>
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <img className='w-5' src={assets.history_icon} alt="history icon" />
            <p>Activity</p>
        </div>
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <img className='w-5' src={assets.setting_icon} alt="setting icon" />
            <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
