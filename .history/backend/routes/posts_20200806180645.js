const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    posts: { title: "my post", desc: "random data for logged in users" },
  });
});

module.exports = router;
