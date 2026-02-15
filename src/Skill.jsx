
import './skills.css';
import './App.css';
import photoReact from'./photos/i.webp';
import photoNode from './photos/NJS.png';
import photoNative from './photos/reactNative.png';
import photoMongo from './photos/MongoDatabase.jpg';
import photoServer from './photos/server.jpg';
import photoThree from './photos/three.webp';
import photoBoot from './photos/bootstrap.jpg';
import photoRedux from './photos/m.jpg';
import photoTS from './photos/9d.jpg';
import photoDjango from './photos/djamgo.png'
import nestPhoto from './photos/nest.png'
import postgressPhoto from './photos/postgresql.png'
import n  from './photos/Next.jpg'
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './App';
import photoTail from './photos/maxresdefault.jpg'
import { NavLink } from 'react-router-dom';


function Skill() {
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
            to="/portfolioCode" 
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
  
        <div className="container5">
          {/* React Card */}
          <div className="card" style={{ "--clr": "#009688" }}>
            <div className="img-box">
              <img src={photoReact} alt="React" />
            </div>
            <div className="content">
              <h2><span className='reactColor'>{t('skill_react_title')}</span></h2>
              <p className='pWords2'>{t('skill_react_desc')}</p>
            </div>
          </div>





          {/* Node JS Card */}
          <div className="card" style={{ "--clr": "#FF3E7F" }}>
            <div className="img-box">
              <img src={photoNode} alt="Node JS" />
            </div>
            <div className="content">
              <h2><span className='nodWord'>{t('skill_node_title')}</span></h2>
              <p className='pWordsNode'>{t('skill_node_desc')}</p>
            </div>
          </div>
  
  {/*Nest.JS*/}

          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={nestPhoto} alt="Django" />
            </div>
            <div className="content">
              <h2><span className='nestW'>Nest.js</span></h2>
              <p className='pWordsNative'>{t('skill_nest_desc')}</p>
            </div>
          </div>

          {/* Next.jsCard */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={n} alt="Next.js" />
            </div>
            <div className="content">
              <h2><span className='Next'>{t('skill_next_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_next_desc')}</p>
            </div>
          </div>
  
          {/* Mongo DB Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoMongo} alt="MongoDB" />
            </div>
            <div className="content">
              <h2><span className='mongoColor'>{t('skill_mongo_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_mongo_desc')}</p>
            </div>
          </div>
  
          {/* Microsoft SQL Server Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoServer} alt="Microsoft SQL Server" />
            </div>
            <div className="content">
              <h2><span className='msServer'>{t('skill_sql_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_sql_desc')}</p>
            </div>
          </div>
  
          {/* PostgreSQL */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={postgressPhoto} alt="React Native" />
            </div>
            <div className="content">
              <h2><span className='postgresql'>PostgreSQL</span></h2>
              <p className='pWordsNative'>{t('skill_postgresql')}</p>
            </div>
          </div>

          {/* React Native Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoNative} alt="React Native" />
            </div>
            <div className="content">
              <h2><span className='reactNW'>{t('skill_native_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_native_desc')}</p>
            </div>
          </div>

          {/* Three.JS Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoThree} alt="Three.JS" />
            </div>
            <div className="content">
              <h2><span className='threeColor'>{t('skill_three_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_three_desc')}</p>
            </div>
          </div>
  
          {/* TailWind Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoTail} alt="TailWind" />
            </div>
            <div className="content">
              <h2><span className='TailWindWord'>{t('skill_tailwind_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_tailwind_desc')}</p>
            </div>
          </div>
  
          {/* Bootstrap Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoBoot} alt="Bootstrap" />
            </div>
            <div className="content">
              <h2><span className='bwords24'>{t('skill_bootstrap_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_bootstrap_desc')}</p>
            </div>
          </div>
  
          {/* Redux Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoRedux} alt="Redux" />
            </div>
            <div className="content">
              <h2><span className='redWords'>{t('skill_redux_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_redux_desc')}</p>
            </div>
          </div>
  
          {/* TypeScript Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoTS} alt="TypeScript" />
            </div>
            <div className="content">
              <h2>TypeScript</h2>
              <p className='pWordsNative'>{t('skill_typescript_desc')}</p>
            </div>
          </div>
  
          {/* Django Card */}
          <div className="card" style={{ "--clr": "#03A9F4" }}>
            <div className="img-box">
              <img src={photoDjango} alt="Django" />
            </div>
            <div className="content">
              <h2><span className='DjangoW'>{t('skill_django_title')}</span></h2>
              <p className='pWordsNative'>{t('skill_django_desc')}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Skill;