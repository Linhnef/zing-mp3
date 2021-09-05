import React, { useEffect, useState } from "react"
import { useAppApiClient } from "../hooks/useAppApiClient"
import useAsync from "../hooks/useAsync"
import { Event } from "../services/api/types/Event"
import EventItem from "./item/EventItem"
import ListContainer from "./item/ListContainer"

function EventList() {
  const api = useAppApiClient()
  const [events, setEvents] = useState<Event[]>([])
  const getEvent = useAsync(async () => {
    const response = await api.getEvent()
    if (!response) return
    setEvents(response)
  })
  useEffect(() => {
    getEvent.run()
  }, [])
  return (
    <ListContainer>
      {events.map((item, index) => (
        <EventItem key={index} event={item} />
      ))}
    </ListContainer>
  )
}

export default EventList
