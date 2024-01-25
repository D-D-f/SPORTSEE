export interface PerformanceProps {
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

export interface SessionProps {
    userId: number,
    sessions: [
        {
            day: number,
            sessionLength: number
        }],
}

export interface ActivityProps {
    userId: number,
        sessions: [
        {
            day: string,
            kilogram: number,
            calories: number
        }],
}

export interface MainDataProps {
    id: number,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    },
    todayScore: number,
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}

