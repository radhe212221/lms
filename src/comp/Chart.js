import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: this.props?.data?.labels || []
                }
            },
            series: [
                {
                    name: "series-1",
                    data: this.props?.data?.count || []
                }
            ]
        };
    }

    render() {
        return (
            <div className="chart">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;