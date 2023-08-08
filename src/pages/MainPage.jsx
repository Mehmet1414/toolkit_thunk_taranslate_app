import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getLanguages } from "../redux/Actions";
import Select from "react-select";

const MainPage = () => {
  const sourceRef = useRef();
  const targetRef = useRef();
  const dispacth = useDispatch();
  const [text, setText] = useState("");
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const state = useSelector((store) => store.translateState);

  //console.log(state);
  // sayfa yüklendigi andda api'dden ddidl verileirni ceker
  useEffect(() => {
    dispacth(getLanguages());
  }, []);

  const handleClick = () => {
    //  getAnswer fonk. text'i parametre olarak gönderir.
    //(her fonk. icindeki degiskeni parametre olarak tasir)
    dispacth(getAnswer({ text, source, target }));
  };

  return (
    <>
      <div className=" container m-auto mt-40 text-slate-200 uppercase max-w-3xl max-md:max-w-xl max-sm:max-w-md px-4 text-2xl font-semibold items-center">
        <span className=" pr-2 ">translate</span>
        <span className=" animate-ping text-amber-300 font-bold justify-center text-3xl">
          +
        </span>
      </div>
      <main className=" bg-amber-500 container max-w-3xl max-md:flex-wrap max-md:max-w-xl max-sm:max-w-md m-auto mt-6 flex flex-col justify-center items-center p-5 pb-10 rounded-lg ">
        <div className="relative  flex justify-center items-center gap-10 w-full max-md:gap-1 max-md:flex-wrap max-md:max-w-xl max-sm:max-w-md">
          <section className=" flex-1 flex flex-col ">
            <div className=" flex items-center gap-3 text-zinc-600 ml-3">
              <button
                onClick={() => setSource(state.languages[97])}
                className=" focus:bg-amber-300/20 focus:border-b cursor-pointer hover:bg-amber-300/20 py-4 px-1 "
              >
                Türkce
              </button>
              <button
                onClick={() => setSource(state.languages[21])}
                className=" focus:bg-amber-300/20 focus:border-b cursor-pointer hover:bg-amber-300/20 py-4 px-1 "
              >
                English
              </button>

              <Select
                className=""
                onChange={(e) => setSource(e)}
                options={state.languages}
                value={source}
              />
            </div>
            <textarea
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="w-full bg-slate-100/30 text-zinc-600 px-3 py-2 border-none focus:outline-none rounded-lg"
              type="text"
              cols="10"
              rows="10"
              ref={sourceRef}
            ></textarea>
          </section>

          <button
            className=" absolute top-16 max-md:relative max-md:top-0 max-md:left-[-50px] max-md:w-96 max-sm:left-0 text-start items-start hover:text-zinc-600 text-sm font-bold text-slate-200 px-2 transition-all rounded-md"
            onClick={handleClick}
          >
            {">>"}
          </button>
          <section className=" flex-1 flex flex-col">
            <div className=" flex items-center gap-3 text-zinc-600 ml-3">
              <button
                onClick={() => setTarget(state.languages[97])}
                className=" focus:bg-amber-300/20 focus:border-b cursor-pointer hover:bg-amber-300/20 py-4 px-1 "
              >
                Türkce
              </button>
              <button
                onClick={() => setTarget(state.languages[21])}
                className=" focus:bg-amber-300/20 focus:border-b cursor-pointer hover:bg-amber-300/20 py-4 px-1 "
              >
                English
              </button>

              <Select
                onChange={(e) => setTarget(e)}
                className=" "
                options={state.languages}
                value={target}
              />
            </div>
            <textarea
              className="w-full bg-slate-100/30 text-zinc-600 px-3 py-2 border-none rounded-lg"
              type="text"
              cols="10"
              rows="10"
              value={state.answer}
              disabled
              ref={targetRef}
            ></textarea>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
