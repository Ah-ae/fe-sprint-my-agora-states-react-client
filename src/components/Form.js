import { useState } from "react";

function Form({ addDiscussion }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");

  const handleNewDiscussion = (event) => {
    // console.log(event.target); // <form> 태그 전체
    // console.log(event.target[0].value); // 0번째 <input> 태그
    event.preventDefault();
    const author = event.target[0].value;
    const title = event.target[1].value;
    const bodyText = event.target[2].value;
    addDiscussion({ author, title, bodyText });

    setAuthor("");
    setTitle("");
    setBodyText("");
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBodyText = (e) => {
    setBodyText(e.target.value);
  };

  return (
    <section className="form__container">
      <form
        action=""
        method="GET"
        id="discussion__form"
        onSubmit={handleNewDiscussion}
      >
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="author">Name : </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="ex) kimcoding"
              value={author}
              onChange={onChangeAuthor}
              required
            />
          </div>
          <div className="form__input--title">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="ex) array의 reduce 메서드 사용 시 accumulator 인자의 작동이 이해되지 않습니다."
              value={title}
              onChange={onChangeTitle}
              required
            />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">Your question : </label>
            <textarea
              id="story"
              name="story"
              placeholder="What's your question?"
              value={bodyText}
              onChange={onChangeBodyText}
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <button id="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
