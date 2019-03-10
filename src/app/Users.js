import React from 'react';
import useUsers from 'use/useUsers';
import { columnsDefault, fields } from 'components/TableUsers/columns';
import TableUsers from 'components/TableUsers';

export default function Users() {
  const { users } = useUsers(fields);

  return (<div className="alignCenter bigFont">
    <h1>Users</h1>
    <TableUsers
        users={users}
        columns={columnsDefault}
    />
  </div>);
}