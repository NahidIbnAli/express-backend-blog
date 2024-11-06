exports.createBlog = (req, res) => {
  res.json({ message: "Blog created successfully" });
};

exports.readBlog = (req, res) => {
  res.json({ message: "Blog read successfully" });
};

exports.updateBlog = (req, res) => {
  res.json({ message: "Blog updated successfully" });
};

exports.deleteBlog = (req, res) => {
  res.json({ message: "Blog deleted successfully" });
};
