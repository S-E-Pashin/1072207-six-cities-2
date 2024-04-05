type ButtonBookmarkProps={
  isFavorite: boolean;
}

function ButtonBookmark({isFavorite}: ButtonBookmarkProps): JSX.Element {
  return (
    <button className="place-card__bookmark-button button"
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default ButtonBookmark;