import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram, FaServicestack, FaChartBar, FaComment, FaPhone, FaSignInAlt, FaUserPlus, FaGlobe } from 'react-icons/fa';

const navigation = [
    { title: "Projects", path: "#projects", icon: <FaProjectDiagram /> },
    { title: "Services", path: "#services", icon: <FaServicestack /> },
    { title: "Statistics", path: "#statistics", icon: <FaChartBar /> },
    { title: "Testimonials", path: "#testimonials", icon: <FaComment /> },
    { title: "Contact", path: "#contact", icon: <FaPhone /> }
];

export default function Header() {
    const [state, setState] = useState(false);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".nav-menu") && !e.target.closest(".nav-toggle")) {
                setState(false);
            }
        };

        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-20 bg-white w-full shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="flex-shrink-0">
                            <img
                                src="logo.png"
                                width={80}
                                height={45}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.path}
                                    className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <a href="/login" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-500 mr-2">
                                <FaSignInAlt className="inline-block mr-1" /> Log in
                            </a>
                            <a href="/signup" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 mr-2">
                                <FaUserPlus className="inline-block mr-1" /> Sign up
                            </a>
                            <button onClick={toggleLanguage} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200">
                                <FaGlobe className="inline-block mr-1" /> {language === 'en' ? 'AR' : 'EN'}
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button 
                            className="nav-toggle text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {state && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.path}
                                    className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            ))}
                            <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-yellow-600 hover:bg-yellow-500">
                                <FaSignInAlt className="inline-block mr-1" /> Log in
                            </a>
                            <a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 border border-gray-200">
                                <FaUserPlus className="inline-block mr-1" /> Sign up
                            </a>
                            <button onClick={toggleLanguage} className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 border border-gray-200">
                                <FaGlobe className="inline-block mr-1" /> {language === 'en' ? 'AR' : 'EN'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
