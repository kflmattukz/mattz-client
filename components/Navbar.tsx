import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({});
const links = [
  { name: "Home", path: "/" },
  { name: "Content", path: "/content" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='px-5 py-2 bg-blue-600 flex items-center justify-between antialised shadow-md'>
      <div
        className={`${inter.className} font-bold tracking-wide text-2xl text-white`}
      >
        Mattz Code
      </div>
      <div>
        <ul
          className={`${inter.className} text-white flex space-x-5 font-medium`}
        >
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      {router.route === "/signup" || router.route === "/signin" ? (
        ""
      ) : (
        <div
          className={`${inter.className} text-white flex space-x-5 font-light items-center`}
        >
          <Link href='signup'>Signup</Link>
          <Link
            href='signin'
            className='bg-orange-500 px-5 py-2 rounded-full font-semibold tracking-wide shadow-sm'
          >
            Signin
          </Link>
        </div>
      )}
    </nav>
  );
};
