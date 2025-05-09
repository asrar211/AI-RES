import { useState } from "react";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: string[];
  education: string[];
  projects: string[];
  jobDescription: string;
};

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    skills: [],
    experience: [],
    education: [],
    projects: [],
    jobDescription: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommaSeparatedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ResumeData
  ) => {
    const value = e.target.value.split(",").map(item => item.trim());
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md max-w-xl mx-auto">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Skills (comma-separated)</label>
        <input
          type="text"
          name="skills"
          value={data.skills.join(", ")}
          onChange={(e) => handleCommaSeparatedChange(e, "skills")}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Experience (comma-separated)</label>
        <input
          type="text"
          name="experience"
          value={data.experience.join(", ")}
          onChange={(e) => handleCommaSeparatedChange(e, "experience")}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Education (comma-separated)</label>
        <input
          type="text"
          name="education"
          value={data.education.join(", ")}
          onChange={(e) => handleCommaSeparatedChange(e, "education")}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Projects (comma-separated)</label>
        <input
          type="text"
          name="projects"
          value={data.projects.join(", ")}
          onChange={(e) => handleCommaSeparatedChange(e, "projects")}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Job Description</label>
        <input
          type="text"
          name="jobDescription"
          value={data.jobDescription}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};
