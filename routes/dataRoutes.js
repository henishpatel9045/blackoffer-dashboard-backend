const express = require("express");
const router = express.Router();

const dataController = require("../controllers/DataController");

router.route("/all").get(dataController.getAllData);
router.route("/data").get(dataController.allSummary);
router.route("/pie").get(dataController.pieChartData);
router.route("/line").get(dataController.lineChartData);
router.route("/year-summary").get(dataController.yearSummary);
router.route("/unique").get(dataController.uniqueData);

module.exports = router;
