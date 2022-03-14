import React from "react";

import "./exercise-item.styles.scss";

const ExerciseItem = ({ name, reps, imageUrl }) => (
  <div className="exercise-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="exercise-footer">
      <span className="name">{name}</span>
      <span className="reps">{reps}</span>
    </div>
  </div>
);

export default ExerciseItem;