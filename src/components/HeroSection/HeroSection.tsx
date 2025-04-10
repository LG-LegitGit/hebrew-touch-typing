import React from 'react';
import {useExerciseContext} from '../ExerciseContext/ExerciseContext';
import {KeyboardWarriorSvg} from '../HebrewTouchTyping/KeyboardWarriorSvg';
import * as styles from './hero-section.scss';
import LeftArrow from './LeftArrow';

const HeroSection = (): JSX.Element => {
  const {setSelectedExerciseNumber} = useExerciseContext();
  return (
    <div className={styles.emptyState}>
      <div className={styles.textContainer}>
        <h1>Learn to Type in Hebrew ללמוד להקליד בעברית</h1>

        <button
          className={styles.startButton}
          onClick={() => setSelectedExerciseNumber(0)}
        >
          <span> Start התחל</span>
          <LeftArrow />
        </button>
      </div>
      <KeyboardWarriorSvg />
    </div>
  );
};

export default HeroSection;

