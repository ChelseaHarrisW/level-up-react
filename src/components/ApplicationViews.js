import React from "react"
import { Route } from "react-router-dom"
import { EditEvent } from "./events/EditEvent.js"
import { EventForm } from "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import { EditGame } from "./game/EditGame.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route exact path="/events/new">
                <EventForm />
            </Route>
            <Route exact path="/events/:eventId(\d+)/edit">
                <EditEvent />
            </Route>
            <Route exact path="/games/:gameId(\d+)/edit">
                <EditGame />
            </Route>

        </main>
    </>
}