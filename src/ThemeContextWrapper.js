import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './Themecontext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
  const darker = document.querySelector('.bg')
  const moon = document.querySelector('.moon')
  const item = document.querySelector('.inp')

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        if(darker){
        darker.classList += ' dark-content'
        }
        if(moon){
            moon.classList += ' sun'
        }
        if(item){
            item.classList += "itemdark"
        }
        break;
      case themes.dark:
      default:
        if(darker){
        darker.classList.remove('dark-content')
        }
        if(moon){
            moon.classList.remove('sun')
        }
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}