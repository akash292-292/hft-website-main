import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutPoints = [
  <h3 key="1" className="text-5xl font-bold text-center mb-6">Company Overview and Mission</h3>,
  <p key="2"><b>• Our Mission and Vision:</b> A concise statement about redefining investment through data-driven insights.</p>,
  <p key="3"><b>• The Hushh Story:</b> A brief narrative on how Manish Sainani, inspired by Jim Simons, created Hushh to leverage advanced mathematics, statistics, and AI/ML in investment.</p>,
  <p key="4"><b>• Core Values:</b> Highlight key principles such as transparency, precision, empowerment, and sustainability.</p>,
  <p key="5"><b>• Leadership Team:</b> Short bios for the leadership team, with emphasis on expertise in AI, data science, finance, and investment.</p>
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutPoints.map((point, index) => (
              <div key={index} className="text-gray-800 text-lg leading-relaxed">
                {point}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
