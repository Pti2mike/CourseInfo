const Total = ({ course }) => {
  // console.log("Total: ", course);

  const totalExercices = course.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <strong>total of {totalExercices} exercices</strong>;
};

export default Total;
