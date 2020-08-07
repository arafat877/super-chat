const router = require("express").Router();

router.get("/", (res,req)=>{
    res.json({posts:{title:"my post", desc:{"random data for logged in users"}}})
})

module.exports = router