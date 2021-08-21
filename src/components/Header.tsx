import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Button } from './Button';
import Logo from '../assets/logo.svg';
import Omega from '../assets/omega.svg';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline'
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const { signOut } = useContext(AuthContext);
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  async function handleLogout() {
    signOut();
    history.push("/");
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <img src={Logo} alt="Logo Omega" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/propostas" className="nav-link px-3">
                  Propostas
                </Link>
              </div>
            </div>
            <img src={Omega} alt="Omega" className="w-24 ml-4 md:hidden" />
          </div>
          <div className="hidden md:block">
            <Button style="outlined" onClick={handleLogout}>
              <LogoutIcon className="w-5 mr-1" />
              Sair
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-darkblue-omega focus:outline-none focus:bg-light rounded-md"
            >
              {!isOpen ? (
                <MenuIcon className="w-6"/>
              ) : (
                <XIcon className="w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
          <div className="md:hidden">
            <div className="p-2 space-y-1">
              <Link to="propostas" className="nav-link block px-3 py-2 rounded-md focus:bg-light">
                Propostas
              </Link>
              <Button style="outlined" onClick={handleLogout}>
                <LogoutIcon className="w-5 mr-1" />
                Sair
              </Button>
              {/* <Link to="propostas" className="nav-link flex px-3 py-2 rounded-md focus:bg-light">
                <LogoutIcon className="w-4 mr-1" />
                Sair
              </Link> */}
            </div>
          </div>
      </Transition>
    </nav>
  )
}