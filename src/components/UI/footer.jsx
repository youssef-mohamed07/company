import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

export default function Footer() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        { href: 'javascript:void()', name: 'Contact' },
        { href: 'javascript:void()', name: 'Support' },
        { href: 'javascript:void()', name: 'Documentation' },
        { href: 'javascript:void()', name: 'Pricing' },
      ],
    },
    {
      label: "About",
      items: [
        { href: 'javascript:void()', name: 'Terms' },
        { href: 'javascript:void()', name: 'License' },
        { href: 'javascript:void()', name: 'Privacy' },
        { href: 'javascript:void()', name: 'About Us' },
      ],
    },
    {
      label: "Explore",
      items: [
        { href: 'javascript:void()', name: 'Showcase' },
        { href: 'javascript:void()', name: 'Roadmap' },
        { href: 'javascript:void()', name: 'Languages' },
        { href: 'javascript:void()', name: 'Blog' },
      ],
    },
    {
      label: "Company",
      items: [
        { href: 'javascript:void()', name: 'Partners' },
        { href: 'javascript:void()', name: 'Team' },
        { href: 'javascript:void()', name: 'Careers' },
      ],
    },
  ];

  return (
    <footer className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-lg">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">
              Get our beautiful newsletter straight to your inbox.
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3">
              <div className="relative w-full">
                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-600 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center mt-6 md:mt-0">
            {footerNavs.map((item, idx) => (
              <div className="space-y-6 mx-4" key={idx}>
                <h4 className="text-gray-800 text-lg font-semibold">{item.label}</h4>
                <ul className="space-y-4">
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <a href={el.href} className="text-gray-600 hover:text-yellow-600 transition duration-150">{el.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">&copy; 2022 Float UI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-6 sm:mt-0 text-gray-500">
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <FaFacebook size={24} />
            </a>
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <FaTwitter size={24} />
            </a>
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <FaInstagram size={24} />
            </a>
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <FaLinkedin size={24} />
            </a>
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <FaGithub size={24} />
            </a>
            <a href="javascript:void()" className="hover:text-gray-700 transition duration-150">
              <SiTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
