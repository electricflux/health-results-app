import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'

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
            <Table>
                <TableHeader>
                    <TableRow>
                        {keys.map((item, index) => (
                            <TableHeaderColumn key={index}>{item}</TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.state.data.map((item,index1) => (
                        <TableRow key={index1}>
                            {keys.map((key,index2) => (
                                <TableRowColumn key={index2}>{item[key]}</TableRowColumn>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default ResultTable;