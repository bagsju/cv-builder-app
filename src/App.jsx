import React, { useState } from 'react';

// Default data for the CV. Changed to fit the Polish job market.
const POLISH_PRESET = {
  personal: {
    name: 'Jan Kowalski',
    title: 'Data Engineer / Analytics Consultant',
    email: 'jan.kowalski@example.pl',
    phone: '+48 500 123 456',
    location: 'Warsaw, Poland (Hybrid / Remote)',
    website: 'github.com/jankowalski-data',
    linkedin: 'linkedin.com/in/jankowalski-data',
    birthDate: '15.06.1992',
    nationality: 'Polish (EU Citizen)',
    permit: 'Right to work in Poland without restriction', 
    showPhoto: true,
    photoUrl: '' 
  },
  summary: 'Detail-oriented Data Engineer and Analytics Consultant with 4 years of experience building scalable data pipelines and business intelligence solutions. Proven ability to translate business requirements into technical architectures. Experienced with Polish and international clients, delivering projects in Agile environments. Strong focus on data quality, automation, and GDPR compliance.',
  experience: [
    {
      id: 'pl-exp-1',
      role: 'Data Engineer',
      company: 'Tech Solutions Group, Warsaw',
      period: '01.2022 - Present',
      description: '• Developed scalable ETL pipelines using Python and PySpark to process over 5TB of data daily.\n• Collaborated with BI teams to optimize data models for Power BI reporting.\n• Implemented automated CI/CD workflows reducing deployment time by 30%.'
    },
    {
      id: 'pl-exp-2',
      role: 'Junior BI Analyst',
      company: 'DataHub Polska, Krakow',
      period: '06.2019 - 12.2021',
      description: '• Created interactive dashboards in Power BI for the finance and sales departments.\n• Optimized SQL queries to speed up daily report generation by 40%.\n• Assisted in gathering technical requirements from stakeholders.'
    }
  ],
  education: [
    {
      id: 'pl-edu-1',
      degree: 'M.Sc. in Computer Science',
      school: 'Warsaw University of Technology (Politechnika Warszawska)',
      period: '2016 - 2021',
      description: 'Specialization: Data Science and Databases. Master thesis on big data optimization.'
    }
  ],
  skillsDE: [
    { id: 'sk-de-1', name: 'Python / SQL' },
    { id: 'sk-de-2', name: 'PySpark / Databricks' },
    { id: 'sk-de-3', name: 'Cloud (AWS / Azure)' },
    { id: 'sk-de-4', name: 'Airflow / ETL Tools' },
    { id: 'sk-de-5', name: 'Git / CI-CD' }
  ],
  skillsBI: [
    { id: 'sk-bi-1', name: 'Power BI / DAX' },
    { id: 'sk-bi-2', name: 'Data Modeling (Star Schema)' },
    { id: 'sk-bi-3', name: 'Tableau' },
    { id: 'sk-bi-4', name: 'dbt' }
  ],
  skillsPM: [
    { id: 'sk-pm-1', name: 'Agile / Scrum' },
    { id: 'sk-pm-2', name: 'Jira / Confluence' },
    { id: 'sk-pm-3', name: 'Requirement Gathering' }
  ],
  skillsSoft: [
    { id: 'sk-s-1', name: 'Problem Solving' },
    { id: 'sk-s-2', name: 'Team Collaboration' },
    { id: 'sk-s-3', name: 'Communication' }
  ],
  languages: [
    { id: 'lang-1', name: 'Polish (Native)' },
    { id: 'lang-2', name: 'English (B2/C1 - Advanced)' }
  ],
  certifications: [
    { id: 'cert-1', name: 'Microsoft Certified: Power BI Data Analyst Associate' },
    { id: 'cert-2', name: 'AWS Certified Cloud Practitioner' }
  ],
  references: 'References from previous managers available upon request.',
  privacy: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).'
};

