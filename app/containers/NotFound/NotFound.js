/**
 * NotFound
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './style.scss';

export default function NotFound() {
  return (
    <article>
      <div className='not-found-page'>
        <div className='container'>
          <h1>This site is just a prototype - not all links work yet.</h1>
        </div>
      </div>
    </article>
  );
}
