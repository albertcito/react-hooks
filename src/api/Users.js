import * as axios from 'axios';
import queryBuilder from 'gql-query-builder';
import response from './Response';

const URL = 'http://127.0.0.1:8000/graphql/superadmin';
export default async (fields) => {
  const query = queryBuilder({
    type: 'query',
    operation: 'users',
    fields
  });

  const payload = await axios.post(URL, query);
  return response.format(payload, 'users');
};