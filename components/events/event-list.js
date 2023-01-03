import EventItem from "./event-item";
import classes from './event-list.module.css';

export default function EventList(props) {
    const { events } = props;

    return (
        <ul className={classes.list}>
            {
                events.map(event => 
                    <EventItem 
                        key={event.id}
                        title={event.title} 
                        image={event.image} 
                        date={event.date} 
                        location={event.location} 
                        id={event.id} 
                    />)
            }
        </ul>
    )
}