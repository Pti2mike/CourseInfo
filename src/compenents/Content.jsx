import Part from "./Part";

const Content = ({ courses }) => {
  // console.log("Content: ", courses.parts);

  return (
    <div>
      {courses.parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
    </div>
  );
};

export default Content;
