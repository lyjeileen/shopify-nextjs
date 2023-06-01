import Image from 'next/image';
import Link from 'next/link';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 w-full px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap w-full items-center justify-between text-white">
        <Link href="/" className="flex items-center">
          <SnowboardingIcon />
          <span className="self-center m-2 text-xl font-bold  dark:text-white">
            SnowRide
          </span>
        </Link>

        <div className="w-auto" id="navbar-default">
          <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/cart"
                className="rounded-3xl py-2 px-1 hover:border-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <ShoppingCartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
