import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-900 flex justify-between items-center px-8 py-4 bg-darkbg">
      <Link href="/">
      <h1 className="text-2xl font-bold text-purpleMain mx-12">Ayaan Ahmed</h1>
      </Link>
      <ul className="flex gap-8">
        <li><Link href="/Services" className="px-2 hover:underline hover:text-pink-500">Services</Link></li>
        <li><Link href="/Projects" className="px-2 hover:underline  hover:text-pink-500">Projects</Link></li>
        <li><Link href="/Education" className="px-2 hover:underline  hover:text-pink-500">Education</Link></li>
      </ul>
      <div>
        <Link href="/Contact">
        <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-20 mb-2">Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}
