const corsOptions = {
  origin: [
    "https://chatzone-frontend-1.onrender.com",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATZONE_TOKEN = "chatzone-token";

export { corsOptions, CHATZONE_TOKEN };
