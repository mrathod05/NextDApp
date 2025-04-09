"use client";

import { getBasicProgram } from "@project/anchor";

import useLoader from "./useLoader";
import useAnchorProvider from "./useAnchorProvider";

const useBasic = () => {
  const { loader, handleLoading } = useLoader(true);
  const provider = useAnchorProvider();
  const program = getBasicProgram(provider);

  return {
    loader,
    program,
    handleLoading,
  };
};

export default useBasic;
