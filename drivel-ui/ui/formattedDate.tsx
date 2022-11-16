import {format} from "date-fns";

export function FormattedDate(props: { date: Date; }) {

    return (
        <span>{format(props.date, "yyyy.MM.dd")}</span>
    )

}