import React from 'react';
import { Checkbox } from 'antd';
import useUsers from 'use/useUsers';
import { columnsDefault, getColumns, fields, optionsCheckbox } from 'components/TableUsers/columns';
import TableUsers from 'components/TableUsers';

const CheckboxGroup = Checkbox.Group;
let columns = columnsDefault;

export default function UserColumns() {
  const { users, getUsers } = useUsers(fields);

  const onChange = (values) => {
    columns = getColumns(values);
    getUsers(values);
  };

  return (<div className="alignCenter bigFont">
    <h1>Users</h1>
    <CheckboxGroup
        options={optionsCheckbox}
        defaultValue={fields}
        onChange={onChange}
    />
    <TableUsers
        users={users}
        columns={columns}
    />
  </div>);
}
