# Bookmarks

This directory contains everything to do with bookmarks,
which are sssociations between users and entities such as racers and events.

## Database design

Bookmarks are maintained in one large collection named "bookmarks".
Although yes, bookmarks do belong to users,
and could conceivably have been stored as a per-user collection,
this design allows us to query the entire collection for all bookmarks for a particular entity.
