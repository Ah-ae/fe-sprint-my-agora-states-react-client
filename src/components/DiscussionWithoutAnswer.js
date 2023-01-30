function DiscussionWithoutAnswer({ discussion, deleteDiscussion }) {
  const { id, answer, url, author, createdAt, title } = discussion;

  const parsedDate = Date.parse(createdAt);
  const localedDate = new Date(parsedDate).toLocaleString();

  return (
    <li className="discussions__item">
      <ul className="discussions__question__answer__container">
        <li className="discussion__question">
          <div className="discussion__avatar--wrapper">
            <img
              className="discussion__avatar--image"
              src={author.avatarUrl}
              alt={`avatar of ${author.login}`}
            />
          </div>
          <div className="discussion__content">
            <div className="discussion__information__wrapper">
              <div className="discussion__information">
                <span className="discussion__author">{author.login}</span>
                <span className="discussion__createdAt">{localedDate}</span>
              </div>
              <button className="discussion__information--delete--btn">
                <img
                  className="discussion__information--delete--icon"
                  src="img/trash.svg"
                  alt="delete icon"
                  onClick={() => deleteDiscussion(id)}
                />
              </button>
            </div>
            <h2 className="discussion__title">
              <a href={url}>{title}</a>
            </h2>
            <div className="discussion__answered">
              <img
                className="discussion__answered--chat-icon"
                src="img/chat.svg"
                alt="chat icon"
              />
              <span className="discussion__answered--number-of-answer">
                {answer ? 1 : null}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default DiscussionWithoutAnswer;
