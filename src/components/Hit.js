import { Highlight, Snippet } from "react-instantsearch";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

import "../App.css";

const Hit = (props) => {
  const numStars = Math.min(Math.round(props.hit.rating));

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        zIndex: 0,
      }}
      size="md"
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 100 }} objectFit="contain">
          <img src={props.hit.image} alt={props.name} />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ flex: 1 }}>
        <Typography level="body-lg" textColor="success.plainColor">
          <Highlight hit={props.hit} attribute="name" />
        </Typography>
        <Typography level="body-sm">
          <Snippet hit={props.hit} attribute="description" />
        </Typography>
        <Typography level="body-sm">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < numStars ? "orange" : "none"}
              stroke={index < numStars ? "none" : "currentColor"}
              strokeWidth={index < numStars ? 0 : 1.5}
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
        </Typography>
        <Typography level="body-md">${props.hit.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default Hit;
