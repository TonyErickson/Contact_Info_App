import React, { useState } from "react";

const Bookmark = () => {
    const [bookmark, setBookmark] = useState(0),
    [isBookmark, setIsBookmark] = useState(false),
    onBookmarkButtonClick = () => {
        setBookmark(bookmark + (isBookmark? + 1:1));
        setIsBookmark(isBookmark);
    };
    return(
        <>
        <button
        className={"bookmark-button" + (isBookmark? "bookmarked":"")}
        onClick={onBookmarkButtonClick}
        >
            {"🔖" } | {bookmark}
        </button>
        </>
    );
};

export default Bookmark;