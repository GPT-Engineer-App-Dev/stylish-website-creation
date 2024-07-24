import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start the animation after a short delay
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className={`h-6 w-6 text-white mr-2 ${isAnimated ? 'animate-rainbow-pulse' : ''}`} />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <Heart className={`h-32 w-32 text-yellow-500 mb-8 ${isAnimated ? 'animate-rainbow-pulse' : ''}`} />
        <h1 className="text-5xl font-bold mb-4">The last piece of software.</h1>
        <p className="text-xl mb-8 max-w-2xl">
          We're building software that builds software. Our <Link to="/vision" className="underline">vision</Link> is to unlock
          human creativity — by enabling anyone to create software.
        </p>
        <div className="mb-12">
          <img src="/placeholder.svg" alt="GPT Engineer" className="h-8 w-8 mx-auto mb-4" />
          <p className="text-2xl font-semibold">It starts with an AI software engineer.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full">
          {[
            { title: "For Everyone", description: "Chat with AI to build and deploy web apps, with no technical knowledge needed." },
            { title: "For Developers", description: "Collaborate in chat and code with an AI engineer, to build at lightning speed." },
            { title: "For Agencies", description: "Partner with AI to streamline web app creation, iteration, and support." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
              <Button variant="link" className="mt-4">
                Learn more <span className="ml-2">→</span>
              </Button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-4 border-t border-gray-800">
        <div className="flex items-center">
          <Heart className={`h-6 w-6 text-white mr-2 ${isAnimated ? 'animate-rainbow-pulse' : ''}`} />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4">
            <li><a href="#" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="#" className="hover:text-gray-300">Company</a></li>
            <li><a href="#" className="hover:text-gray-300">Overview</a></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Index;