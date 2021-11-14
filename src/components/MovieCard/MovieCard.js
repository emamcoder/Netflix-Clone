import React from "react";

const MovieCard = (props) => {
  const { data } = props;
  return (<div className="card-item">
    <div className="card-inner">
      <div className="card-top">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="card-bottom">
        <h4>{ data.Title}</h4>
      </div>
</div>
  </div>)
};

export default MovieCard;
