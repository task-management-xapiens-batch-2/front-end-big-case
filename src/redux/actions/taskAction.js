import { urlConfigs } from "../../configs/urlConfigs";
import { GET_ALL_TASK } from "./typeActions";

export const getTask = async (dispatch, getState, api) => {
  const _query = {
    query: `{
            findAllProjectPlanner {
              id
              assignee
              title
              description
              status
              attachment
              is_read
              start_date
              due_date
            }
          }`,
  };

  await api
    .post(urlConfigs.graph, _query)
    .then((res) => {
      dispatch({
        type: GET_ALL_TASK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
