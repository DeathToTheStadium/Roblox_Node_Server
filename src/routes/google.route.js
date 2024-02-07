const express = require("express");
const { ReadSheetData } = require("../controllers/google.controller");

var router = express.Router({
  mergeParams: false,
});

router.get("/google/:SheetID", ReadSheetData);

module.exports = router;
