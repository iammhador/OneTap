import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../Assets/logo.png";
const navbar = () => {
  const [state, setState] = useState(false);

  const router = useRouter();
  return (
    <>
      <nav className="bg-info border-b md:border-0 md:static">
        <div className="items-center w-10/12 mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex">
              <Image src={logo} alt="Logo" width={25} height={25} />
              <p className="text-base font-lato font-bold text-primary ml-1 ">
                One Tap
              </p>
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Link href="/">
                <li
                  className={
                    router.pathname == "/"
                      ? "text-base font-lato font-bold text-primary uppercase"
                      : "text-base font-lato font-bold text-base-300 uppercase"
                  }
                >
                  Home
                </li>
              </Link>

              <Link href="/shop">
                <li
                  className={
                    router.pathname == "/shop"
                      ? "text-base font-lato font-bold text-primary uppercase"
                      : "text-base font-lato font-bold text-base-300 uppercase"
                  }
                >
                  Shop
                </li>
              </Link>

              <Link href="/about">
                <li
                  className={
                    router.pathname == "/about"
                      ? "text-base font-lato font-bold text-primary uppercase"
                      : "text-base font-lato font-bold text-base-300 uppercase"
                  }
                >
                  About
                </li>
              </Link>

              <Link href="/contact">
                <li
                  className={
                    router.pathname == "/contact"
                      ? "text-base font-lato font-bold text-primary uppercase"
                      : "text-base font-lato font-bold text-base-300 uppercase"
                  }
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden md:inline-block">
            <a
              href="javascript:void(0)"
              className="py-3 px-4 text-base font-lato font-bold text-neutral uppercase bg-primary hover:text-secondary rounded-md shadow"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
