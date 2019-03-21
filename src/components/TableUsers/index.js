import React from 'react';
import PropTypes from 'prop-types';
import { Table, Spin } from 'antd';

export default function TableUsers({users, columns}) {
    if (!users.loaded) return <div>loading...</div>;

    return (<Spin spinning={users.submit}>
        <Table
            dataSource={users.data}
            columns={columns}
            rowKey={(user) => user.id}
            pagination={false}
        />
    </Spin>);
}

TableUsers.propTypes = {
  users: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
};