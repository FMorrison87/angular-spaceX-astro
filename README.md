# SpaceX Starlink Satellite Demo / Angular & NgRx Data

The purpose of this project is to display some of my skills in Angular, particularly in utilizing a REST API to acquire data from an outside endpoint and caching the data as entities using the NgRx Data package.

The main page of the application is a paginated table that displays information available on Starlink satellites. Once a successful network request is completed the data is cached using NgRx Data and recalled using the cache as the user navigates through the applications routing. A network request will only re-fetch the data if the entity cache is empty.

From the main page the user can also choose to view spacetrack information for each satellite. This routes the user to a new page with a table displaying this additional data. The entity cache is used to fetch the specific entity and relevant information, but a fallback is in place to make a network request for a single entity based on the passed-in id if the cache is empty (if the user refreshes or navigates to the direct URL). The user can also navigate back to the main page, which will only hit the endpoint again if the entity cache is empty.

## Technologies/APIs Used

- [SpaceX Endpoint for Starlink Satellites](https://github.com/r-spacex/SpaceX-API/tree/master/docs/starlink/v4)

  - SpaceX Starlink satellite data

- [NgRx Data](https://ngrx.io/guide/data)

  - State management package that stores data using the entity pattern

- [PrimeNg](https://primeng.org/)

  - Angular UI suite

- [PrimeFlex](https://primeflex.org/)
  - CSS Utility library designed to pair with PrimeNg
