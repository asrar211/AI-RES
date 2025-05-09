import { Template1 } from '../components/Templates/Template1';
import { Template2 } from '../components/Templates/Template2';
import { ResumeForm } from '../components/ResumeForm';
import { TemplateSelector } from '../components/TemplateSelector';
import { LoadingScreen } from '../components/Loading';
import { useResume } from '../hooks/useResume';
import { ResumePrint } from '../components/ResumePrint';
import type { ResumeData } from '../types/types';

export const enhanceResume = async (data: ResumeData): Promise<ResumeData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ...data,
        skills: [...data.skills, "Problem Solving", "Time Management"],
        experience: data.experience.map(exp => `Enhanced: ${exp}`),
      });
    }, 1500);
  });
};


export const CreateResume = () => {
    const {
        resumeData,
        setResumeData,
        selectedTemplate,
        loading,
        setLoading,
        showResume,
        setShowResume,
        setSelectedTemplate
      } = useResume();
    
      const handleFormSubmit = async (data: typeof resumeData) => {
        setLoading(true);
        try {
          const enhanced = await enhanceResume(data);
          setResumeData(enhanced);
          setShowResume(true);
        } catch (err) {
          console.error("Error enhancing resume:", err);
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="min-h-screen bg-gray-100 p-4">
      {!showResume ? (
        <>
          <TemplateSelector 
            selected={selectedTemplate} 
            setSelected={setSelectedTemplate} 
            resumeData={resumeData}
          />
          <ResumeForm onSubmit={handleFormSubmit} />
        </>
      ) : loading ? (
        <LoadingScreen />
      ) : (
        <div>
          {selectedTemplate === 1 ? (
            <Template1 data={resumeData} />
          ) : selectedTemplate === 2 ? (
            <Template2 data={resumeData} />
          ) : (
            <div>Select a Template First</div>
          )}

            <ResumePrint
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      )}
    </div>
      )
}