import { useId } from "react";

const useUniquiId = () => {
  const id = useId();
  return id;
};

export default useUniquiId;
