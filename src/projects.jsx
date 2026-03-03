import './projects.css';

import { NavLink } from 'react-router-dom';
import sport from './photos/sport.png';
import portf from './photos/portfolio.png';
import dic from './photos/dic.png';
import uni from './photos/uni.png';
import hos from './photos/hospital.png';
import agrodat from './photos/agrodat.png';
import prpr from './photos/prpr.png';
import letucce from './photos/Let.png';
import game from './photos/g.png';
import chatBot from './photos/chatBot.png';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './App';
import IconCircle from './IconCircle';
import vkPhoto from './photos/vk.png';
import cats from './photos/cats.png';
import td from './photos/td.png';
import space from './photos/Space.png';
import gutsby from './photos/gutsby.png';
import './p.css';
function Project() {
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

      <div className="projects_header">
        <div className="projects_header__text">{t('PROJ')}</div>
        <div className="img">
          <IconCircle />
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={agrodat} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Agrodat: Web Application for Farmers
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/agrodat">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">React / SCSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={hos} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Web Application for Hospitals
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/hos">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">React / SCSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={chatBot} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Bothab: Multi-Model AI Applications
            </div>

            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/bothabChat">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">
                React / Free AI url
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={letucce} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Web Application for Customers
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/customer">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">React / CSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={prpr} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Portfolio with Brief Information
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/port">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">
                React / Tailwind{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={uni} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              LMS Application for the University
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/uni">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">
                React / Nest.JS
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={cats} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Web Applications with an Infinite Number of Photos
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/cats">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">React / CSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={dic} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Dictionary for Learning Words and Rules
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/dict">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">
                React / Node.JS
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={game} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Game for Improving Memory and Calculation Skills
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/game">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">React / CSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={sport} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Sport Application with Famous Athletes
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/sport">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>
              </NavLink>
              <div className="projectContainer__card__tools">React / CSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={space} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Web Game with a Story about Space
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/dgame">
                {' '}
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>{' '}
              </NavLink>
              <div className="projectContainer__card__tools">
                Next.JS / Tailwind
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={portf} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Portfolio with Brief Information
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/stivportfolio">
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>
              </NavLink>
              <div className="projectContainer__card__tools">React / SCSS</div>
            </div>
          </div>
        </div>

        <div className="projectContainer__card">
          <div className="projectContainer__card__photo">
            <img src={vkPhoto} alt="project" />
          </div>
          <div className="projectContainer__card__textbox">
            <div className="projectContainer__card__textbox__title">
              Web Application with Articles
            </div>
            <div className="projectContainer__card__textbox__bottom">
              <NavLink to="/articleApp">
                <button className="projectContainer__card__btn">
                  Check it out!
                </button>
              </NavLink>
              <div className="projectContainer__card__tools">React / CSS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
