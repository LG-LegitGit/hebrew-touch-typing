import classNames from 'classnames';
import React from 'react';
import { ExerciseType } from '../../constants/practiceAndReviewLetterSets';
import { assertLettersExercise, isLettersExercise } from '../../utils/exerciseUtils';
import { useExerciseContext } from '../ExerciseContext/ExerciseContext';
import LetterKeycap from '../LetterKeycap/LetterKeycap';
import * as styles from './exercise-title.scss';

interface ExerciseTitleProps {
  className?: string;
}

const ExerciseTitle = ({ className }: ExerciseTitleProps): JSX.Element | null => {
  const { selectedExercise } = useExerciseContext();
  
  if (selectedExercise == null) {
    return null;
  }

  // Check if it is a letters exercise and fetch new letters
  const isLetterExercise = isLettersExercise(selectedExercise);
  const newLetters = isLetterExercise ? assertLettersExercise(selectedExercise).newLetters : [];

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.title}>
        <span className={styles.hebrewTitle}>
          {selectedExercise.type === ExerciseType.REVIEW
            ? 'שיעור'
            : selectedExercise.type === ExerciseType.PRACTICE
            ? 'תרגול'
            : selectedExercise.label}
        </span>

        <div className={styles.divider} />

        <span className={styles.englishTitle}>
          {selectedExercise.type === ExerciseType.REVIEW
            ? 'Lesson'
            : selectedExercise.type === ExerciseType.PRACTICE
            ? 'Practice'
            : selectedExercise.label}
        </span>
      </h1>

      {/* Check if there are new letters to display */}
      {isLetterExercise && newLetters.length > 0 && (
        <>
          <div className={styles.divider} />
          <div className={styles.newletters}>
            {/* Display the new letters */}
            {newLetters.map((letter, index) => (
              <LetterKeycap key={letter} letter={letter} /> 
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseTitle;