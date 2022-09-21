import { createContext } from "react";
import ProportiesProvider from "./proporties";

const Root = createContext();
const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <ProportiesProvider>{children}</ProportiesProvider>;
    </Root.Provider>
  );
};

export default RootContext;
