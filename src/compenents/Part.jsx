const Part = ({ parts }) => {
  // console.log("Part: ", parts);

  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

export default Part;
