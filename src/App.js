import "./App.css";
import algoliasearch from "algoliasearch";

import {
  InstantSearch,
  ClearRefinements,
  CurrentRefinements,
  InfiniteHits,
  SearchBox,
  SortBy,
  Configure,
  Stats,
} from "react-instantsearch";

// JoyUI Styling
import { Grid, Divider, Sheet } from "@mui/joy";

import Hit from "./components/Hit";
import MobileFilterDrawer from "./components/FilterPanel";
import NavBar from "./components/NavBar";
import Autocomplete from "./components/Autocomplete";

const APP_ID = process.env.REACT_APP_APP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const searchClient = algoliasearch(APP_ID, API_KEY);

function App() {
  return (
    <Sheet
      container
      variant="soft"
      sx={{ display: "flex", minHeight: "100dvh" }}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName="eddies_index"
        insights={true}
        routing
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Configure attributesToSnippet={["description"]} />
          <Grid xs={12}>
            <NavBar>
              <Grid
                container
                spacing={2}
                sx={{ flexGrow: 1, justifyContent: "center" }}
              >
                <Grid xs={10} md={8} lg={8}>
                  <SearchBox placeholder="Instant Search" autoFocus />
                </Grid>
                <Grid xs={2} md={2} lg={2}>
                  <SortBy
                    items={[
                      { label: "Relevance", value: "eddies_index" },
                      { label: "Price (asc)", value: "price_asc" },
                      { label: "Price (desc)", value: "price_desc" },
                      { label: "Best Rating", value: "best_rating" },
                    ]}
                  />
                </Grid>

                <Grid xs={12} md={2} lg={2}>
                  <Autocomplete searchClient={searchClient} />
                </Grid>
              </Grid>
            </NavBar>
          </Grid>

          {/* Filter Panel */}
          <Grid xs={10} md={2} lg={2} sx={{ p: 3 }}>
            <MobileFilterDrawer></MobileFilterDrawer>
          </Grid>

          <Divider
            className="filterDivider"
            orientation="vertical"
            sx={{ ml: 10, mr: 5 }}
          ></Divider>
          {/*Search Results*/}
          <Grid xs={10} sm={10} md={8} lg={8}>
            <ClearRefinements
              translations={{
                resetButtonText: "Clear Filters",
              }}
            />
            <CurrentRefinements
              transformItems={(items) =>
                items.map((item) => {
                  return {
                    ...item,
                    attribute: item.label,
                  };
                })
              }
            />

            <Stats></Stats>

            <InfiniteHits showPrevious={false} hitComponent={Hit} />
          </Grid>
        </Grid>
      </InstantSearch>
    </Sheet>
  );
}

export default App;
