import { useEffect, useState } from "react";

const useToggle=(defaultValue=false)=>{
const[value, setValue]=useState(defaultValue)
function showToggle(val){
    if(typeof val!=='boolean'){
        setValue(!value)
    }
    else{
        setValue(val)
    }
}
return [value, showToggle]
}

function ThemeToggle() {
  const [isDark, toggleDark] = useToggle(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light"
  }, [isDark])

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        role="switch"
        aria-label="Dark mode"
        checked={isDark}
        onChange={(e) => toggleDark(e.target.checked)}
      />
      <span className="indicator" />
    </label>
  )
}

export default ThemeToggle;