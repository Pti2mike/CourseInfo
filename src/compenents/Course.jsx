import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  // console.log(props);

  return (
    <>
      {props.courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
        </div>
      ))}
      {/* <Header name={props.course.name} />
      <Content courses={props.course} /> */}
    </>
  );
};

export default Course;
