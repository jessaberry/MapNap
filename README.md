# Lorem Ipsum (Application to be Named)

### Project description:

[//]: # (Mapnap is a mobile app designed for anyone looking to manage a busy schedule. It is designed to manage daily routines and notify users on time-based and location-based events in response to stored user data. Location and time triggers, settings, associated events, and usage data will be stored in Mapnap's database. Additional features &#40;depending on time&#41; include theme support, snoozing options, and social media integration.)
**lorem ipsum** is a website designed for travel lovers to plan and organize their itineraries and travel memories.
The users can plan and organize their upcoming trips in map or calendar view, and, during or after the trip, add media files to create a memory album.
The users can then share their trip with their friends over the social media. 


### Project task requirements:
##### Minimal requirements
1. The application must allow users to create, update, and delete an _itinerary_
2. The application must allow users to create, update, and delete an _experience_ (e.g., accommodation, attraction, dining, etc.) within an itinerary, and each experience could contain information such as starting / ending time and location as well as participates. 
3. The application must allow users to import media files (e.g., images, documents, or movies, etc.) to an experience as _memories_
4. The application must allow users to share itineraries, experiences, and memories on social media

#### Standard requirements
1. The application should be able to show the itinerary and memories in calendar view and a map view
2. The application should be able search for Point of Interest (POI) by name (using Google Place API or similar API services)
3. The application should automatically extract metadata in the media files (e.g., exif, etc.) and  during the media import process
4. The application should provide location-aware weather forecast information for upcoming experiences
5. The application should allow the users to add and confirm other users as a friend who can be added as a participant in itineraries and experiences
6. The application should allow the user to budget their itinerary, by allowing an optional cost/price entry when an experience is added

#### Stretch requirements
1. The application could allow users to set itinerary, experience, and memory to private
2. The application could allow users to track and provide analytics such as expenses by itinerary or by experience
3. The application could allow users to query and save transportation details between the location of experiences



### Task breakdown:
#### Task 1: Create an Itinerary 
- Select _Create a new itinerary_ from the menu
- Provide a name, short description, travel dates, and destination of the itinerary
- Optional: Add a travel companion to the itinerary
- Confirm the itinerary detail

#### Task 2: Add an Experience to an Itinerary in the Calendar View
- Select an existing itinerary or create a new one (Follow the flow in _Create an Itinerary_)
- Select the date and start and end time of the Experience
- Select the starting and ending location of the Experience; the user might search for an POI as the location
- Select a name and description of the Experience
- Optional: Add an participant to the experience; if the participant is not already in the itinerary, the application will add the participant to the itinerary automatically   
- Optional: Add reservation details to the experience (such as booking confirmation code, and ticket QR Code, etc.)
- Optional: Add expense related to the experience
- Confirm the experience detail


[//]: # ()
[//]: # (### Project task requirements:)

[//]: # (##### Minimal requirements)

[//]: # (1. The application must display a notification when a specific location is reached.)

[//]: # (2. The application must display a notification at a specified time.)

[//]: # (3. The application must support recurring triggers for notifications.)

[//]: # (4. The application must provide alarm/notification functionality for events.)

[//]: # (5. The application must allow users to add, update, and delete triggers and events.)

[//]: # ()
[//]: # (##### Standard requirements)

[//]: # (1. The application should enable users to create workflows or sequences of actions.)

[//]: # (2. The application should support snooze and priority settings for notifications.)

[//]: # (3. The application should include user authentication and authorization features.)

[//]: # (4. The application should provide the option to share triggers and events with friends.)

[//]: # (5. The application should generate analytics reports summarizing actions such as snooze and cancel.)

[//]: # (6. The user should be able to see a summary of their tasks and time spent on each task with a relevant visual &#40;eg. Bar chart, Line Chart&#41;)

[//]: # (7. The application should be able to record and store task specific data for eg. time, location, duration.)

[//]: # ()
[//]: # (##### Stretch requirements)

[//]: # (1. The application could include support for music events, such as playing a specific song as a notification.)

[//]: # (2. The application could adapt its behavior based on user actions, such as snoozing or taking specific actions.)

[//]: # (3. The application could offer customization options for themes and visual appearance.)

[//]: # ()
[//]: # (### Task breakdown:)

[//]: # (##### Task 1: Location based triggers)

[//]: # (- Point of interest &#40;POI&#41;: type in address or name a point of interest)

[//]: # (- Map view: image of map with marker on POI)

[//]: # (- Customization: user can rename POI &#40;i.e. "Home", "Work"&#41;)

[//]: # (- Confirmation: user confirms POI and whether it's one-time or recurring)

[//]: # ()
[//]: # (##### Task 2: Alarm / notification event)

[//]: # (- Threshold: set a reminder &#40;i.e. alarm that triggers 2 minutes before event&#41; & select option of being alerted at a location or time)

[//]: # (- Arrival: sends a notification &#40;pop-up&#41; whenever the trigger is fired)

[//]: # (- Type: choose to set up one-time or recurring notifications)

[//]: # (- Confirmation & cancellations: ability to modify the next event when alarmed)

[//]: # ()
[//]: # (### Prototypes)

[//]: # ()
[//]: # (1. Time-Based trigger feature. )

[//]: # (![IMG_3240 2]&#40;https://github.com/jessaberry/MapNap/assets/64464531/af5be1d1-9130-4049-a593-e52ee8e7e926&#41;)

[//]: # ()
[//]: # (2. Alarm/Notification events feature.)

[//]: # (![20230522_204602]&#40;https://github.com/jessaberry/MapNap/assets/64464531/81ce569e-fcc4-4c44-b91a-5ccab2741c25&#41;)
