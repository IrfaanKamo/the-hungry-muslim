## The Hungry Muslim API

### Typescript
This project makes use of typescript as a locally installed dev dependency. The tsconfig file has been updated to specify a build and src directory.

### Spoonacular
This is the API that we call to get data about food related queries. We make a call to the API using the `axios` library and receive a response which we then manipulate and map to a local entity which is passed out as a json object.

### Configuration
We have added a `.env` configuration file which handles project level configurations such as API keys. These configurations are initialized in the `config.ts` file and then exported for use within the project.

### Express Server
Our project runs as a local server which serves the halaal product data. To achieve this, we have used the `express` library. This meant us having to creating a routing structure as well as a `server.ts` file which initializes the server.  
Express makes use of routing which is defined by a `routes` folder which calls default exported controller functions.

### Dockerising
We make use of a Dockerfile to containerise the API for deployment.

### Starting the API
- Run `docker build .` to build the Dockerfile contents.
- Run `docker run -p 6060:6060 <image_hash>` to start up the container.
- The container should indicated that the server is running on port 6060.