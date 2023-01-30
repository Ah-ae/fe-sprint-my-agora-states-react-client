function DiscussionWithAnswer({ discussion, deleteDiscussion }) {
  const { id, author, answer, url, createdAt, title } = discussion;
  const {
    author: answerAuthor,
    createdAt: answerCreatedAt,
    url: answerUrl,
  } = answer;

  const parsedDate = Date.parse(createdAt);
  const localeDate = new Date(parsedDate).toLocaleString();

  const parsedDate2 = Date.parse(answerCreatedAt);
  const localeDate2 = new Date(parsedDate2).toLocaleString();

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
                <span className="discussion__createdAt">{localeDate}</span>
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
                src="./img/chat.svg"
                alt="chat icon"
              />
              <span className="discussion__answered--number-of-answer">
                {answer ? 1 : null}
              </span>
            </div>
          </div>
        </li>
        <li className="discussion__answer">
          <div className="discussion__avatar--wrapper">
            <img
              className="discussion__avatar--image"
              src={answerAuthor.avatarUrl}
              alt={`avatar of ${answerAuthor.login}`}
            />
          </div>
          <div className="discussion__content">
            <div className="discussion__information__wrapper">
              <div className="discussion__information">
                <span className="discussion__author">{answerAuthor.login}</span>
                <span className="discussion__createdAt">{localeDate2}</span>
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
            <p className="discussion__title">
              <a href={answerUrl}></a>
            </p>
            <div className="discussion__answered">
              <img
                className="discussion__answered--chat-icon"
                src="img/chat.svg"
              />
              <span className="discussion__answered--number-of-answer"></span>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default DiscussionWithAnswer;
