import Navbar from "../../components/Navbar";

const skills = [
  { name: "Java", level: 70 },
  { name: "Python", level: 50},
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "MongoDB", level: 30 },
  { name: "Express.js", level: 30 },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purpleMain via-blueMain to-purpleLight bg-clip-text text-transparent">
          My Developer Skills
        </h1>

        <div className="space-y-6">
          {skills.map(({ name, level }, index) => {
            // Choose color based on even/odd index
            const barColor = "bg-pink-500";

            return (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded h-4">
                  <div
                    className={`${barColor} h-4 rounded`}
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
