import locMark from "../images/location-mark.png"
export default function Card(props) {
  return (
    <div className="card">
      <img className="card--img" src={props.card.imageUrl} alt="#" />
      <div className="card--text">
      <img src={locMark} alt="location" />
        <h6>{props.card.location}</h6>
        <a href={props.card.googleMapsUrl} rel="noreferrer" target="_blank">
          {" "}
          View on Google Maps{" "}
        </a>
        <h2>{props.card.title}</h2>
        <p>{props.card.startDate}</p>
        <p>{props.card.endDate}</p>
        <p>{props.card.description}</p>
      </div>
    </div>
  );
}
