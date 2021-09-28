import React, { useState } from 'react';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function FavoriteButton() {
  const [favorited, setFavorited] = useState(false);

  const imageSource = favorited ? blackHeartIcon : whiteHeartIcon;

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => setFavorited(!favorited) }
        src={ imageSource }
      >
        <img src={ imageSource } alt="Botão de favorito" />
      </button>
    </div>
  );
}
