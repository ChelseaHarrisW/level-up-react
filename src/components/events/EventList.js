import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getEvents, deleteEvent, leaveEvent, joinEvent } from "./EventManager.js"

export const EventList = (props) => {
    const [events, setEvents] = useState([])
    const [refreshState, setRefreshState] = useState(false)
    const history = useHistory()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <>
                        <section key={`event--${event.id}`} className="event">
                            <div className="event__description">{event.description} by {event.organizer.user.first_name} {event.organizer.user.last_name} on {event.date} at {event.time}</div>
                        </section>
                        <button><Link to={`/events/${event.id}/edit`}>edit</Link></button><button onClick={e => deleteEvent(event.id, setRefreshState)}>Delete</button>
                        {
                            event.joined === true ?
                                <button onClick={() => { 
                                    leaveEvent(event.id, setRefreshState)
                                    .then(() => {
                                        getEvents().then(data => setEvents(data))
                                    })
                                 }}
                                 >Leave</button> :
                                <button onClick={() => {
                                    joinEvent(event.id, setRefreshState)
                                        .then(() => {
                                            getEvents().then(data => setEvents(data))
                                        })
                                }}
                                >Join</button>
                        }

                    </>
                })
            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/events/new" })
                }}
            >Register New Event</button>
        </article>
    )
}