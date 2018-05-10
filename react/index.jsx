import React from 'react';
import ReactDOM from 'react-dom';
// Importing the JSON file here apparently kicks in the loaders. This all magic. :(
import '../data/results.json'
import LineChart from './LineChart'
import ResultTable from './ResultTable'

const jsonData = require('../data/results.json');
const filteredData = jsonData.filter(function (el) {
    return el.name.match(/TSH/);
});

ReactDOM.render(
    <ResultTable data={filteredData}/>,
    document.getElementById('thyroid-hormone-line-chart')
);
