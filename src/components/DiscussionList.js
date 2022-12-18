import DiscussionQuestion from "./DiscussionWithoutAnswer";
import DiscussionAnswer from "./DiscussionWithAnswer";

function DiscussionList({ list = [], deleteDiscussion }) {
  const listItems = list.map((list) => {
    return list.answer ? (
      <DiscussionAnswer
        key={list.id}
        discussion={list}
        deleteDiscussion={deleteDiscussion}
      />
    ) : (
      <DiscussionQuestion
        key={list.id}
        discussion={list}
        deleteDiscussion={deleteDiscussion}
      />
    );
  });

  return <ul className="discussions__list">{listItems}</ul>;
}

export default DiscussionList;
