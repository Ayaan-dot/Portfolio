import Navbar from "../../components/Navbar";
import Image from "next/image";

const projectImages = [
  "/pic2.png",
  "/pic3.png",
  "/pic4.png",
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white px-8 py-16 max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purpleMain via-blueMain to-purpleLight bg-clip-text text-transparent">
          My Projects
        </h1>

        <section>
          <h2 className="text-3xl font-bold mb-4">Just Built My Own Password Manager! 🔒✨</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            I’m excited to share my latest project — a full-stack Password Manager that I built as part of my learning journey in web development. Here’s what I used and what I learned along the way:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">✅ Frontend:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React.js for building a dynamic single-page app.</li>
              <li>Tailwind CSS for fast, modern, and responsive styling.</li>
              <li>React Toastify for clean, user-friendly notifications.</li>
              <li>Used lord-icon animations for interactive UI actions.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">✅ Backend:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Node.js with Express.js to handle API routes.</li>
              <li>MongoDB as the database to store encrypted passwords securely.</li>
              <li>Mongoose to easily interact with the database using schemas and models.</li>
              <li>Postman to test API requests like GET, POST, and DELETE for smooth backend communication.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">✨ Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Save, edit, and delete passwords with ease.</li>
              <li>Copy any credential to clipboard instantly.</li>
              <li>Hide/show password toggle for better security.</li>
              <li>All passwords persist securely using MongoDB.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">📚 How I did it:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Completed my Web Development Course to learn the core fundamentals.</li>
              <li>Took guidance and inspiration from CodeWithHarry (huge thanks!).</li>
              <li>Used ChatGPT to solve bugs and get explanations whenever I got stuck — it really boosted my understanding!</li>
            </ul>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Password Manager Screenshot ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover"
                  priority={index === 0} // prioritize first image for faster load
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

