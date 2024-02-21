import { Divider } from "@mui/joy";

import {
  RefinementList,
  Menu,
  RangeInput,
  ToggleRefinement,
} from "react-instantsearch";

import RatingMenu from "./RatingMenu";

const FilterPanel = () => {
  return (
    <>
      <h3>Filters</h3>
      <h4>Brands</h4>
      <RefinementList
        attribute="brand"
        searchable={true}
        searchablePlaceholder="Search brands"
        showMore={true}
      />
      <Divider sx={{ my: 3 }} />
      <h4>Categories</h4>
      <Menu attribute="categories" showMore={true} />
      <Divider sx={{ my: 3 }} />
      <h4>Rating</h4>
      <RatingMenu attribute="rating"></RatingMenu>
      <Divider sx={{ my: 3 }} />
      <h4>Price</h4>
      <RangeInput attribute="price" precision={1} />
      <Divider sx={{ my: 3 }} />
      <h4>Shipping</h4>
      <ToggleRefinement attribute="free_shipping" label="Free shipping" />
    </>
  );
};

export default FilterPanel;
