import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

export function initTranslation() {
  i18n.use(Backend).init({
    lng: 'en',
    backend: {
      loadPath: '/translations/{{lng}}.json',
    },
  });
}
