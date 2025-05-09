import type { ResumeData } from "../types/types";

interface TemplateSelectorProps {
    selected: number;
    setSelected: (val: number) => void;
    resumeData: ResumeData;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selected, setSelected }) => {
    return (
      <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 text-center">Choose a Template</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        <div
          onClick={() => setSelected(1)}
          className={`border-2 rounded-md p-2 cursor-pointer transition ${
            selected === 1 ? "border-blue-500 shadow-lg" : "border-gray-300"
          }`}
        >
          <div className="scale-75 transform origin-top-left pointer-events-none">
          </div>
          <p className="text-center mt-2 font-medium">Template 1</p>
        </div>

        <div
          onClick={() => setSelected(2)}
          className={`border-2 rounded-md p-2 cursor-pointer transition ${
            selected === 2 ? "border-blue-500 shadow-lg" : "border-gray-300"
          }`}
        >
          <div className="scale-75 transform origin-top-left pointer-events-none">
          </div>
          <p className="text-center mt-2 font-medium">Template 2</p>
        </div>
      </div>
    </div>
    )
}