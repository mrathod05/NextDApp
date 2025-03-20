import React from "react";
import DashboardPage from "./Dashboard";
import { ClientWalletProvider } from "@/lib/components/Providers/WalletProvider";

const Page = () => {
  return (
    <>
      <ClientWalletProvider>
        <DashboardPage />
      </ClientWalletProvider>
    </>
  );
};

export default Page;
