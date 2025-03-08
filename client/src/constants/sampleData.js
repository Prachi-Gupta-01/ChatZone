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
