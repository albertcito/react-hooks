import { useState, useEffect } from 'react';
import getUsersApi from '../api/Users';

export default (fields) => {

  const defaultValue = {
    data: null,
    loaded: false,
    submit: false
  };

  const [users, setUsers] = useState(defaultValue);

  useEffect(() => {
    getUsers(fields);
  }, []);

  const getUsers =  async (fields) =>  {
    setUsers({...users, submit: true});
    const response = await getUsersApi(fields);
    setUsers({...users, ...response, submit:false, loaded: true});
  };

  return {
    users,
    getUsers
  };

};