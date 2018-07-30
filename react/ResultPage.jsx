import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ResultTable from './ResultTable'

import {Toolbar} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FilterListIcon from 'material-ui-icons/FilterList';

// Importing the JSON file here apparently kicks in the loaders. This all magic. :(
import '../data/results.json'
const jsonData = require('../data/results.json');
const filteredData = jsonData.filter(function (el) {
    return el.name.match(/TSH/);
});

class ResultPage extends React.Component {

    render (){
        return (
            <MuiThemeProvider>
                <div>
                    <Toolbar>
                        <div>
                            Test results
                        </div>
                        <div>
                            <IconButton aria-label="Filter list">
                                <FilterListIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                    <ResultTable data={filteredData}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ResultPage;