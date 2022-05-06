export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getSingleEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: `POST`, 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(event)
    })
        .then(response => response.json())
}
export const updateEvent = (event, eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "PUT", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(event)
    })
}
export const deleteEvent = (eventId, setRefreshState) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
    .then(() => setRefreshState(true))
}

export const leaveEvent = (eventId, setRefreshState) => {
    return fetch(`http://localhost:8000/events/${eventId}/leave`, {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
    .then(() => setRefreshState(true))
}
export const signUpEvent = (eventId, setRefreshState) => {
    return fetch(`http://localhost:8000/events/${eventId}/signup`, {
        method: "POST", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
    .then(() => setRefreshState(true))
}