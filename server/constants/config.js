const allowedOrigins = [
  "https://chatzone-frontend-1.onrender.com",
  "http://localhost:4173",
];
if (process.env.CLIENT_URL && process.env.CLIENT_URL.trim()) {
  allowedOrigins.push(process.env.CLIENT_URL.trim());
}
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATZONE_TOKEN = "chatzone-token";

export { corsOptions, CHATZONE_TOKEN };
