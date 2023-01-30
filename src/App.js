import { graphql } from "@octokit/graphql";
import { useState, useEffect } from "react";
import DiscussionList from "./components/DiscussionList";
import Form from "./components/Form";
// import { Form, DiscussionList } from "./components";

function App() {
  const [agoraStatesDiscussions, setAgoraStatesDiscussions] = useState([]);

  // * graphQL로 실시간 데이터 받아오기
  const query = `
  query {
    repository(owner: "codestates-seb", name: "agora-states-fe") {
      discussions (first: 20) {
        edges {
          node {
            id
            createdAt
            title
            url
            author {
              login
            }
            answer {
              id
              createdAt
              url
              author {
                login
              }
              bodyHTML
            }
            bodyHTML
          }
        }
      }
    }
    viewer {
      login
    }
  }
  `;
  const options = {
    headers: {
      authorization: "token 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",
    },
  };

  async function getAgoraStatesDiscussions() {
    const { repository } = await graphql(query, options);
    setAgoraStatesDiscussions(repository.discussions.edges);
  }

  useEffect(() => {
    getAgoraStatesDiscussions();
  }, []);
  console.log(agoraStatesDiscussions);

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
  //   getAgoraStatesDiscussions();
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
