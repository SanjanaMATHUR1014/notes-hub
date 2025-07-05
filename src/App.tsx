import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { semesters } from './data/semesters';

function App() {
  const [activeSemester, setActiveSemester] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSemesterClick = (semesterId: number) => {
    setActiveSemester(activeSemester === semesterId ? null : semesterId);
    // Close mobile menu when semester is selected
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        semesters={semesters}
        activeSemester={activeSemester}
        onSemesterClick={handleSemesterClick}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      
      <main className="flex-1 lg:ml-0 overflow-y-auto">
        <MainContent semesters={semesters} activeSemester={activeSemester} />
      </main>
    </div>
  );
}

export default App;