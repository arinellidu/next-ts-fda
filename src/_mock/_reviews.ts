import { _mock } from './_mock';

// ----------------------------------------------------------------------

const users = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _reviews = [
  {
    id: _mock.id(0),
    name: users[0].name,
    avatarUrl: users[0].avatarUrl,
    message: _mock.sentence(1),
    createdAt: _mock.time(1),
    users: [users[0], users[1], users[2]],
    rating: 3.5,
    helpful: 32,
    replyComment: [
      {
        id: _mock.id(1),
        userId: users[1].id,
        message: _mock.sentence(2),
        createdAt: _mock.time(2),
      },
      {
        id: _mock.id(2),
        userId: users[0].id,
        message: _mock.sentence(3),
        tagUser: users[1].name,
        createdAt: _mock.time(3),
      },
      {
        id: _mock.id(3),
        userId: users[2].id,
        message: _mock.sentence(4),
        createdAt: _mock.time(4),
      },
    ],
  },
  {
    id: _mock.id(4),
    name: users[4].name,
    avatarUrl: users[4].avatarUrl,
    message: _mock.sentence(5),
    createdAt: _mock.time(5),
    users: [users[5], users[6], users[7]],
    rating: 4.5,
    helpful: 0,
    replyComment: [
      {
        id: _mock.id(5),
        userId: users[6].id,
        message: _mock.sentence(7),
        createdAt: _mock.time(7),
      },
      {
        id: _mock.id(6),
        userId: users[7].id,
        message: _mock.sentence(8),
        createdAt: _mock.time(8),
      },
    ],
  },
  {
    id: _mock.id(7),
    name: users[8].name,
    avatarUrl: users[8].avatarUrl,
    message: _mock.sentence(9),
    createdAt: _mock.time(9),
    rating: 4.5,
    helpful: 10,
    users: [],
    replyComment: [],
  },
  {
    id: _mock.id(8),
    name: users[9].name,
    avatarUrl: users[9].avatarUrl,
    message: _mock.sentence(10),
    createdAt: _mock.time(10),
    rating: 5,
    helpful: 0,
    users: [],
    replyComment: [],
  },
];
