import { useCallback, useMemo, useEffect } from 'react';
import { useStickyState } from './useStickyState';

const EXERCISES_KEY = 'exercises';

export interface UserData {
  exercises: {
    [exerciseIndex: number]: StoredExerciseData | undefined;
  };
}

export interface StoredExerciseData {
  exerciseIndex: number;
  wpmRecord: number;
}

export interface UseUserData {
  userData: UserData;
  persistExerciseIfNewRecord: (storedExerciseData: StoredExerciseData) => void;
}

export const useUserData = (): UseUserData => {
  const [storedExercises, setStoredExercises] = useStickyState<UserData['exercises']>({}, EXERCISES_KEY);

  const persistExerciseIfNewRecord = useCallback(
    (exerciseToPersist: StoredExerciseData) => {
      if ((storedExercises[exerciseToPersist.exerciseIndex]?.wpmRecord ?? 0) > exerciseToPersist.wpmRecord) {
        return;
      }

      setStoredExercises({
        ...storedExercises,
        [exerciseToPersist.exerciseIndex]: exerciseToPersist,
      });
    },
    [setStoredExercises, storedExercises]
  );

  const userData = useMemo(() => {
    return {
      exercises: storedExercises,
    };
  }, [storedExercises]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      console.log(`Key pressed: ${event.key}`); // Log key presses
      // Logic to handle input can be placed here if necessary
    };

    // Adding the event listener to capture key presses
    document.addEventListener('keydown', handleKeydown);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []); // Empty dependency array, so this runs once when the component mounts

  return {
    persistExerciseIfNewRecord,
    userData,
  };
};