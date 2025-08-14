import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-16">
        
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purpleMain via-blueMain to-purpleLight bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-xl text-center mb-10">
          Have a question, a project in mind, or just want to say hello?  
          Fill out the form below, and I'll get back to you as soon as possible.
        </p>

      
        <form className="bg-slate-900 p-8 rounded-2xl shadow-lg shadow-purpleMain/30 w-full max-w-lg space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purpleMain"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blueMain"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purpleMain"
            ></textarea>
          </div>

        
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-purpleMain to-blueMain hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Or email me directly at{" "}
            <a href="mailto:ayaanahmed.2802@gmail.com" className="text-purpleMain hover:underline">
              ayaanahmed.2802@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
