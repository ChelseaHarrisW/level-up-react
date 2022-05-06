import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getEvents, deleteEvent, leaveEvent, signUpEvent } from "./EventManager.js"

export const EventList = (props) => {
    const [events, setEvents] = useState([])
    const history = useHistory()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
       }, [])

    return (
        <article className="events">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/events/new" })
                }}
            >Register New Event</button>
            {
                events.map(event => {
                    return <>
                        <section key={`event--${event.id}`} className="event">
                            <div className="event__description">{event.description} by {event.organizer.user.first_name} {event.organizer.user.last_name} on {event.date} at {event.time}</div>
                        </section>
                       
                    </>
                })
            }
        </article>
    )
}