import type { ResumeData } from "../../types/types";

export const Template1: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-sm">{data.email} | {data.phone}</p>
      
      <section className="mt-4">
        <h2 className="font-semibold">Skills</h2>
        <ul className="list-disc ml-6">{data.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">Experience</h2>
        <ul className="list-disc ml-6">{data.experience.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">Education</h2>
        <ul className="list-disc ml-6">{data.education.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">Projects</h2>
        <ul className="list-disc ml-6">{data.projects.map((p, i) => <li key={i}>{p}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">Job Description</h2>
        <p>{data.jobDescription}</p>
      </section>
    </div>
  );
};
