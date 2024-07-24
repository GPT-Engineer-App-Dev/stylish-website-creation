import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const NewsItem = ({ title, description, date, icon }) => (
  <div className="bg-gray-900 rounded-lg p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex items-center text-gray-400">
      <img src="/placeholder.svg" alt="Author" className="w-6 h-6 rounded-full mr-2" />
      <span>{date}</span>
    </div>
  </div>
);

const News = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-white mr-2" />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</Link></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">News | Updates from the GPT Engineer team</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
        </div>

        <div className="mb-12">
          <img src="/rainbow-heart.png" alt="Colorful Heart" className="w-full max-w-2xl mx-auto" />
        </div>

        <div className="mb-12">
          <h2 className="text-sm uppercase text-gray-400 mb-2">Changelog</h2>
          <h3 className="text-2xl font-semibold mb-2">A new Lovable website and more</h3>
          <p className="text-gray-300 mb-4">A new face for Lovable, and new features for GPT Engineer.</p>
          <div className="flex items-center text-gray-400">
            <img src="/placeholder.svg" alt="Author" className="w-6 h-6 rounded-full mr-2" />
            <span>Jun 5, 2024</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NewsItem
            title="UX Revamp and more"
            description="We've completely revamped the design of the homepage and editor. More updates are on the way."
            date="Jun 5, 2024"
            icon={<div className="w-12 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>}
          />
          <NewsItem
            title="Integrate your custom backend with GPT Engineer"
            description="GPT Engineer now supports OpenAPI specification backends."
            date="Mar 26, 2024"
            icon={<div className="w-12 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-4 border-t border-gray-800">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-white mr-2" />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4">
            <li><Link to="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</Link></li>
            <li><Link to="/company" className="hover:text-gray-300">Company</Link></li>
            <li><Link to="/overview" className="hover:text-gray-300">Overview</Link></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default News;