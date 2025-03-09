export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: true,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "Jane boe",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];
export const sampleUsers = [
  {
    name: "John Doe",
    _id: "1",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Jane boe",
    _id: "2",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

export const sampleNotifications = [
  {
    _id: "1",
    sender: {
      name: "John Doe",

      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },
  {
    _id: "2",
    sender: {
      name: "John boe",

      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },
];
export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "dghsfd",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "my message",
    _id: "jgdjgjsg",
    sender: {
      _id: "user._id",
      name: "champu",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "dghsfd 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "my message 2",
    _id: "jgdjgjsg 2",
    sender: {
      _id: "khdk",
      name: "champu 2",
    },
    chat: "chatId",
    createdAt: "2025-03-08T13:07:30.630Z",
  },
];
export const dashboardData = {
  users: [
    {
      name: "John",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John2",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_doe2",
      friends: 20,
      groups: 5,
    },
  ],
  chats: [
    {
      name: "trio",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "john doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "trio2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "john doe2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "message hai",
      _id: "kjjdkdl",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "chaman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2025-03-09T17:33:30.630z",
    },
    {
      attachments: [
        {
          public_id: "asndn2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "message hai bhaiii",
      _id: "kjjdkdlkjhk",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "chaman2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2025-03-09T17:33:30.630z",
    },
  ],
};
