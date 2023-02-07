import dayjs from "dayjs"

export type event = {
    startDate: Date | null
    endDate: Date| null
}

export type DayProps = {
    id: number
    day: dayjs.Dayjs
    onClick: ()=>void 
    events?: event[]
}
