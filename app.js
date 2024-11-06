const express = require("express");
const app = express();

// Import routes
const blogRoutes = require("./routes/blogRoutes");

// Middleware to parse JSON
app.use(express.json());

// Use the blog routes
app.use("/api/blogs", blogRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
