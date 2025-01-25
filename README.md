# SpaceX Starlink Satellite Demo / Angular & NgRx Signals / Astro UX Design System

The purpose of this project is to display my skills in Angular, particularly in utilizing a REST API to acquire data from an outside endpoint and caching the data as entities using the NgRx Signals package.

The main page of the application is a sorted table that displays information available on Starlink satellites. Once a successful network request is completed the data is cached using NgRx Signals and recalled using the cache as the user navigates through the applications routing.

From the main page the user can also choose to view spacetrack information for each satellite. This routes the user to a new page with a table displaying this additional data. The signal store is used to fetch the specific entity and relevant information, but a fallback is in place to make a network request for a single satellite based on the passed-in id if the signal store is empty (if the user refreshes or navigates to the direct URL). The user can also navigate back to the main page, which will only hit the endpoint again if the signal store is empty.

## Technologies/APIs Used

- [SpaceX Endpoint for Starlink Satellites](https://github.com/r-spacex/SpaceX-API/tree/master/docs/starlink/v4)

  - SpaceX Starlink satellite data

- [NgRx Signals](https://ngrx.io/guide/signals)

  - State management package that stores data using the signals

- [Astro UXDS](https://astrouxds.com/)

  - Astro UX Design System

- [AG Grid](https://www.ag-grid.com/)
  - AG Grid with Astro theme
