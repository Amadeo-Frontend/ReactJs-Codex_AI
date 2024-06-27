import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar hidden min-h-screen p-6 py-4 md:flex flex-col justify-between bg-[#f0f4f9]">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="block w-5 ml-3 cursor-pointer menu"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={()=>newChat()} className="new-chat mt-12 inline-flex items-center gap-3 px-3 py-4 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer">
          <img className="w-5" src={assets.plus_icon} alt="plus icon" />
          {extended ? <p className="font-medium">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col recent">
            <p className="p-3 mt-8 mb-5 recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={()=>loadPrompt(item)}
                  className="recent-entry flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]"
                >
                  <img
                    className="w-5"
                    src={assets.message_icon}
                    alt="message icon"
                  />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.history_icon} alt="history icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.setting_icon} alt="setting icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
