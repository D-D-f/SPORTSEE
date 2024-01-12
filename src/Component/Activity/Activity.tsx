import "./Activity.css";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts';
import CustomTooltip from "../Custom/CustomTooltip.tsx";
import CustomAxisTick from "../Custom/CustomAxisTick.tsx";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Activity = () => {

    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/user/12/activity",
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    const styleTooltip = {
        backgroundColor: "#E60000",
        color: "#FFFFFF",
        fontSize: "9px",
        height: "63px",
        width: "39px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    }

    return (
        <div className={"BarChart"}>
            <BarChart
                width={735}
                height={320}
                data={data.data.sessions}
                margin={{
                    top: 50,
                    right: 20,
                    left: 20,
                    bottom: 5
                }}
                barGap={10}
            >

                <text
                    textAnchor="start"
                    dominantBaseline="hanging"
                    style={{fontWeight: "bold", color: "#74798C"}}
                >
                    Activité quotidienne
                </text>
                <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value, entry, index) => <span className='text-color'>{value}</span>} />
                <CartesianGrid strokeDasharray="3" vertical={false}  />
                <XAxis dataKey='day' tickLine={false} axisLine={false} tick={<CustomAxisTick />} />
                <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip wrapperStyle={{...styleTooltip}} content={<CustomTooltip/>}/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" yAxisId='calorie' barSize={10} radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default Activity;