import React from 'react';
import { ChevronDown, ChevronRight, FileText, Menu, X } from 'lucide-react';
import { Semester } from '../types';

interface SidebarProps {
  semesters: Semester[];
  activeSemester: number | null;
  onSemesterClick: (semesterId: number) => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  semesters,
  activeSemester,
  onSemesterClick,
  isMobileMenuOpen,
  onMobileMenuToggle,
}) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 border-r border-gray-200`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
            <h1 className="text-2xl font-bold text-white">B.Tech Notes</h1>
            <p className="text-blue-100 text-sm mt-1">Academic Resources</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {semesters.map((semester) => (
                <div key={semester.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => onSemesterClick(semester.id)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                      activeSemester === semester.id
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{semester.name}</span>
                    {activeSemester === semester.id ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>

                  {activeSemester === semester.id && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      {semester.subjects.map((subject) => (
                        <div
                          key={subject.id}
                          className="px-6 py-3 flex items-center justify-between hover:bg-white transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText size={16} className="text-gray-500" />
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <a
                            href={subject.notesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                          >
                            Notes
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              © 2025 B.Tech Notes Portal
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onMobileMenuToggle}
        />
      )}
    </>
  );
};

export default Sidebar;