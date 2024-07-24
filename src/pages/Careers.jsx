import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="font-bold">♥ lovable</span>
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
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl font-bold mb-8">
            Few people have the skillset to build great software — we're changing this.
          </h1>
          
          <section className="mb-16">
            <p className="text-xl mb-4">
              We are a small team of serial founders, product engineers, physicists, competitive programmers and
              people who care deeply about building a great product. We want to work with people who are as ambitious,
              and as motivated about shipping fast, as we are.
            </p>
            <p className="text-xl mb-4">
              Our goal is simple: be the first to make autonomous code generation work.
            </p>
            <p className="text-xl">
              The ambitious first step is to let anyone create and maintain web apps using plain English. LLMs + novel UX
              + clever algorithms enables this new bridge between coders and non-coders. We have our roots in open
              source code generation, are backed by some of the best investors, and looking for like-minded to join.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">The right team for an ambitious mission</h2>
            <p className="text-xl mb-4">
              We believe that rapid experimentation and hiring the brightest and most ambitious minds is the only way to
              achieve our vision.
            </p>
            <p className="text-xl">
              We are in the early days of building the company so right now is an opportunity to be a big part of shaping
              a fast growing, high ambition startup set on defining the future of software.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Open positions</h2>
            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Generalist Engineer</span>
                    <span className="text-sm text-gray-400">in Stockholm or London</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    We are seeking an engineer with a creative, algorithmic mindset with a track record solving novel and extremely
                    difficult problems in physics, computer science, or mathematics to join the team. You will have a lot of impact in
                    shaping the culture, product and business. You will be working closely with the founders as one of the first
                    employees.
                  </p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Product Engineer</span>
                    <span className="text-sm text-gray-400">in Stockholm or London</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    We are looking for a product-minded fullstack engineer to join our team. You will be building the core product,
                    and will have a lot of impact in shaping the culture, product and business. You will be working closely with the
                    founders as one of the first employees.
                  </p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Don't see the right role for you?</h2>
            <p className="text-xl mb-4">
              We love to connect with great people. If you have a passion for the future of software creation and believe
              you can contribute to our mission, feel free to let us know.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Let us know
            </Button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-4 border-t border-gray-800">
        <div className="flex items-center">
          <span className="font-bold">♥ lovable</span>
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

export default Careers;