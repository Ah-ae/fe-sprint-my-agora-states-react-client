import { graphql } from "@octokit/graphql";
const { REACT_APP_GITHUB_TOKEN, NODE_ENV } = process.env;

// * graphQL로 실시간 데이터 받아오기

async function getData() {
  let token;
  if (NODE_ENV === "development" || NODE_ENV === "production") {
    token = REACT_APP_GITHUB_TOKEN;
  }

  const query = `
      query {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions (first: 50) {
            edges {
              node {
                id
                createdAt
                title
                url
                author {
                  login
                  avatarUrl
                }
                answer {
                  id
                  createdAt
                  url
                  author {
                    login
                    avatarUrl
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
      authorization: `token ${token}`,
    },
  };
  const { repository, viewer } = await graphql(query, options);

  return { repository, viewer };
}

export default getData;
