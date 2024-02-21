# Data Ingestion Script

### Requirements

- Python3 - Can be downloaded and installed from [here](https://www.python.org/downloads/).
- Algolia Authentication Credentials - [Instructions to find credentials](https://www.algolia.com/doc/rest-api/search/#authentication).
  - `X-Algolia-Application-Id`: the ID of your Algolia application
  - `X-Algolia-API-Key`: an [API key](https://www.algolia.com/doc/guides/security/api-keys/)

### Instructions

1. Install Algolia’s Python API client by running the following command in a terminal

   ```bash
   python -m pip install --upgrade algoliasearch
   ```

2. Open the [constants.py](http://constants.py) file and update the environment variables with your Algolia credentials

   ```python
   ALGOLIA_APP_ID = "X-Algolia-Application-Id"
   ADMIN_API_KEY = "X-Algolia-API-Key"
   ```

3. Open the algolia_data.py file
   1. Update the “file_path” variable by replacing “PATH” with the path of the directory where your index data is stored
   2. Update “index” variable by replacing YOUR_INDEX with the name of your Algolia Index. NOTE: if the selected index does not exists, it will be automatically created.
4. Open a terminal and run the following command to send your data into Algolia

   ```bash
   python3 algolia_data.py
   ```

5. Congratulations! Your data should be in Algolia under the specified index.

### Additional Resources

- Algolia Sending Data docs: [https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/)
- Algolia Save Objects method docs: [https://www.algolia.com/doc/api-reference/api-methods/save-objects/?client=python](https://www.algolia.com/doc/api-reference/api-methods/save-objects/?client=python)
