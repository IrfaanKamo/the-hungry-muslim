## The Halaal Food API

### Spoonacular
This is the API that we call to get data about food related queries. We make a call to the API using the `axios` library and receive a response which we then manipulate and map to a local entity which is passed out as a json object.

### Configuration
We have added a `.env` configuration file which handles project level configurations such as API keys. These configurations are initialized in the `config.ts` file and then exported for use within the project.

### Express Server
Our project runs as a local server which serves the halaal product data. To achieve this, we have used the `express` library. This meant us having to creating a routing structure as well as a `server.ts` file which initializes the server.

