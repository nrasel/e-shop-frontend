import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";

const EventPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log(allEvents);
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} data={allEvents && allEvents[0]} />
    </div>
  );
};

export default EventPage;
