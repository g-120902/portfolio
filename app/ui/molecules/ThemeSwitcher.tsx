'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { changeTheme } from "../../utils/helpers";

export default function ThemeSwitcher() {
  return (
    <div className="flex gap-5">

      <button className='' onClick={() => changeTheme("light")}>
        <SunIcon className="h-5  text-skin-primary hover:text-skin-hover" />
      </button>
      <span className="text-skin-primary"> | </span>
      <button className='' onClick={() => changeTheme("dark")}>
        <MoonIcon className="h-5 text-skin-primary hover:text-skin-hover" />
      </button>
    </div>
  )
}