import * as axios from 'axios';
import queryBuilder from 'gql-query-builder';

const URL = 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex';
export default async (fields) => {
  const query = queryBuilder({
    type: 'query',
    operation: 'allUsers',
    variables: {first:20},
    fields
  });

  const response = await axios.post(URL, query);
  return {
    data: response.data.data.allUsers
  };
};