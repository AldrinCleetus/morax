import dayjs from "dayjs"
import { Dispatch } from "react"

export type event = {
    startDate: Date | null
    endDate: Date| null
    title: string
}

export type DayProps = {
    id: number
    day: dayjs.Dayjs
    onClick: ()=>void 
    events?: event[]
}

export type AddEventModalProps = {
    modalStatus: boolean
    newEvent: event
    SetModalStatus: Dispatch<React.SetStateAction<boolean>>
    UpdateEventDate: (day: Date| null, property: "startDate" | 'endDate') => void
    UpdateEventTitle: (event:string) => void
    AddEventToCalendar: ()=> void
}
