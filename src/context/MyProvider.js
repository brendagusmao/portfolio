import { useEffect, useState } from "react";
import context from "./MyContext";

function MyProvider({children}) {

  const getSavedState = () => {
    return JSON.parse(localStorage.getItem('portfolio'))?.lightMode;
  }

  const getSavedStateLanguage = () => {
    const savedState = JSON.parse(localStorage.getItem('language'));
    return savedState ? savedState.language : 'EN';
  }

  const [lightMode, setLightMode] = useState(getSavedState() || false);
  const [languageMode, setLanguageMode] = useState(getSavedStateLanguage() || 'EN');

  const values = {lightMode, setLightMode, languageMode, setLanguageMode};

  useEffect(() => {
    lightMode ? document.body.classList.remove('dark') : document.body.classList.add('dark');
    localStorage.setItem('portfolio', JSON.stringify({lightMode}));
  }, [lightMode]);

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify({languageMode}));
  }, [languageMode]);

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

export default MyProvider;
