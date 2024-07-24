import { Heart } from "lucide-react";

const Vision = () => {
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
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="/vision" className="hover:text-gray-300">Vision</a></li>
            <li><a href="/news" className="hover:text-gray-300">News</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-5xl font-bold mb-16">Unlock human creativity — by enabling anyone to create software</h1>
        
        <section className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Why</h2>
          <p className="text-xl">
            For three decades, software has been the most significant tool to unleash the world's ambition. Still, less
            than 1% of the world has the skills required to create software.
          </p>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Vision</h2>
          <p className="text-xl mb-4">
            If we succeed, everyone will have the same capabilities that entire product development teams at stellar
            tech companies have today – which we think will unlock a new era of innovation.
          </p>
          <p className="text-xl">
            We're reducing the barriers to build and staying committed to unleashing human creativity on an
            unprecedented scale.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-4 border-t border-gray-800">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-white mr-2" />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4">
            <li><a href="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="/company" className="hover:text-gray-300">Company</a></li>
            <li><a href="/overview" className="hover:text-gray-300">Overview</a></li>
            <li><a href="/vision" className="hover:text-gray-300">Vision</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Vision;