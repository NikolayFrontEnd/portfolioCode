import './App.css';
import photo from './photos/me.jpg';
import { NavLink } from 'react-router-dom';
import portfolioRu from './resume.pdf';
import portfolioEn from './portfolioEng.pdf';
import { useTranslation } from 'react-i18next';
import { ThemeContext, } from './App';
import { useContext, useEffect } from 'react';
import './msin.css';
function Main() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };
  const portfolio = i18n.language === 'en' ? portfolioEn : portfolioRu;
  return (
    <>
              
    <div> 

        <div className="h">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "i active" : "i"}
          >
            
            {t('nav_home')}
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "i active" : "i"}
          >
            {t('nav_projects')}
          </NavLink>


          
          <NavLink 
            to="/skills" 
            className={({ isActive }) => isActive ? "i active" : "i"}
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
        
      </div>
      
   
        <div className='r'></div>
 

      <div className='bigblockkk'>
        <div className='MainBlockContainer'>
          <div className='circleBlock'>
            <div className='ava'>
              <img className='photoAva' src={photo} alt="Profile"/>
            </div>
          </div>

          <div className='prof'>
            <div className='blockWords'>
              <div className='Name'>{t('greeting')} <span className='blueWord'>{t('name')}</span></div>
              <div className='profession'>{t('profession')}</div>

              <div className = "descriptionBlock">    
              <div className='describtion'>{t('description1')}</div>
              <div className='describtion'>{t('description2')}</div>
              <div className='describtion'>{t('description3')}</div>
              <div className='describtion'>{t('description4')}</div>
              <div className='describtion'>{t('description5')}</div>
             </div>
              <div className='buttons'>
                <button className='project-btn'>
                  <NavLink className='a' to='/projects'>{t('see_projects')}</NavLink>
                </button>
                <div className="resume-btn">
                  <a className="a2" href={portfolio} download="portfolio">
                    {t('download_resume')}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='cdscscs'>
        <div className="b">React</div>
        <div className="b2">Nest.JS</div>
        <div className="b3">MongoDB</div>
        <div className="b">Next.js</div>
        
      </div>
    </>
  );
}

export default Main

