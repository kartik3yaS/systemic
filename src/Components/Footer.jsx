// // import React from "react";
import footer from "./footer.png";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 p-5">
        <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-2">
          <div className="-mt-7 -mb-16.5">
            <div className="mb-2 md:mb-0  ">
              <a href="https://coinmarketcap.com/currencies/uranus-sol/" className="flex items-center">
                <img
                  src={footer}
                  className="h-8 me-3 rounded-full"
                  alt=""
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Uranus Web
                </span>
              </a>
            </div>
            <div className=" mt-10 grid grid-cols-2 gap-8 sm:gap-6  ">
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Partners
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://Dia.wiki" className="hover:underline">
                      Decentralized Intelligence Agency
                    </a>
                  </li>
                  <li>
                    <a href="https://WorldVibeWeb.org" className="hover:underline">
                      World Vibe Web
                    </a>
                  </li>
                  <li>
                    <a href="https://Purplerock.xyz" className="hover:underline">
                      Purplerock
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources:{" "}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327"
                      className="hover:underline "
                    >
                      Effective Vibes
                    </a>
                  </li>
                  <li>
                    <a href="https://goldenmeme.org/" className="hover:underline">
                      Golden Meme
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327"
                className="hover:underline"
              >
                Uranus Web™
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/kartikeya-shukla-63b433250/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-4 h-4"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
              </svg>
              <span className="sr-only">linkedIn</span>
            </a>
            <a
              href="https://github.com/kartik3yaS"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// const Footer = () => {
//   return(
//     <React.Fragment>
//       <footer className="bg-gray-900 text-gray-200">
//         <div className="container mx-auto py-14 px-6">
//           <div className="grid md:grid-cols-5 grid-cols-1 gap-7">
//             <div className="lg:col-span-2 md:col-span-4 col-span-12">
//               <h2 className="tracking-wide text-gray-100 font-semibold">Partners</h2>
//               <ul className="list-none mt-6 space-y-2">
//                 <li>
//                   <a href="https://Dia.wiki" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">Decentralized Intelligence Agency</a>
//                 </li>
//                 <li><a href="https://WorldVibeWeb.org" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">World Vibe Web</a></li>
//                 <li><a href="https://Purplerock.xyz" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">Purplerock</a></li>
//               </ul>
//             </div>
//             <div className="lg:col-span-3 md:col-span-4 col-span-12">
//               <h2 className="tracking-wide text-gray-100 font-semibold">Resources</h2>
//               <ul className="list-none space-y-2 mt-6">
//                 <li><a href="https://www.notion.so/URANUS-Web-7291c569928947758d04c7dc99a3a327?pvs=4" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">Decentralized Intelligence Agency</a></li>
//                 <li><a href="https://GoldenMeme.org" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">Decentralized Intelligence Agency</a></li>
//               </ul>
//             </div>
//             <div className="">
//               <h2 className="tracking-wide text-gray-100 font-semibold">2024 All rights reserved</h2>
//               <span>Kartikeya Shukla</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </React.Fragment>
//   )
// }

export default Footer;