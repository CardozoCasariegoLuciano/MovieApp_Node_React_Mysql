import React, { createContext, useState } from "react";

const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  const data = { page, setPage };

  return (
    <PageContext.Provider value={data}>{children}</PageContext.Provider>
  );
};

export { PageProvider };
export default PageContext;
