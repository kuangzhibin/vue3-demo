import request from "../request";

function requestCNode() {
  return request.get("https://cnodejs.org/api/v1/topics");
}

export { requestCNode };
