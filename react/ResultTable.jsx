import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class ResultTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        var firstObject = this.state.data[0];
        var keys = [];
        for(var k in firstObject) keys.push(k);

        return (
            <MuiThemeProvider>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {keys.map((item, index) => (
                                <TableHeaderColumn>{item}</TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.data.map((item,index1) => (
                            <TableRow>
                                {keys.map((key,index2) => (
                                    <TableRowColumn>{item[key]}</TableRowColumn>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        )
    }
}

export default ResultTable;