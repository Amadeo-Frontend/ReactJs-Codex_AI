import { useContext } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import "./style.css";
import { Context } from "../../Context/Context";
import {
  IoPersonCircleSharp,
  IoSendOutline,
  IoBulbOutline,
  IoChatbubbleEllipsesOutline,
  IoCodeSlashOutline,
  IoCompassOutline,
} from "react-icons/io5";
import CircleLoader from "react-spinners/CircleLoader";
import Reveal from "../Reveal";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="main flex-1 bg-[#fff8f8]  h-screen pb-[15vh] relative overflow-x-hidden overflow-y-hidden"
    >
      <div className="nav flex items-center gap-4 text-2xl p-5 text-[#585858]">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
          alt="Robot"
          width="35"
          height="35"
        />
        <p className="font-bold title">Codexal AI</p>
      </div>
      <div className="main-container max-w-[900px] lg:mt-10 m-auto">
        {!showResult ? (
          <>
            <div className="greet mx-[50px] my-24 md:my-0 text-[56px] text-[#c4c7c5] font-[500] p-5">
              <p className="span">
                <span className="text-3xl md:text-4xl">
                  Hello, I&apos;m Codexal AI
                </span>
              </p>
              <p className="text-3xl md:text-4xl">How can i help you today?</p>
            </div>
            <div className="mb-16 md:mb-0 cards">
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "What are some specific locations or landmarks that you would recommend for this road trip?"
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
                >
                  <p className="text-[#585858] text-[17px]">
                    What are some specific locations or landmarks that you would
                    recommend for this road trip?
                  </p>
                  <IoCompassOutline className="absolute p-1 text-4xl bottom-3 right-3" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "Briefly summarize this concept: software development."
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
                >
                  <p className="text-[#585858] text-[17px]">
                    Briefly summarize this concept: software development.
                  </p>
                  <IoBulbOutline className="absolute p-1 text-4xl bottom-3 right-3" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "Brainstorm Scrum-themed team bonding activities for our Agile work retreat."
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
                >
                  <p className="text-[#585858] text-[17px]">
                    Brainstorm Scrum-themed team bonding activities for our
                    Agile work retreat.
                  </p>
                  <IoChatbubbleEllipsesOutline className="absolute p-1 text-4xl bottom-3 right-3" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "How does React compare to other popular frontend frameworks?"
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]"
                >
                  <p className="text-[#585858] text-[17px]">
                    How does React compare to other popular frontend frameworks?
                  </p>
                  <IoCodeSlashOutline className="absolute p-1 text-4xl bottom-3 right-3" />
                </div>
              </Reveal>
            </div>
          </>
        ) : (
          <div className="px-4 mx-2 max-h-[60vh] rounded-lg max-w-[850px] pb-[5vh] overflow-y-scroll shadow-sm result">
            <div className="flex items-center gap-5 p-2 my-5 rounded-lg bg-[#e9e9e9] result-title">
              <IoPersonCircleSharp className="text-3xl fill-sky-500" />
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent(input);
                }
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-0 w-[150px] md:w-full md:flex-1 bg-transparent border-none outline-none p-2 md:text-[18px] text-sm"
            />
            <div className="flex items-center">
              {input ? (
                loading ? (
                  <CircleLoader size={25} color="#0EA5E9" />
                ) : (
                  <IoSendOutline
                    className="w-6 cursor-pointer fill-blue-600 hover:scale-105"
                    onClick={() => onSent(input)}
                  />
                )
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-[13px] my-3 text-center font-[300]">
            Codexal AI may display incorrect information, including information
            about people, so be sure to confirm your answers.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
