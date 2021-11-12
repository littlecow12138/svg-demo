import "./index.css";

const StatusCard = (props) => {
  return (
    <div className="statusCardWrapper">
      <svg width="245" height="60" style={{ position: "absolute" }}>
        <path
          d="M0 0 H 245 M245 0 L245 40 M245 40 L225 60 M225 60 L0 60 M0 60 L0 0 Z"
          stroke="#303FFF"
          strokeWidth="2"
        ></path>
      </svg>
      <div className="statusCard_desc">
        <div>{props.status.title}</div>
        <span>Equipment Status</span>
      </div>
      <div className="statusCard_value">{props.status.value}</div>
    </div>
  );
};

export default StatusCard;
