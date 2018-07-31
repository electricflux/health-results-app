import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ResultTable from './ResultTable'
import _ from 'lodash'

import AutoComplete from 'material-ui/AutoComplete';

// Importing the JSON file here apparently kicks in the loaders. This all magic. :(
import jsonData from '../data/results.json'


class ResultPage extends React.Component {

    constructor (props){
        super(props);
        const testNames = _.uniq(_.map(jsonData, 'name'));
        this.state = {testNames: testNames, selectedTest : '', filteredData: jsonData, dataSource: jsonData};

        // This binding is necessary to make `this` work in the callback
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        console.log('Constructor called');
    }

    handleUpdateInput(value) {
        console.log(value);
        const filteredData = this.state.dataSource.filter(function (el) {
            return el.name.startsWith(value);
        });
        console.log(filteredData.length);
        this.setState({selectedTest: value, filteredData: filteredData});
    };

    render (){
        return (
            <MuiThemeProvider>
                <div>
                    <AutoComplete
                        hintText="Type test result to filter"
                        dataSource={this.state.testNames}
                        onUpdateInput={this.handleUpdateInput}
                        floatingLabelText="Test result..."
                        fullWidth={true}
                    />
                    <ResultTable data={this.state.filteredData}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ResultPage;