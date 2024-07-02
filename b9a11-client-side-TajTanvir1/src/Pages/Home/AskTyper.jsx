import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AskTyper = () => {
  return (
    <div className="text-center text-3xl mx-auto">
      <h1 className="text-white font-bold">We are very happy to have you as a guest.</h1>
      <h1 className="my-4 text-white text-center font-bold">
        <span className="text-orange-400 font-bold">
          <Typewriter
            words={[
              "Have You Any Queries?",
              "Are You Tens about that?",
              "Log in and Add your Queries!",
              "And Get best Recommendations now!",
            ]}
            loop={20}
            cursor
            cursorStyle="_|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
            onLoopDone={() => console.log(`Done after 20 loops!`)}
          />
        </span>
      </h1>
      <Link to="/login">
                  <button className="btn btn-sm md:btn-wide btn-accent mt-2">
                    <span className="lg:text-xl">Click to Login</span>
                  </button>
                </Link>
    </div>
  );
};

export default AskTyper;
