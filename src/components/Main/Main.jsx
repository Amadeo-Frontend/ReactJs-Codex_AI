import { assets } from "../../assets/assets";
import "./style.css";

const Main = () => {
  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-2xl p-5 text-[#585858]">
        <p>Gemini AI</p>
        <img
          className="rounded-full w-10"
          src={assets.user_icon}
          alt="user icon"
        />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="greet mx-[50px] my-0 text-[56px] text-[#c4c7c5] font-[500] p-5">
          <p className="span">
            <span className="">Hello, Dev.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">Suggest beautiful places to see on an upcoming road trip.</p>
            <img
              className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
              src={assets.compass_icon}
              alt="compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">Briefly summarize this concept: urban planning.</p>
            <img
              className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
              src={assets.bulb_icon}
              alt="compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">Brainstorm team bonding activities for our work retreat.</p>
            <img
              className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
              src={assets.message_icon}
              alt="compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">Improve the readability of the following code.</p>
            <img
              className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
              src={assets.code_icon}
              alt="compass icon"
            />
          </div>
        </div>
        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-5 m-auto">
            <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] px-3 py-5 rounded-[50px]">
                <input type="text" placeholder="Enter a prompt here" className="flex-1 bg-transparent border-none outline-none p-2 text-[18px]" />
                <div className="flex items-center gap-4">
                    <img className="w-6 cursor-pointer" src={assets.gallery_icon} alt="" />
                    <img className="w-6 cursor-pointer" src={assets.mic_icon} alt="" />
                    <img className="w-6 cursor-pointer" src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info text-[13px] my-3 text-center font-[300]">Gemini may display incorrect information, including information about people, so be sure to confirm your answers.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
