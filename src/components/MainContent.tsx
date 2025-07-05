import React from 'react';
import { BookOpen, Download, ExternalLink, GraduationCap } from 'lucide-react';
import { Semester } from '../types';

interface MainContentProps {
  semesters: Semester[];
  activeSemester: number | null;
}

const MainContent: React.FC<MainContentProps> = ({ semesters, activeSemester }) => {
  const selectedSemester = semesters.find(s => s.id === activeSemester);

  if (!selectedSemester) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <GraduationCap size={64} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to B.Tech Notes</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Select a semester from the sidebar to access your study materials and notes.
          </p>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              💡 Tip: Use the menu button (☰) on mobile to access the navigation sidebar.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">{selectedSemester.name}</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Access all your course materials and study notes for this semester.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedSemester.subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                        {subject.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">Course Materials</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Study Notes</span>
                    <a
                      href={subject.notesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Online Resources</span>
                    <a
                      href={subject.notesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Study Tips</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">📚 Regular Study</h3>
              <p className="text-blue-700 text-sm">Review notes consistently for better retention.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">🎯 Practice Problems</h3>
              <p className="text-green-700 text-sm">Solve practice questions from each chapter.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">👥 Group Study</h3>
              <p className="text-purple-700 text-sm">Discuss concepts with classmates for clarity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FileText component for consistency
const FileText: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

export default MainContent;