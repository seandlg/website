import React from 'react';
import { mainContent, color } from '../utils/css';

export default function Footer() {
  return (
    <footer
      css={`
        ${mainContent};
        padding-top: 1.45rem;
        font-size: 0.7rem;
        text-align: center;
        border-top: 1px solid ${color.divider};
      `}
    >
      A laugh a day keeps the doctor away.
      <br />
      This is not professional medical advice.
      <br />
      <a href="https://github.com/hswolff/website">Source</a>
    </footer>
  );
}
