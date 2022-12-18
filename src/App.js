import { useState, useEffect } from "react";
import DiscussionList from "./components/DiscussionList";
import Form from "./components/Form";
// import { Form, DiscussionList } from "./components";

function App() {
  const domain = "http://localhost:4000";
  const [agoraStatesDiscussions, setAgoraStatesDiscussions] = useState([]);

  const getAgoraStatesDiscussions = (limit, page) => {
    // const response = await fetch(
    //   domain +
    //     "discussions?" +
    //     new URLSearchParams({
    //       limit,
    //       page,
    //     })
    // );
    // const data = await response.json();
    // setAgoraStatesDiscussions(data);
    fetch(domain + "/discussions/")
      .then((res) => res.json())
      .then((data) => {
        setAgoraStatesDiscussions(data);
      });
  };

  useEffect(() => {
    getAgoraStatesDiscussions();
  }, []);

  const addDiscussion = ({ title, author, bodyText }) => {
    const newDiscussionData = {
      title,
      author,
      bodyHTML: bodyText,
    };
    fetch(domain + "/discussions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 201) {
        getAgoraStatesDiscussions();
      }
    });
  };

  const deleteDiscussion = (id) => {
    fetch(domain + `/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || res.status === 204) {
        getAgoraStatesDiscussions();
      }
    });
  };

  return (
    <main>
      <h1 className="home">Home</h1>
      <Form addDiscussion={addDiscussion} />
      {/* <section className="discussion__wrapper"> */}
      <DiscussionList
        // className="discussions__container"
        list={agoraStatesDiscussions}
        deleteDiscussion={deleteDiscussion}
      />
      {/* <div className="pagination__wrapper"></div> */}
      {/* </section> */}
    </main>
  );
}

export default App;
