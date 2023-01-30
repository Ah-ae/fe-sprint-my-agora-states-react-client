import { useState, useEffect } from "react";
import DiscussionList from "./components/DiscussionList";
import Form from "./components/Form";
import getAgoraStatesDiscussions from "./getData";
// import { Form, DiscussionList } from "./components";

function App() {
  const [agoraStatesDiscussions, setAgoraStatesDiscussions] = useState([]);

  // * graphql 이용해 데이터 받아오기
  useEffect(() => {
    getAgoraStatesDiscussions()
      .then((data) => {
        if (data) {
          setAgoraStatesDiscussions(data.repository.discussions.edges);
          // setViewer(data.viewer);
        }
      })
      .catch((error) => {
        console.log(Error, error);
      });
  }, []);

  // * fetch
  const domain = "http://localhost:4000";

  // const getAgoraStatesDiscussions = async () => {
  //   const response = await fetch(
  //     domain +
  //       "/discussions?" +
  //       new URLSearchParams({
  //         limit: 10,
  //         page: 1,
  //       })
  //   );
  //   const data = await response.json();
  //   setAgoraStatesDiscussions(data);
  // };

  // useEffect(() => {
  //   getAgoraStatesDiscussions()
  // }, []);

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
      <li className="discussions__item">
        <ul className="discussions__question__answer__container">
          <DiscussionList
            // className="discussions__container"
            list={agoraStatesDiscussions}
            deleteDiscussion={deleteDiscussion}
          />
        </ul>
      </li>
      {/* <div className="pagination__wrapper"></div> */}
      {/* </section> */}
    </main>
  );
}

export default App;
