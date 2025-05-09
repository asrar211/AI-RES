import type { ResumeData } from "../../types/types";

export const Template2: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
      <div className="bg-white shadow-lg p-8 max-w-3xl mx-auto rounded-md text-gray-800">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{data.name}</h1>
        <p className="text-sm">{data.email} | {data.phone}</p>
        <hr className="my-4" />
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-500">Job Description</h2>
          <p>{data.jobDescription}</p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-500">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-500">Experience</h2>
          <ul className="list-disc list-inside">
            {data.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-500">Education</h2>
          <ul className="list-disc list-inside">
            {data.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-blue-500">Projects</h2>
          <ul className="list-disc list-inside">
            {data.projects.map((proj, index) => (
              <li key={index}>{proj}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  };