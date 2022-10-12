import { useState } from 'react';

export const ServicesContext = () => {
  services: [];
};

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();
  const value = { services };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