export default function App() {
  const [cvData, setCvData] = useState(POLISH_PRESET);
  
  // Custom Dynamic Color State (Hex Format)
  const [customThemeColor, setCustomThemeColor] = useState('#1e293b'); // Default Slate 800
  
  const [layoutStyle, setLayoutStyle] = useState('modern'); 
  const [activeTab, setActiveTab] = useState('personal'); 

  const handlePersonalChange = (field, value) => {
    setCvData({
      ...cvData,
      personal: { ...cvData.personal, [field]: value }
    });
  };

  const handleExperienceChange = (id, field, value) => {
    const updated = cvData.experience.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setCvData({ ...cvData, experience: updated });
  };

  const addExperience = () => {
    const newItem = {
      id: `exp-${Date.now()}`,
      role: 'New Job Title',
      company: 'Company Name, City',
      period: 'MM.YYYY - Present',
      description: '• Tell us what you did here.'
    };
    setCvData({ ...cvData, experience: [...cvData.experience, newItem] });
  };

  const removeExperience = (id) => {
    setCvData({
      ...cvData,
      experience: cvData.experience.filter(item => item.id !== id)
    });
  };

  const handleEducationChange = (id, field, value) => {
    const updated = cvData.education.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setCvData({ ...cvData, education: updated });
  };

  const addEducation = () => {
    const newItem = {
      id: `edu-${Date.now()}`,
      degree: 'Degree Name',
      school: 'University, City',
      period: 'YYYY - YYYY',
      description: 'Optional details.'
    };
    setCvData({ ...cvData, education: [...cvData.education, newItem] });
  };

  const removeEducation = (id) => {
    setCvData({
      ...cvData,
      education: cvData.education.filter(item => item.id !== id)
    });
  };

  const handleListChange = (listName, id, value) => {
    const updated = cvData[listName].map(item => {
      if (item.id === id) {
        return { ...item, name: value };
      }
      return item;
    });
    setCvData({ ...cvData, [listName]: updated });
  };

  const addListItem = (listName) => {
    const newItem = {
      id: `${listName}-${Date.now()}`,
      name: 'New Item'
    };
    setCvData({ ...cvData, [listName]: [...cvData[listName], newItem] });
  };

  const removeListItem = (listName, id) => {
    setCvData({
      ...cvData,
      [listName]: cvData[listName].filter(item => item.id !== id)
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 antialiased">
      
      {/* Top Navigation Bar - Hidden when printing */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 flex flex-col xl:flex-row items-center justify-between gap-4 print:hidden shrink-0 shadow-sm z-10 animate-fade-in">
        <div className="flex items-center gap-3">
          {/* Logo dynamically colored */}
          <div className="p-2 rounded-lg text-white" style={{ backgroundColor: customThemeColor }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 2.253M12 3a9.003 9.003 0 00-8.716 2.253M12.75 12h-.75" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">IT CV Builder (Poland)</h1>
            <p className="text-xs text-slate-500">Create an ATS-friendly CV tailored for the Polish Tech Market</p>
          </div>
        </div>

        {/* User controls for theme and layout */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* Custom Color Picker Widget */}
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
            <label htmlFor="colorPicker" className="text-xs font-bold text-slate-500 px-1 cursor-pointer">Theme Color:</label>
            <div className="relative w-7 h-7 rounded-md overflow-hidden border-2 border-slate-300 shadow-sm transition-transform hover:scale-105 cursor-pointer">
              <input
                id="colorPicker"
                type="color"
                value={customThemeColor}
                onChange={(e) => setCustomThemeColor(e.target.value)}
                className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0"
              />
            </div>
            <span className="text-[10px] font-mono text-slate-400 select-all">{customThemeColor.toUpperCase()}</span>
          </div>

          {/* Layout switcher */}
          <div className="flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
            <button
              onClick={() => setLayoutStyle('modern')}
              className={`px-3 py-1 text-xs font-semibold transition-all ${layoutStyle === 'modern' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              2 Columns
            </button>
            <button
              onClick={() => setLayoutStyle('classic')}
              className={`px-3 py-1 text-xs font-semibold transition-all ${layoutStyle === 'classic' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              1 Column (ATS)
            </button>
          </div>

          {/* Print button dynamically colored */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-white px-5 py-2 rounded-lg font-bold transition-all text-sm shadow-sm hover:opacity-90 active:scale-95"
            style={{ backgroundColor: customThemeColor }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.615 0-1.11-.472-1.12-1.087L6.34 18m11.32 0T15 9m-9 9l1.5-9M5.625 12h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9h-1.5a9 9 0 00-9 9v.625c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            Save as PDF
          </button>
        </div>
      </header>

      {/* Main App Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Sidebar - Form Controls */}
        <aside className="w-full lg:w-[480px] bg-slate-800 text-slate-200 border-r border-slate-700 flex flex-col shrink-0 print:hidden overflow-y-auto">
          
          {/* Navigation Tabs - Border color dynamically colored */}
          <nav className="flex flex-wrap border-b border-slate-700 bg-slate-900 sticky top-0 z-10">
            {[
              { id: 'personal', label: 'Basic Info' },
              { id: 'summary', label: 'Profile' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'references', label: 'GDPR / Refs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-1 text-[11px] font-bold border-b-2 transition-all ${activeTab === tab.id ? 'text-white bg-slate-800' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
                style={{ borderBottomColor: activeTab === tab.id ? customThemeColor : 'transparent' }}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Form Content depending on active tab */}
          <div className="p-6 space-y-6">
            
            {/* Personal details form */}
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-md font-bold text-white mb-2">Personal Details</h3>
                
                <div className="bg-slate-700 p-3 rounded border border-slate-600 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">Show Photo on CV</span>
                    <input 
                      type="checkbox" 
                      checked={cvData.personal.showPhoto}
                      onChange={(e) => handlePersonalChange('showPhoto', e.target.checked)}
                      className="w-4 h-4 text-indigo-600 bg-slate-800 border-slate-600 rounded"
                    />
                  </div>
                  {cvData.personal.showPhoto && (
                    <div>
                      <label className="block text-[10px] text-slate-400 font-semibold mb-1">Image URL</label>
                      <input
                        type="text"
                        value={cvData.personal.photoUrl}
                        onChange={(e) => handlePersonalChange('photoUrl', e.target.value)}
                        placeholder="Paste image link here"
                        className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    value={cvData.personal.name}
                    onChange={(e) => handlePersonalChange('name', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">Job Title</label>
                  <input
                    type="text"
                    value={cvData.personal.title}
                    onChange={(e) => handlePersonalChange('title', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-900 p-3 rounded border border-slate-700">
                  <div>
                    <label className="block text-xs text-amber-400 font-bold mb-1">Date of Birth</label>
                    <input
                      type="text"
                      value={cvData.personal.birthDate || ''}
                      onChange={(e) => handlePersonalChange('birthDate', e.target.value)}
                      placeholder="DD.MM.YYYY"
                      className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-white focus:outline-none text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-amber-400 font-bold mb-1">Nationality</label>
                    <input
                      type="text"
                      value={cvData.personal.nationality || ''}
                      onChange={(e) => handlePersonalChange('nationality', e.target.value)}
                      placeholder="e.g. Polish"
                      className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-white focus:outline-none text-xs font-semibold"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs text-amber-400 font-bold mb-1">Work Permit Status</label>
                    <input
                      type="text"
                      value={cvData.personal.permit || ''}
                      onChange={(e) => handlePersonalChange('permit', e.target.value)}
                      placeholder="e.g. Right to work in EU"
                      className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-white focus:outline-none text-xs font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      value={cvData.personal.email}
                      onChange={(e) => handlePersonalChange('email', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold mb-1">Phone</label>
                    <input
                      type="text"
                      value={cvData.personal.phone}
                      onChange={(e) => handlePersonalChange('phone', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">Location</label>
                  <input
                    type="text"
                    value={cvData.personal.location}
                    onChange={(e) => handlePersonalChange('location', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">GitHub / Website</label>
                  <input
                    type="text"
                    value={cvData.personal.website}
                    onChange={(e) => handlePersonalChange('website', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">LinkedIn Profile</label>
                  <input
                    type="text"
                    value={cvData.personal.linkedin}
                    onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm"
                  />
                </div>
              </div>
            )}

            {/* Profile summary form */}
            {activeTab === 'summary' && (
              <div className="space-y-4">
                <h3 className="text-md font-bold text-white mb-2">Professional Summary</h3>
                <p className="text-xs text-slate-400">Write a short paragraph about your experience and goals.</p>
                <div>
                  <textarea
                    rows={8}
                    value={cvData.summary}
                    onChange={(e) => setCvData({ ...cvData, summary: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none text-sm resize-y font-mono"
                  />
                </div>
              </div>
            )}

            {/* Experience form */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-bold text-white">Work Experience</h3>
                  <button
                    onClick={addExperience}
                    className="flex items-center gap-1 text-xs px-3 py-1.5 rounded text-white font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: customThemeColor }}
                  >
                    + Add Job
                  </button>
                </div>
                
                <div className="space-y-4">
                  {cvData.experience.map((exp, idx) => (
                    <div key={exp.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400">Job #{idx + 1}</span>
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-rose-400 hover:text-rose-300 text-xs font-bold"
                        >
                          Remove
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Job Title</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Dates</label>
                          <input
                            type="text"
                            value={exp.period}
                            onChange={(e) => handleExperienceChange(exp.id, 'period', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Description (Use bullets)</label>
                        <textarea
                          rows={6}
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs focus:outline-none font-mono resize-y"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education form */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-bold text-white">Education</h3>
                  <button
                    onClick={addEducation}
                    className="flex items-center gap-1 text-xs px-3 py-1.5 rounded text-white font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: customThemeColor }}
                  >
                    + Add School
                  </button>
                </div>

                <div className="space-y-4">
                  {cvData.education.map((edu, idx) => (
                    <div key={edu.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400">School #{idx + 1}</span>
                        <button onClick={() => removeEducation(edu.id)} className="text-rose-400 text-xs font-bold">Remove</button>
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">University</label>
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Dates</label>
                          <input
                            type="text"
                            value={edu.period}
                            onChange={(e) => handleEducationChange(edu.id, 'period', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Extra info</label>
                        <textarea
                          rows={2}
                          value={edu.description}
                          onChange={(e) => handleEducationChange(edu.id, 'description', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded px-2.5 py-1.5 text-white text-xs resize-y"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills form sections */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                
                {/* DE Skills */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-sky-400 uppercase">Data Engineering Skills</h4>
                    <button onClick={() => addListItem('skillsDE')} className="text-[10px] text-sky-300 font-bold">+ Add DE</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.skillsDE.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleListChange('skillsDE', skill.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden" 
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{skill.name}</span>
                        <button onClick={() => removeListItem('skillsDE', skill.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-700" />

                {/* BI Skills */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase">BI & Analytics Skills</h4>
                    <button onClick={() => addListItem('skillsBI')} className="text-[10px] text-emerald-300 font-bold">+ Add BI</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.skillsBI.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleListChange('skillsBI', skill.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden"
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{skill.name}</span>
                        <button onClick={() => removeListItem('skillsBI', skill.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-700" />

                {/* PM Skills */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-amber-400 uppercase">Project Management Skills</h4>
                    <button onClick={() => addListItem('skillsPM')} className="text-[10px] text-amber-300 font-bold">+ Add PM</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.skillsPM.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleListChange('skillsPM', skill.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden"
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{skill.name}</span>
                        <button onClick={() => removeListItem('skillsPM', skill.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-700" />

                {/* Soft Skills */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-purple-400 uppercase">Soft Skills</h4>
                    <button onClick={() => addListItem('skillsSoft')} className="text-[10px] text-purple-300 font-bold">+ Add Soft</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.skillsSoft.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleListChange('skillsSoft', skill.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden"
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{skill.name}</span>
                        <button onClick={() => removeListItem('skillsSoft', skill.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-700" />

                {/* Languages */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white uppercase">Languages</h4>
                    <button onClick={() => addListItem('languages')} className="text-[10px] text-indigo-300 font-bold">+ Add Language</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.languages.map((lang) => (
                      <div key={lang.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={lang.name}
                          onChange={(e) => handleListChange('languages', lang.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden"
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{lang.name}</span>
                        <button onClick={() => removeListItem('languages', lang.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-700" />

                {/* Certifications */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white uppercase">Certifications</h4>
                    <button onClick={() => addListItem('certifications')} className="text-[10px] text-indigo-300 font-bold">+ Add Cert</button>
                  </div>
                  <div className="space-y-1.5">
                    {cvData.certifications.map((cert) => (
                      <div key={cert.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => handleListChange('certifications', cert.id, e.target.value)}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-xs print:hidden"
                        />
                        <span className="hidden print:block text-slate-800 text-xs w-full">{cert.name}</span>
                        <button onClick={() => removeListItem('certifications', cert.id)} className="text-rose-400 print:hidden">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Polish GDPR & References */}
            {activeTab === 'references' && (
              <div className="space-y-4">
                <h3 className="text-md font-bold text-white mb-2">GDPR Clause & References</h3>
                <p className="text-xs text-slate-400">In Poland, you must include a GDPR (RODO) clause at the bottom of your CV.</p>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">References</label>
                  <textarea
                    rows={2}
                    value={cvData.references}
                    onChange={(e) => setCvData({ ...cvData, references: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Polish RODO / GDPR Clause</label>
                  <textarea
                    rows={8}
                    value={cvData.privacy}
                    onChange={(e) => setCvData({ ...cvData, privacy: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-xs font-mono text-justify"
                  />
                </div>
              </div>
            )}

          </div>
        </aside>

        {/* Right Area - The PDF / CV Preview */}
        <main className="flex-1 bg-slate-200 p-4 md:p-8 overflow-y-auto flex justify-center print:bg-white print:p-0 print:overflow-visible">
          
          {/* This white box represents the A4 paper */}
          <div className="w-full max-w-[800px] bg-white text-slate-800 shadow-xl rounded-none md:rounded-lg min-h-[1130px] p-10 flex flex-col justify-between print:shadow-none print:rounded-none print:w-full print:p-0 print:min-h-0 print:max-w-none print:my-0 print-full-width">
            
            <div className="space-y-6">
              
              {/* CV Header with Name and Contacts dynamically colored */}
              <div className="border-b-2 pb-6 flex flex-col sm:flex-row justify-between items-start gap-6" style={{ borderColor: customThemeColor }}>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{cvData.personal.name || 'Your Name'}</h2>
                    <p className="text-md font-bold mt-1 tracking-wide" style={{ color: customThemeColor }}>{cvData.personal.title || 'Professional Title'}</p>
                  </div>

                  {/* Demographics row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
                    {cvData.personal.birthDate && (
                      <div className="flex gap-1">
                        <span className="font-bold text-slate-500">Date of Birth:</span>
                        <span>{cvData.personal.birthDate}</span>
                      </div>
                    )}
                    {cvData.personal.nationality && (
                      <div className="flex gap-1">
                        <span className="font-bold text-slate-500">Nationality:</span>
                        <span>{cvData.personal.nationality}</span>
                      </div>
                    )}
                    {cvData.personal.permit && (
                      <div className="col-span-1 sm:col-span-2 flex gap-1">
                        <span className="font-bold text-amber-700">Work Status:</span>
                        <span className="font-semibold text-slate-800">{cvData.personal.permit}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Photo rendering logic */}
                {cvData.personal.showPhoto && (
                  <div className="shrink-0 flex justify-center mx-auto sm:mx-0">
                    <div className="w-24 h-32 border-2 border-slate-300 rounded overflow-hidden bg-slate-100 flex items-center justify-center shadow-sm relative">
                      {cvData.personal.photoUrl ? (
                        <img 
                          src={cvData.personal.photoUrl} 
                          alt={cvData.personal.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-2">
                          <svg className="w-10 h-10 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                          <span className="text-[8px] text-slate-400 block mt-1 font-semibold uppercase">Photo</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Icons Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-600 bg-slate-100 p-2.5 rounded font-medium">
                {cvData.personal.phone && (
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>{cvData.personal.phone}</span>
                  </div>
                )}
                {cvData.personal.email && (
                  <div className="flex items-center gap-1.5 min-w-0">
                    <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span className="break-all font-semibold text-slate-900">{cvData.personal.email}</span>
                  </div>
                )}
                {cvData.personal.location && (
                  <div className="flex items-center gap-1.5 col-span-2">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>{cvData.personal.location}</span>
                  </div>
                )}
                {cvData.personal.linkedin && (
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-slate-400 font-bold text-xs">in</span>
                    <span className="truncate">{cvData.personal.linkedin}</span>
                  </div>
                )}
                {cvData.personal.website && (
                  <div className="flex items-center gap-1.5 w-full"> 
                    <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    <span className="whitespace-nowrap">{cvData.personal.website}</span>
                  </div>
                )}
              </div>

              {/* Summary Block dynamically colored */}
              {cvData.summary && (
                <section className="space-y-1.5">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: customThemeColor }}>Professional Summary</h3>
                  <p className="text-slate-700 leading-relaxed text-xs text-justify">{cvData.summary}</p>
                </section>
              )}

              {/* Dynamic Layout Rendering based on user choice */}
              {layoutStyle === 'modern' ? (
                // 2-COLUMN LAYOUT
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 print:grid-cols-12">
                  
                  {/* Left Column (Exp & Edu) */}
                  <div className="md:col-span-8 space-y-6 print:col-span-8">
                    {cvData.experience.length > 0 && (
                      <section className="space-y-3">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest pb-1 border-b-2 border-slate-200" style={{ color: customThemeColor }}>Experience</h3>
                        <div className="space-y-4">
                          {cvData.experience.map((exp) => (
                            <div key={exp.id} className="space-y-1">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-slate-950 text-xs">{exp.role}</h4>
                                <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">{exp.period}</span>
                              </div>
                              <div className="text-[10px] font-bold text-slate-600 italic">{exp.company}</div>
                              {exp.description && <p className="text-[11px] text-slate-700 leading-relaxed text-justify whitespace-pre-line mt-1">{exp.description}</p>}
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {cvData.education.length > 0 && (
                      <section className="space-y-3">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest pb-1 border-b-2 border-slate-200" style={{ color: customThemeColor }}>Education</h3>
                        <div className="space-y-4">
                          {cvData.education.map((edu) => (
                            <div key={edu.id} className="space-y-1">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-slate-950 text-xs">{edu.degree}</h4>
                                <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">{edu.period}</span>
                              </div>
                              <div className="text-[10px] font-bold text-slate-600 italic">{edu.school}</div>
                              {edu.description && <p className="text-[11px] text-slate-700 leading-relaxed mt-1">{edu.description}</p>}
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>

                  {/* Right Column (Skills & Languages) */}
                  <div className="md:col-span-4 space-y-6 print:col-span-4">
                    {cvData.skillsDE.length > 0 && (
                      <section className="space-y-2">
                        <h3 className="text-[10px] font-extrabold uppercase tracking-widest pb-0.5 border-b border-slate-200 text-sky-700">Data Engineering</h3>
                        <div className="flex flex-wrap gap-1">
                          {cvData.skillsDE.map((skill) => (
                            <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                          ))}
                        </div>
                      </section>
                    )}

                    {cvData.skillsBI.length > 0 && (
                      <section className="space-y-2">
                        <h3 className="text-[10px] font-extrabold uppercase tracking-widest pb-0.5 border-b border-slate-200 text-emerald-700">BI & Analytics</h3>
                        <div className="flex flex-wrap gap-1">
                          {cvData.skillsBI.map((skill) => (
                            <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                          ))}
                        </div>
                      </section>
                    )}

                    {cvData.skillsPM.length > 0 && (
                      <section className="space-y-2">
                        <h3 className="text-[10px] font-extrabold uppercase tracking-widest pb-0.5 border-b border-slate-200 text-amber-700">Management</h3>
                        <div className="flex flex-wrap gap-1">
                          {cvData.skillsPM.map((skill) => (
                            <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                          ))}
                        </div>
                      </section>
                    )}

                    {cvData.skillsSoft.length > 0 && (
                      <section className="space-y-2">
                        <h3 className="text-[10px] font-extrabold uppercase tracking-widest pb-0.5 border-b border-slate-200" style={{ color: customThemeColor }}>Soft Skills</h3>
                        <div className="flex flex-wrap gap-1">
                          {cvData.skillsSoft.map((skill) => (
                            <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">{skill.name}</span>
                          ))}
                        </div>
                      </section>
                    )}

                    {cvData.languages.length > 0 && (
                      <section className="space-y-2">
                        <h3 className="text-[10px] font-extrabold uppercase tracking-widest pb-0.5 border-b border-slate-200" style={{ color: customThemeColor }}>Languages</h3>
                        <ul className="space-y-0.5">
                          {cvData.languages.map((lang) => (
                            <li key={lang.id} className="text-[10px] text-slate-700 flex items-center gap-1.5 font-medium leading-tight">
                              <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: customThemeColor }} />
                              <span>{lang.name}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                </div>
              ) : (
                // 1-COLUMN ATS-FRIENDLY LAYOUT
                <div className="space-y-6">
                  {cvData.experience.length > 0 && (
                    <section className="space-y-3">
                      <h3 className="text-xs font-extrabold uppercase tracking-widest pb-1 border-b-2 border-slate-200" style={{ color: customThemeColor }}>Experience</h3>
                      <div className="space-y-4">
                        {cvData.experience.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                              <h4 className="font-bold text-slate-950 text-xs">
                                {exp.role} <span className="font-normal text-slate-500">at</span> <span className="text-slate-700 italic font-bold">{exp.company}</span>
                              </h4>
                              <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">{exp.period}</span>
                            </div>
                            {exp.description && <p className="text-[11px] text-slate-700 leading-relaxed text-justify whitespace-pre-line mt-1">{exp.description}</p>}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {cvData.education.length > 0 && (
                    <section className="space-y-3">
                      <h3 className="text-xs font-extrabold uppercase tracking-widest pb-1 border-b-2 border-slate-200" style={{ color: customThemeColor }}>Education</h3>
                      <div className="space-y-4">
                        {cvData.education.map((edu) => (
                          <div key={edu.id} className="space-y-1">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                              <h4 className="font-bold text-slate-950 text-xs">
                                {edu.degree} — <span className="text-slate-600 italic font-bold">{edu.school}</span>
                              </h4>
                              <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">{edu.period}</span>
                            </div>
                            {edu.description && <p className="text-[11px] text-slate-700 leading-relaxed mt-1">{edu.description}</p>}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Horizontal skills block for 1-column layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    <div className="space-y-4">
                      {cvData.skillsDE.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="font-bold text-sky-800 text-[10px] uppercase tracking-wide">Data Engineering</h4>
                          <div className="flex flex-wrap gap-1">
                            {cvData.skillsDE.map((skill) => (
                              <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {cvData.skillsBI.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="font-bold text-emerald-800 text-[10px] uppercase tracking-wide">BI & Analytics</h4>
                          <div className="flex flex-wrap gap-1">
                            {cvData.skillsBI.map((skill) => (
                              <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {cvData.skillsPM.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="font-bold text-amber-800 text-[10px] uppercase tracking-wide">Management & Soft Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {cvData.skillsPM.concat(cvData.skillsSoft).map((skill) => (
                              <span key={skill.id} className="text-[9px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">{skill.name}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {cvData.languages.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="font-bold text-slate-900 text-[10px] uppercase tracking-wide">Languages</h4>
                          <ul className="space-y-0.5">
                            {cvData.languages.map((lang) => (
                              <li key={lang.id} className="text-[10px] text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: customThemeColor }} />
                                <span className="font-semibold">{lang.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Certifications Block */}
              {cvData.certifications.length > 0 && (
                <section className="space-y-2 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: customThemeColor }}>Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {cvData.certifications.map((cert) => (
                      <div key={cert.id} className="text-[10px] text-slate-700 flex items-start gap-1">
                        <span className="text-slate-400 shrink-0 select-none">•</span>
                        <span>{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* GDPR Footer - Crucial for Poland */}
            <footer className="mt-8 pt-4 border-t border-slate-200 space-y-3 text-justify">
              {cvData.references && (
                <div className="space-y-0.5">
                  <h4 className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">References</h4>
                  <p className="text-[9px] text-slate-600 italic">{cvData.references}</p>
                </div>
              )}

              {cvData.privacy && (
                <p className="text-[7px] text-slate-400 leading-tight">
                  {cvData.privacy}
                </p>
              )}
            </footer>

          </div>
        </main>

      </div>

      {/* CSS rules for printing to PDF */}
      <style>{`
        @media print {
          @page { size: A4; margin: 0 !important; }
          header, aside, .no-print { display: none !important; }
          body, html, #root, main, .min-h-screen, [class*="bg-slate-"] {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important; padding: 0 !important;
          }
          main { display: block !important; overflow: visible !important; }
          .print-full-width {
            padding: 15mm !important;
            min-height: 297mm !important;
            box-shadow: none !important;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}