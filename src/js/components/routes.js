import i18n from 'i18next';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RepositoriesPage from './pages/RepositoriesPage';

const routes = [
  {
    path: 'login',
    name: () => i18n.t('Login page'),
    component: LoginPage,
  },
  {
    path: 'home',
    name: () => i18n.t('Home page'),
    component: HomePage,
  },
  {
    path: 'about',
    name: () => i18n.t('About page'),
    component: AboutPage,
  },
  {
    path: 'github',
    name: () => i18n.t('GitHub Repositories'),
    component: RepositoriesPage,
  },
];

export default routes;
