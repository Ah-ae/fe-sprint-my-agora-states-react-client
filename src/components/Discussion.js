function Discussion({ discussion, deleteDiscussion }) {
  const { id, author, answer, url, createdAt, title } = discussion;
  const { login: authorName, avatarUrl } = author;

  return (
    <li className="discussions__item">
      <ul className="discussions__question__answer__container">
        <li className="discussion__question">
          <div className="discussion__avatar--wrapper">
            <img
              className="discussion__avatar--image"
              src={avatarUrl}
              alt={`avatar of ${authorName}`}
            />
          </div>
          <div className="discussion__content">
            <div className="discussion__information__wrapper">
              <div className="discussion__information">
                <span className="discussion__author">{authorName}</span>
                <span className="discussion__createdAt">
                  {new Date(createdAt).toLocaleString()}
                </span>
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
                {answer && 1}
              </span>
            </div>
          </div>
        </li>
        {answer && (
          <li className="discussion__answer">
            <div className="discussion__avatar--wrapper">
              <img
                className="discussion__avatar--image"
                src={answer.author.avatarUrl}
                alt={`avatar of ${answer.author.login}`}
              />
            </div>
            <div className="discussion__content">
              <div className="discussion__information__wrapper">
                <div className="discussion__information">
                  <span className="discussion__author">
                    {answer.author.login}
                  </span>
                  <span className="discussion__createdAt">
                    {new Date(answer.createdAt).toLocaleString()}
                  </span>
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
                <a href={answer.url}></a>
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
        )}
      </ul>
    </li>
  );
}

export default Discussion;
