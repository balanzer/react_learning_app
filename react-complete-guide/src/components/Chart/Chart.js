import './Chart.css'
import ChartBar from "./ChartBar";


const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxTotal = Math.max(...dataPointsValues);
    console.log('Chart total dataPointsValues : ' + dataPointsValues.length);

    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => <ChartBar maxValue={maxTotal} label={dataPoint.label}
                                                       value={dataPoint.value} key={dataPoint.label}/>)}
    </div>);
}
export default Chart;