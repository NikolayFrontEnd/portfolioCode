import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './App';
import videoSrc from './video/HOSPITAL.mp4';

import './blockSport.css';

function StivPortf() {
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
  return (
    <>
      <div className="h">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'i active' : 'i')}
        >
          {t('nav_home')}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'i active' : 'i')}
        >
          {t('nav_projects')}
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'i active' : 'i')}
        >
          {t('nav_skills')}
        </NavLink>

        <div onClick={changeLanguage} className="i">
          {i18n.language === 'ru' ? 'en' : 'ru'}
        </div>

        <div onClick={toggleTheme} className="i">
          {theme === 'light' ? '🌙' : '☀️'}
        </div>
      </div>

      <div className="hospital-container">
        <div className="hospital-header">
          <span className="hospital-badge">PORTFOLIO</span>
        </div>

        <div className="hospital-content">
          <div className="video-section">
            <div className="video-wrapper">
              <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="video-shadow"></div>
            </div>
          </div>

          <div className="description-section">
            <div className="description-content">
              <p className="description-text">{t('stivPort')}</p>

              <p className="description-text">{t('stivPort1')}</p>

              <p className="description-text"></p>
              <div className="description-accent"></div>
            </div>

            <NavLink to="/projects" className="back-link">
              <button className="back-button">
                <span className="button-icon">←</span>
                <span className="button-text">{t('ex')}</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default StivPortf;