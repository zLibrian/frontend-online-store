import React, { useState } from 'react';
import Copy from 'clipboard-copy';
import PropTypes from 'prop-types';

import ShareIcon from '../../images/shareIcon.svg';

export default function CopyButton({ pathname, index, index2 }) {
  const [isHidden, setIsHidden] = useState(true);

  const handleClipboardCopy = () => {
    const twoSeconds = 2000;
    setIsHidden(false);
    Copy(`http://localhost:3000${pathname}`);
    setTimeout(() => setIsHidden(true), twoSeconds);
  };

  return (
    <>
      <button
        type="button"
        src={ ShareIcon }
        onClick={ handleClipboardCopy }
        data-testid={ index2 !== undefined
          ? `${index2}-horizontal-share-btn`
          : 'share-btn' }
      >
        <img
          data-testid={ `${index2 !== undefined ? index2 : index}-horizontal-share-btn` }
          src={ ShareIcon }
          alt="Botão de compartilhar"
        />
      </button>
      <div hidden={ isHidden }>
        Link copiado!
      </div>
    </>
  );
}

CopyButton.defaultProps = {
  index: 0,
};

CopyButton.propTypes = {
  pathname: PropTypes.string.isRequired,
  index: PropTypes.number,
  index2: PropTypes.number.isRequired,
};
