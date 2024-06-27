import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./style.css";
import { Context } from "../../Context/Context";
import { BiUserCircle } from "react-icons/bi";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

   // Handle theme change
   const handleThemeChange = (e) => {
    const isChecked = e.target.checked;
    setTheme(isChecked ? "dark" : "light");
  };

  const getThemeColors = () => {
    switch (theme) {
      case "light":
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-cyan-500",
          text: "text-gray-800",
        };
      case "dark":
        return {
          primary: "bg-gray-900",
          secondary: "bg-gray-800",
          accent: "bg-cyan-500",
          text: "text-gray-100",
        };
      default:
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-cyan-500",
          text: "text-gray-800",
        };
    }
  };

  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative overflow-x-hidden">
      <div className="nav flex items-center justify-start gap-4 text-2xl p-5 text-[#585858]">
      <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="35" height="35" />
        <p className="font-bold">Codex AI</p>
      </div>
      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet mx-[50px] my-0 text-[56px] text-[#c4c7c5] font-[500] p-5">
              <p className="span">
                <span className="text-xl md:text-4xl">Hello, Dev.</span>
              </p>
              <p className="text-xl md:text-4xl">How can i help you today?</p>
            </div>
            <div className="mb-16 md:mb-0 cards">
              <div
                onClick={() =>
                  setInput(
                    "Suggest beautiful places to see on an upcoming road trip"
                  )
                }
                className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
              >
                <p className="text-[#585858] text-[17px]">
                  Suggest beautiful places to see on an upcoming road trip.
                </p>
                <img
                  className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
                  src={assets.compass_icon}
                  alt="compass icon"
                />
              </div>
              <div
                onClick={() =>
                  setInput("Briefly summarize this concept: urban planning")
                }
                className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
              >
                <p className="text-[#585858] text-[17px]">
                  Briefly summarize this concept: urban planning.
                </p>
                <img
                  className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
                  src={assets.bulb_icon}
                  alt="compass icon"
                />
              </div>
              <div
                onClick={() =>
                  setInput(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
                className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
              >
                <p className="text-[#585858] text-[17px]">
                  Brainstorm team bonding activities for our work retreat.
                </p>
                <img
                  className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
                  src={assets.message_icon}
                  alt="compass icon"
                />
              </div>
              <div
                onClick={() =>
                  setInput("Improve the readability of the following code")
                }
                className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
              >
                <p className="text-[#585858] text-[17px]">
                  Improve the readability of the following code.
                </p>
                <img
                  className="w-9 p-1 absolute bg-[#fff] rounded-[20px] bottom-3 right-3"
                  src={assets.code_icon}
                  alt="compass icon"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="px-4 max-h-[70vh] overflow-y-scroll result">
            <div className="flex items-center gap-5 my-10 result-title bg-[#edf1f6] p-2 rounded-lg">
              <BiUserCircle className="text-3xl fill-sky-500"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5 p-2 rounded-lg result-data">
              <img className="w-10" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[17px] font-light leading-7"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] min-w-[300px] py-5 px-2 m-auto mt-4">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] px-3 py-2 rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-0 w-[150px] md:w-full md:flex-1 bg-transparent border-none outline-none p-2 md:text-[18px] text-sm"
            />
            <div className="flex items-center">
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="w-5 cursor-pointer hover:scale-105"
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-[13px] my-3 text-center font-[300]">
            Codex AI may display incorrect information, including information
            about people, so be sure to confirm your answers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
