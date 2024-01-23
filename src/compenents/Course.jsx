import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  // console.log(props);

  return (
    <>
      <Header name={props.course.name} />
      <Content courses={props.course} />
    </>
  );
};

export default Course;
