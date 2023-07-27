"use client";

import { Moon, RefreshCcw, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [toggleDark, setToggleDark] = useState(false);

  function handleTheme() {
    setToggleDark(!toggleDark);
  }

  function handleRefreshWindow() {
    window.location.reload();
  }

  function getStorageThemeOption() {
    const current = localStorage.getItem("toggleTheme");
    if (current && current === "dark") {
      return true;
    }

    return false;
  }

  useEffect(() => {
    setToggleDark(getStorageThemeOption());
  }, []);

  useEffect(() => {
    localStorage.setItem("toggleTheme", toggleDark ? "dark" : "light");
  }, [toggleDark]);

  return (
    <main className={`${toggleDark && "dark"}`}>
      <div className="flex justify-center items-center h-screen bg-slate-100 dark:bg-slate-800 duration-300">
        <div className="w-11/12 mx-auto lg:w-[60rem] rounded-3xl border-2 bg-slate-50 border-teal-500 dark:border-white p-6 space-y-6 dark:bg-slate-700 duration-300">
          <h1 className="text-3xl tracking-widest text-slate-600 dark:text-slate-100">
            <strong>React Dark / Light Theme + Local Storage</strong>
          </h1>

          <div className="text-lg text-slate-600 dark:text-slate-200">
            Example of user-defined theme choice and persistence.
          </div>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={handleTheme}
              className="px-6 py-3 outline-none bg-teal-500 text-2xl text-white rounded-2xl flex gap-3 dark:border-2 dark:border-teal-400 dark:text-teal-400 dark:bg-transparent"
            >
              <span>Toggle {toggleDark ? "light" : "dark"} theme</span>
              {toggleDark ? <Sun size={32} /> : <Moon size={32} />}
            </button>

            <button
              onClick={handleRefreshWindow}
              className="px-6 py-3 outline-none bg-yellow-200 border border-slate-500 text-2xl text-slate-600 rounded-2xl flex gap-3 dark:border-2 dark:border-yellow-200 dark:text-yellow-200 dark:bg-transparent"
            >
              <span>Refresh your page</span>
              <RefreshCcw size={32} />
            </button>
          </div>

          <div className="text-slate-600 dark:text-slate-200">
            by Almir Toledo
          </div>
        </div>
      </div>
    </main>
  );
}
