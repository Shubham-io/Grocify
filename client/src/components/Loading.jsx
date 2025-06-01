import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const { navigate } = useAppContext();
  const { search } = useLocation();
  const nextUrl = new URLSearchParams(search).get("next");

  const [stage, setStage] = useState("loading"); // 'loading' → 'success'

  useEffect(() => {
    if (!nextUrl) return;

    const timer1 = setTimeout(() => setStage("success"), 2000);
    const timer2 = setTimeout(() => navigate(`/${nextUrl}`), 4000); // total wait time

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [nextUrl, navigate]);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4 bg-white">
      {stage === "loading" && (
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary"></div>
      )}

      {stage === "success" && (
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-green-400 breathing"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">✓</div>
            </div>
          </div>
          <p className="text-xl font-semibold text-green-600 mt-4">
            Payment Successful
          </p>
        </div>
      )}
    </div>
  );
};

export default Loading;
