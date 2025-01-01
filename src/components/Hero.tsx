import { Download } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import Background from './Background';
import TutorialModal from './tutorial/TutorialModal';
import '../utils/animations.css';

const HERO_BACKGROUND = 'https://i.ibb.co/C1hWb3Y/modern-smart-car-technology-intelligent-system-using-heads-up-display-hud-autonomous-self-driving-mo.jpg';

export default function Hero() {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/etraffic.apk';
    link.download = 'SLPolice-eTraffic.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
      <Background imageUrl={HERO_BACKGROUND} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-24">
        <div className="text-center">
          <Logo className="h-32 w-32 mx-auto mb-8 animate-scaleIn animate-float" />
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-slideUp animate-delay-100">
            Sri Lanka Police <span className="text-cyan-400 animate-shimmer">eTraffic</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slideUp animate-delay-200">
            Streamline your traffic-related services with our official mobile application
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animate-delay-300">
            <button 
              onClick={handleDownload}
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center hover-glow"
            >
              <Download className="mr-2 animate-pulse" /> Download App
            </button>
            <button 
              onClick={() => setIsTutorialOpen(true)}
              className="bg-white text-navy-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover-lift"
            >
              Learn More
            </button>
          </div>

          {/* Download Information */}
          <div className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slideUp animate-delay-400">
            <p className="text-gray-200 leading-relaxed">
              After downloading this eTraffic Mobile App and installing it on your Mobile Phone, you can sign in through your Google Account and use the Sri Lanka Police eTraffic Mobile App. Please note that this is an effort we have made for your own safety. 
            </p>
            <p>Thank you!</p>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
          </div>
        </div>
      </div>

      <TutorialModal 
        isOpen={isTutorialOpen} 
        onClose={() => setIsTutorialOpen(false)} 
      />
    </div>
  );
}