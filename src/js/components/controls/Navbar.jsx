import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

export function Navbar({ applicationName, links, email }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-primary text-light border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        {applicationName}
      </h5>
      {email && (
        <p className="mb-0 mt-0 mr-2 text-light font-weight-bold">
          {`${i18n.t('Hello, ')} ${email}`}
        </p>
      )}
      {links.map(link => (
        <a
          className="p2 text-light mr-2 border-light"
          key={link.to}
          href={link.to}
          onClick={link.action}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

Navbar.propTypes = {
  applicationName: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  email: PropTypes.string,
};
