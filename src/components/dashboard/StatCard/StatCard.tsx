import classes from "./statCard.module.css"

interface CardProps{
    title: string;
    value: string | number;
}

function Card({title, value}: CardProps) {
    return(
        <div className={classes.card}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default Card;