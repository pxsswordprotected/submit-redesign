import "./App.css";
import JobPostingClone from "./JobPostingClone";
import JobPostingAfter from "./JobPostingAfter";
import Arrow10 from "./Arrow10";
function App() {
  return (
    <>
      <div className="flex">
        <div className="relative w-1/2">
          <span className="absolute top-2 left-2 z-10 text-xs text-gray-400 font-medium px-2 py-1">
            Before (not a perfect 1:1 copy)
          </span>
          <div className="absolute bottom-[44px] right-[calc(50%+100px)] z-10 pointer-events-none flex items-start gap-1">
            <span
              className="text-gray-400 text-xl"
              style={{
                fontFamily: "'Indie Flower', cursive",
                transform: "rotate(-8deg)",
              }}
            >
              before
            </span>
            <Arrow10
              className="text-gray-400"
              style={{ transform: "rotate(260deg)", width: 28, height: "auto" }}
            />
          </div>
          <JobPostingClone />
        </div>
        <div className="w-px bg-gray-200 shrink-0" />
        <div className="relative w-1/2">
          <span className="absolute top-2 left-2 z-10 text-xs text-gray-400 font-medium px-2 py-1">
            After
          </span>
          <div className="absolute bottom-[44px] left-[calc(50%+100px)] z-10 pointer-events-none flex items-start gap-1">
            <Arrow10
              className="text-gray-400"
              style={{
                transform: "scaleX(-1) rotate(260deg)",
                width: 28,
                height: "auto",
              }}
            />
            <span
              className="text-gray-400 text-xl"
              style={{
                fontFamily: "'Indie Flower', cursive",
                transform: "rotate(8deg)",
              }}
            >
              after
            </span>
          </div>
          <JobPostingAfter />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="mx-auto px-8 py-8 font-geist text-[13px] md:text-sm flex gap-32">
        <div className="flex-1 space-y-3">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
            What I noticed
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The original button works, but it doesn't feel like anything happens
            when you click it. A tooltip pops in with no transition & almost
            covers the line of text above it, the button grays out and goes dead
            for 2 seconds, and the text never changes. For a studio that values
            craft, this feels like a small missed opportunity.
          </p>
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
            What I changed
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The button now scales down slightly on click with a spring
            animation, so it actually feels like you're pressing something.
            Instead of a floating tooltip, the label crossfades from 'Copy
            Email' to 'Copied' inside the button itself, with a soft blur
            between states. The mail icon swaps to a checkmark to reinforce that
            the action went through. You can click it again at any time, there's
            no disabled state, and every click replays the animation so there's
            always clear feedback. In code, re-clicking resets the timeout, and
            the whole thing respects the user's reduced motion preferences.
          </p>
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
            The thinking behind it
          </h2>
          <p className="text-gray-600 leading-relaxed">
            When I first clicked on the copy email button, I had the intuition
            that something was off. I felt this was a good opportunity to act on
            that intuition and put into practice what I value. Now the user has
            more agency, gets proportional feedback, and the animation serves
            comprehension rather than just decoration.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
