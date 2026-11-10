import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import HeroSection from './components/HeroSection';
import ExamSelector from './components/ExamSelector';
import BandScoreCalculator from './components/BandScoreCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import CoursesGrid from './components/CoursesGrid';
import StudentResults from './components/StudentResults';
import FAQSection from './components/FAQSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import LeadModal from './components/LeadModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('General');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenModal = (context = 'General') => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* Top Urgency / Info Banner */}
      <TopBanner onOpenModal={handleOpenModal} />

      {/* Main Sticky Navbar */}
      <Navbar 
        onOpenModal={handleOpenModal} 
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenModal={handleOpenModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Demo Card */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 4 Quick Category Pathway Cards */}
        <ExamSelector onOpenModal={handleOpenModal} />

        {/* Interactive IELTS Band Score Calculator */}
        <BandScoreCalculator onOpenModal={handleOpenModal} />

        {/* Why Choose Us & 4-Step Blueprint */}
        <WhyChooseUs onOpenModal={handleOpenModal} />

        {/* Complete Courses Grid with Filters */}
        <CoursesGrid onOpenModal={handleOpenModal} />

        {/* Results, Band 8.5+ Scorecards & Video Stories */}
        <StudentResults onOpenModal={handleOpenModal} />

        {/* Collapsible FAQ Accordion */}
        <FAQSection onOpenModal={handleOpenModal} />

        {/* Bottom Call to Action Banner */}
        <BottomCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Full Educational Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Mobile Sticky Bar & WhatsApp Floating Widget */}
      <StickyMobileBar onOpenModal={handleOpenModal} />

      {/* ForeignPrep-Style Lead Capture & Free Demo Booking Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialContext={modalContext}
      />
    </div>
  );
}
