import locMark from "../images/location-mark.png";
export default function Card(props) {
  return (
    <div className="card">
      <img className="card--img" src={props.card.imageUrl} alt="#" />
      <div className="card--text">
        <div className="location--items">
          <img src={locMark} alt="location" />
          <h6>{props.card.location}</h6>
          <a href={props.card.googleMapsUrl} rel="noreferrer" target="_blank">
            View on Google Maps
          </a>
        </div>

        <h2 className="card--title">{props.card.title}</h2>
        <div className="date">
          <span>{props.card.startDate} - </span>
          <span>{props.card.endDate}</span>
        </div>
        <p>{props.card.description}</p>
      </div>
    </div>
  );
}
