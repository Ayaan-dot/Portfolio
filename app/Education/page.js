import Navbar from "../../components/Navbar";

const educationData = [
  {
    year: "2025 - Present",
    institution: "Bhagwan Parshuram Institute of Technology",
    details: [
      "Currently studying in college",
        "Pursuing B.Tech in Computer Science",
    ],
},
{
  year: "2024",
  institution: "Hamdard Public School",
  details: [
    "Studied Python for 2 years -11th and 12th grade",
      "12th Percentage: 86%",
  ],
},
  {
    year: "2022",
    institution: "Hamdard Public School",
    details: [
      "Completed 10th grade",
      "10th Percentage: 93%",
    ],
  },
];

export default function Education() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-purpleMain via-blueMain to-purpleLight bg-clip-text text-transparent">
          My Education
        </h1>

        <div className="space-y-10">
          {educationData.map(({ year, institution, details }) => (
            <div key={year} className="border-l-4 border-pink-500 pl-6">
              <p className="text-purpleMain font-semibold">{year}</p>
              <h2 className="text-2xl font-bold">{institution}</h2>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
