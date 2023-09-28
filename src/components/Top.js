// src\components\Top.js

import React from 'react';
import './Top.css';
import topImage from '../assets/top-1.jpg';  // 画像をインポート

function Top() {
  return (
    <div className="top-container">
      <img src={topImage} alt="Top Image" className="top-image" />
    </div>
  );
}

export default Top;
