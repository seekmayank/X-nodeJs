const express = require("express");
const app = express();

const courses = [
  { courseId: 1, name: "course1" },
  { courseId: 2, name: "course2" },
  { courseId: 3, name: "course3" },
  { courseId: 3, name: "course4" }
];
app.get("/", (req, res) => {
  res.send("Hello World New");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:courseId", (req, res) => {
  //res.send(req.params.courseId)
  const cr = courses.find(c => c.courseId === parseInt(req.params.courseId));
  if (!cr) res.status(404).send("The course id did not found");
  res.send(cr);
});

app.get("/api/posts/:year/:month", (req, res) => {
  //res.send(req.params)
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
