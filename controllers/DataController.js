const DataSource = require("../models/DataModel");

const _ = require("lodash");

const getAllData = async (req, res) => {
  try {
    let endYear = Number.parseInt(req.query?.end_year || 0);

    let resData;
    if (endYear) {
      resData = await DataSource.find({ end_year: endYear });
    } else {
      resData = await DataSource.find();
    }
    res.status(200).send(resData);
  } catch (error) {
    res.status(500).send({ detail: "Error occurred.", error: String(error) });
  }
};

const allSummary = async (req, res) => {
  let endYear = Number.parseInt(req.query?.end_year || 0);

  let data;

  if (endYear) {
    data = await DataSource.find({ end_year: endYear });
  } else {
    data = await DataSource.find();
  }

  let resData = {};
  resData.total_records = data.length;

  let fields = {
    total_topics: "topic",
    total_countries: "country",
    total_sources: "source",
    total_sector: "sector",
  };

  for (let field in fields) {
    let temp;
    temp = new Set(data.map((i) => i[fields[field]]));
    resData[field] = temp.size;
  }

  res.status(200).send(resData);
};

const pieChartData = async (req, res) => {
  let startYear = Number.parseInt(req.query?.start_year || 0);

  let data;

  if (startYear) {
    data = await DataSource.find({ start_year: startYear });
  } else {
    data = await DataSource.find();
  }

  sector = _.countBy(data.map((i) => i?.sector));
  country = _.countBy(data.map((i) => i?.country));
  pestle = _.countBy(data.map((i) => i?.pestle));
  year = _.countBy(data.map((i) => i?.start_year));

  let resData = {
    sector: _.countBy(data.map((i) => i?.sector)),
    country: _.countBy(data.map((i) => i?.country)),
    pestle: _.countBy(data.map((i) => i?.pestle)),
    year: _.countBy(data.map((i) => i?.start_year)),
  };

  res.status(200).send(resData);
};

const lineChartData = async (req, res) => {
  let startYear = Number.parseInt(req.query?.start_year || 0);

  let data;

  if (startYear) {
    data = await DataSource.find({ start_year: startYear });
  } else {
    data = await DataSource.find();
  }

  let years = _.uniq(data.map((i) => i?.start_year));

  data = _.sortBy(data, ["start_year"]);

  let resData = {
    start_years: years,
    intensity: [],
    likelihood: [],
    relevance: [],
  };

  years.forEach((year) => {
    let yearData = _.filter(data, { start_year: year });
    resData.intensity.push(_.mean(yearData.map((i) => i?.intensity)));
    resData.likelihood.push(_.mean(yearData.map((i) => i?.likelihood)));
    resData.relevance.push(_.mean(yearData.map((i) => i?.relevance)));
  });

  res.status(200).send(resData);
};

const yearSummary = async (req, res) => {
  let startYear = Number.parseInt(req.query?.start_year || 0);

  let data;

  if (startYear) {
    data = await DataSource.find({ start_year: startYear });
  } else {
    data = await DataSource.find();
  }

  let resData = {
    total_records: { value: data.length },
    unique_sector: { value: _.uniqBy(data, "sector")?.length },
    unique_source: { value: _.uniqBy(data, "source")?.length },
    unique_countries: { value: _.uniqBy(data, "country")?.length },
    avg_intensity: {
      value: _.meanBy(data, "intensity"),
      min: _.minBy(data, "intensity")?.intensity,
      max: _.maxBy(data, "intensity")?.intensity,
    },
    avg_likelihood: {
      value: _.meanBy(data, "likelihood"),
      min: _.minBy(data, "likelihood")?.likelihood,
      max: _.maxBy(data, "likelihood")?.likelihood,
    },
    avg_relevance: {
      value: _.meanBy(data, "relevance"),
      min: _.minBy(data, "relevance")?.relevance,
      max: _.maxBy(data, "relevance")?.relevance,
    },
  };

  res.status(200).send(resData);
};

const uniqueData = async (req, res) => {
  let data = await DataSource.find();

  let resData = {
    sector: _.uniqBy(data, "sector").map((i) => i?.sector),
    source: _.uniqBy(data, "source").map((i) => i?.source),
    country: _.uniqBy(data, "country").map((i) => i?.country),
    pestle: _.uniqBy(data, "pestle").map((i) => i?.pestle),
    start_year: _.uniqBy(data, "start_year").map((i) => i?.start_year),
    end_year: _.uniqBy(data, "end_year").map((i) => i?.end_year),
  };

  res.status(200).send(resData);
};

module.exports = {
  getAllData,
  allSummary,
  pieChartData,
  lineChartData,
  yearSummary,
  uniqueData,
};
