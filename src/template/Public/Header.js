import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { PublicContext } from 'template';

const menu = [
  {
    url: '/',
    text: 'Basic'
  },
  {
    url: '/users',
    text: 'Users'
  },
  {
    url: '/usercolumns',
    text: 'User Columns'
  },
  {
    url: '/effect',
    text: 'Effects'
  },
  {
    url: '/effectcleanup',
    text: 'Effect Cleanup'
  },
];

export default function Header() {
  const { addGlobalMsg } = useContext(PublicContext);
  return (<div>
    <Menu mode="horizontal" selectable={false}>
      {
        menu.map(({url, text}) => <Menu.Item key={url}>
        <Link to={url}>
          {text}
        </Link>
      </Menu.Item>)
      }
      <Menu.Item
        key="addMsg"
        onClick={() => addGlobalMsg('This is a randon msg: ' + Math.random())}
      >
        Add
      </Menu.Item>
    </Menu>
  </div>);
}