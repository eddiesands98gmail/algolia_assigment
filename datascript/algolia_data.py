import json
from algoliasearch.search_client import SearchClient
from Algolia.algoliademo.datascript.constants import ALGOLIA_APP_ID, ADMIN_API_KEY


def read_json_file(file_path):
    """
    Reads a JSON file and stores its content in memory.

    Returns JSON or None if file is not found
    """
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print("File not found.")
        return None

def send_to_agolia(data, APP_ID, API_KEY):
    """
    Send data to Algolia
    """
    try:
        # Connect and authenticate with Algolia app
        client = SearchClient.create(APP_ID, API_KEY)

        # Create a new index if no index exists
        index = client.init_index("YOUR_INDEX")

        # Add records 
        index.save_objects(data).wait()
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    file_path = 'PATH'
    catalog = read_json_file(file_path)

    send_to_agolia(catalog, ALGOLIA_APP_ID, ADMIN_API_KEY)

