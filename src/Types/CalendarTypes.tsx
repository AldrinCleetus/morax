import dayjs from "dayjs"
import { Dispatch, RefObject, useState } from 'react';

export type event = {
    startDate: Date | null
    endDate: Date| null
    title: string
    image: string | undefined
    color: string
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
    SetImage :(newImage: string | undefined) => void
    SetColor: (color: string) => void
    SetModalStatus: Dispatch<React.SetStateAction<boolean>>
    UpdateEventDate: (day: Date| null, property: "startDate" | 'endDate') => void
    UpdateEventTitle: (event:string) => void
    AddEventToCalendar: ()=> void
}

export type CalenderEditorProps = {
    CalendarTypeSetFunction: Dispatch<React.SetStateAction<string>>,
    TitleSetFunction: Dispatch<React.SetStateAction<string>>,
    DeleteEvent: (id: number) => void,
    UpdateEvent: (event: event, id: number)=> void,
    SetBackgroundImage: Dispatch<React.SetStateAction<string | undefined>>
    DownloadScreenshot: (referenceElement: RefObject<HTMLDivElement>) => void,
    imageReference: React.RefObject<HTMLDivElement>,
    BackgroundImage: string | undefined,
    events: event[],
    isDownloading: boolean
}

export type MonthViewProps = {
    title: string,
    events: event[],
    backgroundImage: string | undefined,
    AddEvent: (day:Date)=> void,
    imageReference: React.RefObject<HTMLDivElement>
}