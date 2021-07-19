import React from 'react';
import '../styles/game-embed.css';

export default function GameEmbed({ children, name }) {
  return (
    <div className="game-embed-wrapper">
      <iframe
        src={
          'https://play.idevgames.co.uk/embed/' +
          name +
          '/false?url=https://starphee.com'
        }
        scrolling="no"
        seamless="seamless"
        frameBorder="0"
        title={name}
      ></iframe>
    </div>
  );
}
