# React App Instructions

## Run Locally

### Requirements

- NodeJS - Can be downloaded and installed from [here](https://nodejs.org/en).
- Docker - Can be downloaded and installed form [here](https://docs.docker.com/engine/install/).
- Algolia Authentication Credentials - [Instructions to find credentials](https://www.algolia.com/doc/rest-api/search/#authentication).
  - `X-Algolia-Application-Id`: the ID of your Algolia application
  - `X-Algolia-API-Key`: an [API key](https://www.algolia.com/doc/guides/security/api-keys/)

### Instructions

1. Clone this repository by running the following command in a terminal

   ```python
   git clone https://github.com/eddiesands98gmail/algolia_assigment.git
   ```

2. Open the .env file and update the environment variables with your Algolia credentials

   ```js
   REACT_APP_APP_ID = "X-Algolia-Application-Id";
   REACT_APP_API_KEY = "X-Algolia-API-Key";
   ```

3. Install all packages by running the following command in the root folder

   ```bash
   npm install
   ```

4. Start application locally by running the following command in the terminal

   ```bash
   npm start
   ```

5. Visit [http://localhost:3000/](http://localhost:3000/) in your browser to view the application

## Create and run deployable Docker image

1. Ensure that Steps 1 and 2 have been completed from the instructions above
2. In a terminal run the following command to build and run a Docker image of the react application. Note: Run this command from the root directory of the repository

   ```bash
   docker-compose up
   ```

### Additional Resources

- Algolia Sending Data docs: [https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/)
- Algolia Save Objects method docs: [https://www.algolia.com/doc/api-reference/api-methods/save-objects/?client=python](https://www.algolia.com/doc/api-reference/api-methods/save-objects/?client=python)
