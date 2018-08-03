// events/event.type.ts: type definitions for events

export interface Event {
  name: string;
  date: number;
  location: string;

  // ID of a "media" object best representing this event.
  profileMedia: string;
}
