import React, { createContext, useState } from 'react';
import type { ResumeData } from '../types/types';

interface ResumeContextType {
    resumeData: ResumeData;
    setResumeData: (data: ResumeData) => void;
    selectedTemplate: number;
    setSelectedTemplate: (n: number) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    showResume: boolean;
    setShowResume: (value: boolean) => void;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [resumeData, setResumeData] = useState<ResumeData>({
        name: '',
        email: '',
        phone: '',
        skills: [],
        experience: [],
        education: [],
        projects: [],
        jobDescription: ""
    });

    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showResume, setShowResume] = useState(false);

    return (
        <ResumeContext.Provider value={{
            resumeData,
            setResumeData,
            selectedTemplate,
            setSelectedTemplate,
            loading,
            setLoading,
            showResume,
            setShowResume
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

