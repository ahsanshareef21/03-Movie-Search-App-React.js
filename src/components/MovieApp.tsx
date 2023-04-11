import "./MovieApp.css";

const MovieApp = (props) => {
  return (
    <div className=" main1">
      <img src={props.img} alt="" />

      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.type}</p>
    </div>
  );
};

export { MovieApp,};
