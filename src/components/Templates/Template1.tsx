import type { ResumeData } from "../../types/types";

export const Template1: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-10 bg-white shadow-2xl rounded-2xl border border-gray-200 text-gray-800">
      <header className="text-center border-b pb-6">
        <h1 className="text-4xl font-bold font-serif">{data.name}</h1>
        <p className="mt-2 text-sm text-gray-600">{data.email} | {data.phone}</p>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc ml-5 text-sm text-gray-700">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Experience</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {data.experience.map((exp, index) => (
            <li key={index} className="bg-gray-50 p-3 rounded-md shadow-sm border">{exp}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Education</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.education.map((edu, index) => (
            <li key={index} className="border-l-4 border-blue-300 pl-3">{edu}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Projects</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.projects.map((proj, index) => (
            <li key={index} className="hover:bg-blue-50 p-2 rounded transition">{proj}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
