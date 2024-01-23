import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
  // console.log("Content: ", course);

  return (
    <>
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} parts={part} />
        ))}
      </div>
      <Total course={course} />
    </>
  );
};

export default Content;
