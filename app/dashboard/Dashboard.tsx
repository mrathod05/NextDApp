"use client";

import PhantomWalletButton from "@/lib/components/PhantomWalletButton";
import WalletAddressDisplay from "@/lib/components/WalletAddressDisplay";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data
const priceHistory = [
  { date: "Mar 14", price: 147.52 },
  { date: "Mar 15", price: 152.16 },
  { date: "Mar 16", price: 149.87 },
  { date: "Mar 17", price: 159.21 },
  { date: "Mar 18", price: 164.78 },
  { date: "Mar 19", price: 171.34 },
  { date: "Mar 20", price: 168.95 },
];

const recentTransactions = [
  {
    id: 1,
    type: "Sent",
    amount: "2.5 SOL",
    address: "8xyr...j29P",
    date: "20 Mar 2025, 10:32 AM",
    status: "Completed",
  },
  {
    id: 2,
    type: "Received",
    amount: "0.8 SOL",
    address: "3mzx...k7bQ",
    date: "19 Mar 2025, 2:45 PM",
    status: "Completed",
  },
  {
    id: 3,
    type: "Swap",
    amount: "5 SOL → 75 USDC",
    address: "-",
    date: "18 Mar 2025, 9:12 AM",
    status: "Completed",
  },
  {
    id: 4,
    type: "Stake",
    amount: "10 SOL",
    address: "Stake Account",
    date: "15 Mar 2025, 4:30 PM",
    status: "Active",
  },
];

const tokenBalances = [
  { token: "SOL", balance: "34.28", value: "$5,791.66", change: "+3.8%" },
  { token: "USDC", balance: "120.45", value: "$120.45", change: "0%" },
  { token: "RAY", balance: "45.8", value: "$87.02", change: "-1.2%" },
  { token: "BONK", balance: "1,250,000", value: "$75.25", change: "+12.4%" },
];

export default function DashboardPage() {
  const { publicKey, disconnect } = useWallet();

  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    try {
      setConnected(!!publicKey);
      if (publicKey) {
        setWalletAddress(`${publicKey}`);
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, [publicKey]);

  // Function to disconnect wallet
  const disconnectWallet = () => {
    disconnect();
    setWalletAddress("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="border-b border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Wallet Section - Pushed to Right */}
          <div className="ml-auto">
            {!connected ? (
              <PhantomWalletButton title="Connect Phantom" />
            ) : (
              <div className="flex items-center gap-4">
                <WalletAddressDisplay walletAddress={walletAddress} />
                <button
                  onClick={disconnectWallet}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-1 px-3 rounded-lg text-sm transition-all"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        {/* Welcome/Stats Banner */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-6 border border-gray-800">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {connected
                  ? "Welcome to Your Solana Dashboard"
                  : "Connect Your Phantom Wallet"}
              </h1>
              <p className="text-gray-400 mb-4">
                {connected
                  ? "Your portfolio overview and recent activity"
                  : "Connect your wallet to access your Solana assets and activity"}
              </p>

              {connected && (
                <div className="flex gap-8 mt-4">
                  <div>
                    <p className="text-gray-500 text-sm">Portfolio Value</p>
                    <p className="text-2xl font-bold text-yellow-400">
                      $6,074.38
                    </p>
                    <span className="text-green-400 text-sm">
                      +$128.45 (2.14%)
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">SOL Price</p>
                    <p className="text-2xl font-bold">$168.95</p>
                    <span className="text-red-400 text-sm">-$2.39 (1.4%)</span>
                  </div>
                </div>
              )}
            </div>

            {!connected && <PhantomWalletButton title="Connect wallet" />}
          </div>
        </div>

        {connected && (
          <>
            {/* Charts and Assets section */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Price Chart */}
              <div className="bg-gray-800 rounded-xl p-4 flex-1 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">SOL Price</h2>
                  <div className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    Last 7 days
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="date" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#333",
                          borderColor: "#555",
                        }}
                        labelStyle={{ color: "#FFF" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#F3BA2F"
                        strokeWidth={2}
                        dot={{
                          stroke: "#F3BA2F",
                          strokeWidth: 2,
                          r: 4,
                          fill: "#333",
                        }}
                        activeDot={{ r: 6, fill: "#F3BA2F" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Token Balances */}
              <div className="bg-gray-800 rounded-xl p-4 md:w-96 border border-gray-700">
                <h2 className="text-lg font-bold mb-4">Token Balances</h2>
                <div className="space-y-3">
                  {tokenBalances.map((token, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-3 rounded-lg bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                          <span className="font-bold text-sm">
                            {token.token.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{token.token}</div>
                          <div className="text-gray-400 text-sm">
                            {token.balance}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div>{token.value}</div>
                        <div
                          className={
                            token.change.startsWith("+")
                              ? "text-green-400"
                              : token.change === "0%"
                              ? "text-gray-400"
                              : "text-red-400"
                          }
                        >
                          {token.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 rounded-lg transition-all">
                  Add Token
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Recent Transactions</h2>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                      <th className="pb-2 font-medium">Type</th>
                      <th className="pb-2 font-medium">Amount</th>
                      <th className="pb-2 font-medium">Address</th>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-gray-700">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div
                              className={`p-1 rounded ${
                                tx.type === "Received"
                                  ? "bg-green-400/20 text-green-400"
                                  : tx.type === "Sent"
                                  ? "bg-red-400/20 text-red-400"
                                  : "bg-blue-400/20 text-blue-400"
                              }`}
                            >
                              {tx.type === "Received" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : tx.type === "Sent" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            {tx.type}
                          </div>
                        </td>
                        <td className="py-3">{tx.amount}</td>
                        <td className="py-3 text-gray-400">{tx.address}</td>
                        <td className="py-3 text-gray-400">{tx.date}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              tx.status === "Completed"
                                ? "bg-green-400/20 text-green-400"
                                : "bg-blue-400/20 text-blue-400"
                            }`}
                          >
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
