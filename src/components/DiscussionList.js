import DiscussionWithoutAnswer from "./DiscussionWithoutAnswer";
import DiscussionWithAnswer from "./DiscussionWithAnswer";

function DiscussionList({ list = [], deleteDiscussion }) {
  const listItems = list.map((el) => {
    const list = el.node;
    return list.answer ? (
      <DiscussionWithAnswer
        key={list.id}
        discussion={list}
        deleteDiscussion={deleteDiscussion}
      />
    ) : (
      <DiscussionWithoutAnswer
        key={list.id}
        discussion={list}
        deleteDiscussion={deleteDiscussion}
      />
    );
  });

  return <ul className="discussions__list">{listItems}</ul>;
}

export default DiscussionList;
