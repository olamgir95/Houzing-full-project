
import ProportiesProvider from "./properties";


const RootContext = ({ children }) => {
  return (
    <>
      <ProportiesProvider>{children}</ProportiesProvider>;
    </>
  )
};

export default RootContext;
