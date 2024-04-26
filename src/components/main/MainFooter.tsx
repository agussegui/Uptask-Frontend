import { Link } from "react-router-dom";

export default function MainFooter() {
    return (
      <>
        <footer className=" bottom-0 left-0 z-20 w-full p-16 bg-gray-800 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-md text-white sm:text-center dark:text-white">
            {new Date().getFullYear()}{" "}
            <Link to={'/auth/login'} className="hover:underline">
              Uptask
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-white dark:text-white sm:mt-0">
            <li>
              <Link to={'/main/about'} className="hover:underline me-4 md:me-6">
                Terms & conditions 
              </Link>
            </li>
            <li>
              <Link to={'/main/privacy'} className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={'/main/cookies'} className="hover:underline me-4 md:me-6">
                Cookies
              </Link>
            </li>
          </ul>
        </footer>
      </>
    );
}
