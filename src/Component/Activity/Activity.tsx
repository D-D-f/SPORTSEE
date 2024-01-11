import "./Activity.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CustomTooltip from "../Custom/CustomTooltip.tsx";
import CustomAxisTick from "../Custom/CustomAxisTick.tsx";
import CustomLegend from "../Custom/CustomLegend.tsx";
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

    console.log(data.data.sessions.length)

    return (
        <div>
            <BarChart
                width={700}
                height={300}
                data={data.data.sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                barGap={10}
            >
                <CartesianGrid strokeDasharray="3 3" verticalPoints={[0]}  />
                <XAxis dataKey={"day"} tick={<CustomAxisTick />} />
                <YAxis orientation="right"  />
                <Tooltip wrapperStyle={{...styleTooltip}} content={<CustomTooltip />} />
                <Legend content={<CustomLegend />}/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[20, 20, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[20, 20, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default Activity;