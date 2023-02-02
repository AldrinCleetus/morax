import { Month } from "@mantine/dates";
import dayjs from "dayjs";

// Takes in an input number and return the corresponding month array

export function getMonth(monthId:number = dayjs().month()){
    console.log("Getting Month")

    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year,monthId,1)).day()
    
    let currentMonthCount = 0 - firstDayOfMonth

    const dayMatrix = new Array(5).fill([]).map(e =>{
        return new Array(7).fill(null).map(day =>{
            currentMonthCount++
            return dayjs(new Date(year, monthId, currentMonthCount))
        })
    })

    return dayMatrix

}