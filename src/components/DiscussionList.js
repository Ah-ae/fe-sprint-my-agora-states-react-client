import Discussion from "./Discussion";

function DiscussionList({ list = [], deleteDiscussion }) {
  const listItems = list.map((el) => {
    const list = el.node;
    return (
      <Discussion
        key={list.id}
        discussion={list}
        deleteDiscussion={deleteDiscussion}
      />
    );
  });

  return <ul className="discussions__list">{listItems}</ul>;
}

export default DiscussionList;
