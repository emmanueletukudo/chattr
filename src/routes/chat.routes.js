/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.send("Server is up and running");
});

module.exports = router;
