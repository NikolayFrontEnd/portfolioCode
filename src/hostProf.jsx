import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext,useEffect } from 'react';
import { ThemeContext } from './App';
import videoSrc from './video/dict.mp4'; 
import './blockSport.css'

function HosProf(){
    const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Устанавливаем язык из localStorage при загрузке компонента
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Функция для смены языка
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', newLanguage);
  };
return(
    <>
        <div className="header3">
        <NavLink to="/" className="i">{t('nav_home')}</NavLink>
        <NavLink to="/projects" className="i">{t('nav_projects')}</NavLink>
        <NavLink to="/skills" className="i">{t('nav_skills')}</NavLink>
          
          <div onClick={changeLanguage} className="i">
            {i18n.language === 'ru' ? 'en' : 'ru'}
          </div>
          
          <div onClick={toggleTheme} className="i">
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
        </div>

        <div className="blockSport">

        <div className="textSport1">
          <div> 
          {t("dict1")}
            </div>
          </div>

          <div className="seeV">{t("see")}</div>

          <div className="videoSport">
          <video width="700" height="700" controls>
            <source src={videoSrc} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      <NavLink to = '/projects'>       <button className = "Exit">{t("ex")}</button> </NavLink>
        </div>
    </>
)
}

export default HosProf;