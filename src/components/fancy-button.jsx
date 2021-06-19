import React from 'react';
import '../styles/fancy-button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FancyButton({ children, href, title, icon }) {
  return (
    <div className="fancy-button" title={title}>
      <label>
        <a
          href={href}
          className="GtmSocialItem"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      </label>
    </div>
  );
}
