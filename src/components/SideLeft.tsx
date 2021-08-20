import React from "react";

import logoCompleto from '../assets/logo_completo.svg';
import logoMobile from '../assets/favicon.svg'

export const SideLeft = () => {
  return (
    <div className="flex md:min-h-screen md:bg-gray-background">
      <img
        className="hidden md:flex mx-auto"
        src={logoCompleto}
        alt="Logo empresa"
      />
      <img
        src={logoMobile}
        className="md:hidden mt-10 mx-auto w-16"
        alt="Logo empresa"
      />
    </div>
  );
};
