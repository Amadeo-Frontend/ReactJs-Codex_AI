import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { BsCodeSlash, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import './style.css'

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar hidden h-screen overflow-y-auto px-4 py-4 md:flex flex-col justify-between bg-[#f0f4f9]">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="block w-5 ml-3 cursor-pointer menu"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div
          onClick={() => newChat()}
          className="new-chat mt-12 inline-flex items-center gap-3 px-3 py-2 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer hover:scale-105"
        >
          <img className="w-5" src={assets.plus_icon} alt="plus icon" />
          {extended ? <p className="font-medium">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col overflow-y-auto recent max-h-recent-list">
            <p className="p-3 mt-8 mb-1 recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => loadPrompt(item)}
                    className="recent-entry flex items-center gap-3 p-3 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]"
                  >
                    <img
                      className="w-5"
                      src={assets.message_icon}
                      alt="message icon"
                    />
                    <p>{item.slice(0, 14)}...</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 bottom">
        <a href="https://github.com/Amadeo-Frontend" target="_blank">
          <div className="bottom-item  flex items-center gap-3 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <BsGithub />
            {extended ? <p>Github</p> : null}
          </div>
        </a>
        <a href="https://www.instagram.com/amadeo_bon/" target="_blank">
          <div className="bottom-item flex items-center gap-3 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <BsInstagram className="fill-red-600" />
            {extended ? <p>Instagram</p> : null}
          </div>
        </a>
        <a href="https://www.linkedin.com/in/amadeo-bon/" target="_blank">
          <div className="bottom-item flex items-center gap-3 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-[#e2e6eb]">
            <BsLinkedin className="fill-blue-500" />
            {extended ? <p>Linkedin</p> : null}
          </div>
        </a>

        {extended ? (
          <p className="text-[13px] my-3 text-center font-[300] flex gap-2 items-center">
            <BsCodeSlash className="fill-sky-500" /> Developed by Amadeo Bon{" "}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
