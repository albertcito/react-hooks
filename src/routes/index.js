import { Basic, UniqueID, Users, UserColumns } from 'app';

export default [
  {
    Component: Basic,
    path: '/',
  },
  {
    Component: UniqueID,
    path: '/uniqueid',
  },
  {
    Component: Users,
    path: '/users',
  },
  {
    Component: UserColumns,
    path: '/usercolumns',
  },
];
