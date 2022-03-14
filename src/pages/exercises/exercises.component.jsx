import React from 'react';

import EXERCISES_DATA from './exercises.data';

import ExercisePreview from '../../components/exercise-preview/exercise-preview.component';

class ExercisesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: EXERCISES_DATA
    }
  }

  render() {
    const { exercises } = this.state;
    return (
      <div className='exercises-page'>
        {exercises.map(({ id, ...otherCollectionProps }) =>  (
          <ExercisePreview key={id} {...otherCollectionProps} />
        ))}

      </div>
    );
  }
}


export default ExercisesPage;