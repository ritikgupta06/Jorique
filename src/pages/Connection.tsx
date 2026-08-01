import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  ArrowRight,
  Download,
  Star,
  QrCode,
  SquarePen,
  Gift,
  PhoneCall,
  MoreHorizontal,
  Share2,
  Check,
  BookUser,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Connection() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    setShowShareMenu(false);
  };

  const handleSaveVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:JORIQUE Home Textiles
ORG:JORIQUE
TEL;TYPE=CELL:+919919388211
TEL;TYPE=WORK:+918840196009
EMAIL:care@jorique.in
URL:https://jorique.in
NOTE:Where Comfort Meets Design - Thoughtfully crafted home textiles for a beautiful everyday.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'JORIQUE_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const linkCards = [
    {
      icon: <Globe className="w-5 h-5 text-[#2C2623]" />,
      title: 'Visit Our Website',
      subtitle: 'jorique.in',
      action: () => navigate('/'),
      external: false,
    },
    {
      icon: <Instagram className="w-5 h-5 text-[#2C2623]" />,
      title: 'Follow Us on Instagram',
      subtitle: '@thejorique',
      action: () => window.open('https://instagram.com', '_blank'),
      external: true,
    },
    {
      icon: <Facebook className="w-5 h-5 text-[#2C2623]" />,
      title: 'Like Us on Facebook',
      subtitle: 'JORIQUE',
      action: () => window.open('https://facebook.com', '_blank'),
      external: true,
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#2C2623]" />,
      title: 'Chat on WhatsApp',
      subtitle: 'Quick Support',
      action: () => window.open('https://wa.me/919919388211', '_blank'),
      external: true,
    },
    {
      icon: <Mail className="w-5 h-5 text-[#2C2623]" />,
      title: 'Email Us',
      subtitle: 'care@jorique.in',
      action: () => (window.location.href = 'mailto:care@jorique.in'),
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0EB] text-[#1C1817] selection:bg-[#C5B49D] selection:text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow relative pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Ambient Warm Lighting & Shadow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial from-[#EBE0D2]/60 via-[#F5F0EB]/30 to-transparent pointer-events-none blur-2xl -z-10" />

        {/* Floating Toast Alert for Copying Link */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1C1817] text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 border border-[#3A3331]"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Link copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Central Container matching UI mockup */}
        <div className="max-w-2xl mx-auto relative z-10">
          
          {/* Header Card / Top Info */}
          <div className="relative mb-8 text-center pt-2">
            {/* Top Right Options Menu Button */}
            <div className="absolute top-0 right-0 z-20">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-[#E5DACD] flex items-center justify-center text-[#3A3331] transition-all shadow-sm active:scale-95"
                title="Options"
                aria-label="Share Options"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>

              {/* Share Dropdown */}
              <AnimatePresence>
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E5DACD] p-1.5 text-left z-30"
                  >
                    <button
                      onClick={handleCopyLink}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#1C1817] hover:bg-[#F5F0EB] rounded-lg flex items-center gap-2.5 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-[#9E825D]" />
                      <span>Share Connection Page</span>
                    </button>
                    <button
                      onClick={handleSaveVCard}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#1C1817] hover:bg-[#F5F0EB] rounded-lg flex items-center gap-2.5 transition-colors"
                    >
                      <Download className="w-4 h-4 text-[#9E825D]" />
                      <span>Download Contact Card</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* JORIQUE Header */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif tracking-[0.2em] text-[#1C1817] font-normal uppercase mb-2 pl-4"
            >
              JORIQUE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base font-serif text-[#2C2623] italic tracking-wide mb-3"
            >
              Where Comfort Meets Design
            </motion.p>

            {/* Subtle Divider */}
            <div className="w-20 h-[1px] bg-[#C5B49D] mx-auto mb-4 opacity-80" />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xs md:text-sm text-[#6E635B] max-w-xs sm:max-w-sm mx-auto font-light leading-relaxed"
            >
              Thoughtfully crafted home textiles for a beautiful everyday.
            </motion.p>
          </div>

          {/* 5 Link Cards */}
          <div className="space-y-3 mb-6">
            {linkCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                onClick={card.action}
                className="bg-[#FAF7F3] hover:bg-white border border-[#E8DFC0]/70 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EFE6DA] group-hover:bg-[#E5D7C4] flex items-center justify-center shrink-0 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1817] group-hover:text-black transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#7A6E65] font-normal mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-1">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#A48256] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Save JORIQUE Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#FAF7F3] border border-[#E8DFC0]/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm mb-6"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#A2845E] text-white flex items-center justify-center shrink-0 shadow-inner">
                <BookUser className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1C1817]">Save JORIQUE Contact</h3>
                <p className="text-xs text-[#6E635B] font-light leading-snug mt-0.5">
                  All our contact details in one tap. Save to your phone instantly.
                </p>
              </div>
            </div>
            <button
              onClick={handleSaveVCard}
              className="bg-[#1C1817] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm active:scale-95"
            >
              <span>SAVE TO CONTACT</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Call Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-[#FAF7F3] border border-[#E8DFC0]/80 rounded-2xl p-4 sm:p-5 shadow-sm mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DACD] items-center">
              {/* Header column */}
              <div className="sm:col-span-4 flex items-center gap-3 pb-3 sm:pb-0">
                <div className="w-11 h-11 rounded-full bg-[#EFE6DA] flex items-center justify-center text-[#8C7047] shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1C1817]">Call Us</h4>
                  <p className="text-[11px] text-[#7A6E65]">We are here to help you</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="sm:col-span-8 flex flex-wrap items-center justify-around gap-3 pt-3 sm:pt-0 sm:pl-4 text-left sm:text-center">
                <a
                  href="tel:+919919388211"
                  className="text-xs sm:text-sm font-bold text-[#1C1817] hover:text-[#8C7047] transition-colors block"
                >
                  +91 99193 88211
                </a>
                <a
                  href="tel:+918840196009"
                  className="text-xs sm:text-sm font-bold text-[#1C1817] hover:text-[#8C7047] transition-colors block"
                >
                  +91 88401 96009
                </a>
                <a
                  href="https://wa.me/919026260421"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#1C1817] hover:text-[#8C7047] transition-colors block"
                >
                  +91 90262 60421
                </a>
              </div>
            </div>
          </motion.div>

          {/* Love Your Purchase Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#FAF7F3] border border-[#E8DFC0]/80 rounded-2xl p-4 sm:p-5 shadow-sm mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Left Photo */}
              <div className="sm:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square w-full shadow-sm">
                <img
                  src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JORIQUE Luxury Bedding"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-[#C09A58] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1817] mb-3">
                    Love Your Purchase?
                  </h3>

                  <ul className="space-y-2 text-xs text-[#5A4F47] font-medium mb-4">
                    <li className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#ECE3D5] flex items-center justify-center text-[#8C7047] shrink-0">
                        <QrCode className="w-3.5 h-3.5" />
                      </div>
                      <span>Scan your product QR</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#ECE3D5] flex items-center justify-center text-[#8C7047] shrink-0">
                        <SquarePen className="w-3.5 h-3.5" />
                      </div>
                      <span>Write a verified review</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#ECE3D5] flex items-center justify-center text-[#8C7047] shrink-0">
                        <Gift className="w-3.5 h-3.5" />
                      </div>
                      <span>Earn Rewards Instantly</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate('/reviews')}
                  className="w-full bg-[#1C1817] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <span>REVIEW & EARN REWARDS</span>
                  <Gift className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Icons Footer Bar */}
          <div className="border-t border-[#E5DACD] pt-6 pb-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center text-xs text-[#5C524A]">
            <Link to="/" className="flex items-center gap-1.5 hover:text-black transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#9E825D]" />
              <span>jorique.in</span>
            </Link>
            <span className="text-[#C5B49D] hidden sm:inline">|</span>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#9E825D]" />
              <span>@thejorique</span>
            </a>
            <span className="text-[#C5B49D] hidden sm:inline">|</span>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-[#9E825D]" />
              <span>JORIQUE</span>
            </a>
            <span className="text-[#C5B49D] hidden sm:inline">|</span>

            <a
              href="https://wa.me/919919388211"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#9E825D]" />
              <span>99193 88211</span>
            </a>
            <span className="text-[#C5B49D] hidden sm:inline">|</span>

            <a
              href="mailto:care@jorique.in"
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#9E825D]" />
              <span>care@jorique.in</span>
            </a>
          </div>

          {/* Bottom Legal Copyright Bar */}
          <div className="text-[11px] text-[#8C7F74] text-center pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-t border-[#E5DACD]/60 mt-2">
            <span>&copy; {new Date().getFullYear()} JORIQUE</span>
            <span className="text-[#C5B49D]">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-[#C5B49D]">|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="text-[#C5B49D]">|</span>
            <a href="#" className="hover:underline">Shipping Policy</a>
            <span className="text-[#C5B49D]">|</span>
            <a href="#" className="hover:underline">Returns Policy</a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
