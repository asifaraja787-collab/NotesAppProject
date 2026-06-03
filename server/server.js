// import dotenv from "dotenv";

// dotenv.config();

// import app from "./app.js";
// import connectDB from "./config/db.js";

// connectDB();

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server running on port ${process.env.PORT}`
//   );
// });

import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

import connectDB from "./config/db.js";

connectDB();

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
console.log("KEY:", process.env.CLOUDINARY_API_KEY);