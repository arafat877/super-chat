const router = require("express").Router();
const verify = require("./verifyToken")

router.get("/", verify, (req, res) => {
  res.json({
    posts: { title: "my post", desc: "random data for logged in users" },
  });
});

module.exports = router;
