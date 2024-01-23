import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const UseCallApi = () => {
    const apiUrl = `http://localhost:3000/user/12`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data]
}

export const UseCallApiActivity = () => {
    const apiUrl = `http://localhost:3000/user/12/activity`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data]
}

interface Performance {
    userId: number,
    kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    },
    data: [
        {
            value: number,
            kind: number
        }
    ]
}

export const UseCallApiPerformance = (): Performance[] | string => {
    const apiUrl = `http://localhost:3000/user/12/performance`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data;
}

export const UseCallApiSession = () => {
    const apiUrl = `http://localhost:3000/user/12/average-sessions`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data
}