'use client';
import { useState } from 'react';
import Link from 'next/link';

const medicalTerms = [
  'Prophylactic', 'Lesions', 'Exaggerated', 'Eukaryotic', 'Prokaryotic',
  'Self-luminous', 'Plotted', 'Microaerophilic', 'Capnophilic', 'Mesophiles',
  'Psychrophiles', 'Inspissation', 'Tyndallisation', 'Germinate', 'Ketogenesis',
  'Hyperbilirubinemia', 'Apolipoproteins', 'Centrifugation', 'Reagent blank', 'Calibration',
  'Nephelometry', 'Spectrophotometer', 'Hypercholesterolemia', 'Ubiquinone', 'Pyramidines',
  'Denaturation', 'Sphingomyelin', 'Tryptophan', 'Phenylalanine', 'Hypertrophy',
  'Hyperplasia', 'Gangrene', 'Chemotaxis', 'Lymphadenopathy', 'Phagocytosis',
  'Hemoglobinopathies', 'Spherocytosis', 'Thalassemia', 'Hematocrit', 'Arteriosclerosis',
  'Cardiomyopathy', 'Cirrhosis', 'Adenocarcinoma', 'Papilloma'
];

export default function Learn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [practiced, setPracticed] = useState(new Set());

  const currentTerm = medicalTerms[currentIndex];

  const handlePronounce = (term) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(term);
      utterance.rate = 0.7;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);

      setPracticed(prev => new Set([...prev, term]));
    } else {
      alert('Speech synthesis not supported in your browser');
    }
  };

  const handleNext = () => {
    if (currentIndex < medicalTerms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTermClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AuraPronounce - Learn
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">Practice {medicalTerms.length} essential medical terms</p>
            </div>
            <Link
              href="/"
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Search Mode
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-purple-600">
                    {currentIndex + 1} / {medicalTerms.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / medicalTerms.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Term Display */}
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  Term {currentIndex + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 break-words px-2">{currentTerm}</h2>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handlePronounce(currentTerm)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                    Listen
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <div className="text-sm text-gray-600">
                  {practiced.size} terms practiced
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === medicalTerms.length - 1}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Term List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                All Terms
              </h3>
              <div className="space-y-1 max-h-[600px] overflow-y-auto pr-2">
                {medicalTerms.map((term, index) => (
                  <button
                    key={term}
                    onClick={() => handleTermClick(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium'
                        : practiced.has(term)
                        ? 'bg-green-50 text-gray-700 hover:bg-green-100'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{term}</span>
                      {practiced.has(term) && index !== currentIndex && (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{medicalTerms.length}</p>
                <p className="text-sm text-gray-600">Total Terms</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{practiced.size}</p>
                <p className="text-sm text-gray-600">Practiced</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{Math.round((practiced.size / medicalTerms.length) * 100)}%</p>
                <p className="text-sm text-gray-600">Completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
