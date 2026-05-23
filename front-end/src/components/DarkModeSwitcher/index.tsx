import { useEffect } from "react";
import { selectDarkMode, setDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import clsx from "clsx";

function Main() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
  const colorScheme = useAppSelector(selectColorScheme);

  const setDarkModeClass = () => {
    const el = document.querySelectorAll("html")[0];
    if (darkMode) {
      el.classList.add("dark");
    } else {
      el.classList.remove("dark");
    }

    el.classList.remove("default", "theme-1", "theme-2");
    el.classList.add(colorScheme);
  };

  const switchMode = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem("darkMode", newDarkMode.toString());
    setDarkModeClass();
  };

  useEffect(() => {
    setDarkModeClass();
  }, [darkMode, colorScheme]);

  return (
    <>
      <div
        className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-40 h-12 mb-10 mr-10 bg-white border rounded-full shadow-md cursor-pointer box dark:bg-darkmode-800"
        onClick={switchMode}
      >
        <div className="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
        <div
          className={clsx([
            "border w-[38px] h-[24px] p-px outline-none rounded-full relative cursor-pointer",
            "before:content-[''] before:w-[22px] before:h-[22px] before:transition-all before:duration-200 before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:absolute before:inset-y-0 before:my-auto before:rounded-full before:left-0.5",
            {
              "bg-primary border-primary": darkMode,
              "before:left-[13px] before:bg-white": darkMode,
              "bg-slate-200 border-slate-300": !darkMode,
              "before:bg-slate-700": !darkMode,
            },
          ])}
        ></div>
      </div>
    </>
  );
}

export default Main;
