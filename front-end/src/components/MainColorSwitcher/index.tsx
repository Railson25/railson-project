import { useEffect } from "react";
import {
  selectColorScheme,
  setColorScheme,
  ColorSchemes,
} from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import clsx from "clsx";

function Main() {
  const dispatch = useAppDispatch();
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];

    el.classList.remove("default", "theme-1", "theme-2");

    el.classList.add(colorScheme);

    if (darkMode) {
      el.classList.add("dark");
    } else {
      el.classList.remove("dark");
    }
  };

  const switchColorScheme = (newColorScheme: ColorSchemes) => {
    dispatch(setColorScheme(newColorScheme));
    localStorage.setItem("colorScheme", newColorScheme);
    setColorSchemeClass();
  };

  useEffect(() => {
    setColorSchemeClass();
  }, [colorScheme, darkMode]);

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50 flex items-center justify-center h-12 px-5 mb-10 bg-white border rounded-full shadow-md box mr-52 dark:bg-darkmode-800">
        <div className="hidden mr-4 sm:block text-slate-600 dark:text-slate-200">
          Color Scheme
        </div>
        <button
          onClick={() => {
            switchColorScheme("default");
          }}
          className={clsx({
            "block w-8 h-8 cursor-pointer bg-sky-400 rounded-full border-4 mr-1 hover:border-slate-200 transition-all":
              true,
            "border-slate-300 dark:border-darkmode-600":
              colorScheme === "default",
            "border-white dark:border-darkmode-400": colorScheme !== "default",
          })}
          title="Baby Blue"
        ></button>
        <button
          onClick={() => {
            switchColorScheme("theme-1");
          }}
          className={clsx({
            "block w-8 h-8 cursor-pointer bg-pink-400 rounded-full border-4 mr-1 hover:border-slate-200 transition-all":
              true,
            "border-slate-300 dark:border-darkmode-600":
              colorScheme === "theme-1",
            "border-white dark:border-darkmode-400": colorScheme !== "theme-1",
          })}
          title="Baby Pink"
        ></button>
        <button
          onClick={() => {
            switchColorScheme("theme-2");
          }}
          className={clsx({
            "block w-8 h-8 cursor-pointer bg-slate-400 rounded-full border-4 mr-1 hover:border-slate-200 transition-all":
              true,
            "border-slate-300 dark:border-darkmode-600":
              colorScheme === "theme-2",
            "border-white dark:border-darkmode-400": colorScheme !== "theme-2",
          })}
          title="Gray Light"
        ></button>
      </div>
    </>
  );
}

export default Main;
