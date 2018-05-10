import React from 'react';
import {Line} from 'react-chartjs'

class LineChart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        const jsonData = this.state.data;
        var width = 700, height = 300;
        var yAxis = jsonData.map(function(e) {
            return e.result;
        });
        var xAxis = jsonData.map(function(e) {
            return e.test_date;
        });

        var data = {
            labels: xAxis,
            datasets: [{
                label: 'Graph Line',
                data: yAxis,
                backgroundColor: 'rgba(0, 119, 204, 0.3)'
            }]
        };

        return (
            <div>
                <Line data={data} width={width} height={height} />
            </div>
        );
    }
}

export default LineChart;