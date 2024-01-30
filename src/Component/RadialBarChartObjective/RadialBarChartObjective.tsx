import {RadialBarChart, Legend, RadialBar, ResponsiveContainer} from "recharts";
import CustomLegendScore from "../../Custom/CustomLegendScore/CustomLegendScore.tsx";

const RadialBarChartObjective = ({dataOriginal}) => {
    const { data } = dataOriginal;
    const newData = [];
    let score;

    if(data) {
        if (data.todayScore === undefined) {
            score = data.score
        } else {
            score = data.todayScore
        }

        newData.push({
            userId: data.id,
            todayScore: score * 100
        })
        newData.push({
            userId: data.id,
            todayScore: 100,
            fill: '#ffffff00'
        })
    }

    return (
        <ResponsiveContainer width={"30%"} height={300} style={{backgroundColor: "var(--backgroundGray)", borderRadius: "5px"}}>
            <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={newData} >
                <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' style={{border: "1Px solid blue"}} />
                <Legend content={<CustomLegendScore />} />
            </RadialBarChart>
        </ResponsiveContainer>

    )
}

export default RadialBarChartObjective;