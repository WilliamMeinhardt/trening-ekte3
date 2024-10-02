import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const trainer = pgTable("Trainers", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
});

export const user = pgTable("Users", {
    id: serial("id"),
    name: text("name"),
    email: text("email"),
});

export const workouts = pgTable("GroupWorkout", {
    id: serial("id"),
    title: text("title"),
    description: text("description"),
    eventDateTime: timestamp("event_date_time"),
})