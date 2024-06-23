import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import PersonalDetail from "./forms/PersonalDetail";
import { useState } from "react";
import Summery from "./forms/Summery";

function FormSection({ postId }) {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <button className="flex gap-2 rounded-lg bg-gray-200 px-4 py-3">
          <LayoutGrid />
          Theme
        </button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <button
              className="flex gap-2 rounded-lg bg-blue-500 px-4 py-3 text-white"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
              Prev
            </button>
          )}
          <button
            disabled={!enableNext}
            className="flex gap-2 rounded-lg bg-blue-500 px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            <ArrowRight />
            Next
          </button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} postId={postId} />
      ) : activeFormIndex == 2 ? (
        <Summery />
      ) : null}
    </div>
  );
}

export default FormSection;
