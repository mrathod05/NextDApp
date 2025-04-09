"use client";

import { createContext, useContext, JSX, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";

type TypeLoaderContext = {
  loading: boolean;
  handleLoader: (value: boolean) => void;
};

const LoaderContext = createContext<TypeLoaderContext | undefined>(undefined);

export const LoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const handleLoader = (value: boolean) => setLoading(value);

  const value = {
    loading,
    handleLoader,
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {loading ? <LoadingSpinner /> : null}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = (): TypeLoaderContext => {
  const context = useContext(LoaderContext);

  if (!context) {
    // Replace with: ERROR_MESSAGES.INVALID_USE_OF_LOADER_CONTEXT
    throw new Error(
      "Invalid use of context. Make sure the Provider is mounted."
    );
  }

  return context;
};
