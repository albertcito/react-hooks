import { Basic, UniqueID, Users, UserColumns, Effect, EffectCleanup } from 'app';

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
  {
    Component: Effect,
    path: '/effect',
  },
  {
    Component: EffectCleanup,
    path: '/effectcleanup',
  },
];
