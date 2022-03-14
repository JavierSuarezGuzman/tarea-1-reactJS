import React from 'react';

import ExerciseItem from '../exercise-item/exercise-item.component';

import "./exercise-preview.styles.scss";

const ExercisePreview = ({ title, items }) => (
  <div className="exercise-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ExerciseItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ExercisePreview;

