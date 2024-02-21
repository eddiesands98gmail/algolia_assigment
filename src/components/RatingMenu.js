import { useConnector } from "react-instantsearch";
import connectRatingMenu from "instantsearch.js/es/connectors/rating-menu/connectRatingMenu";

export function useRatingMenu(props) {
  return useConnector(connectRatingMenu, props);
}

const RatingMenu = (props) => {
  const { items, refine, createURL } = useRatingMenu(props);

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item) => (
        <li>
          <a
            aria-label={`${item.value} &amp; up`}
            href={createURL(item.value)}
            onClick={(event) => {
              event.preventDefault();

              refine(item.value);
            }}
          >
            {item.stars.map((isFilled, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isFilled ? "orange" : "none"}
                stroke={isFilled ? "none" : "currentColor"}
                strokeWidth={isFilled ? 0 : 1.5}
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RatingMenu;
