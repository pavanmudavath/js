const xUser = new Object()

xUser.id="123"
xUser.name="pavan"
xUser.isLoggedIn=false

// console.log(xUser);

const course = {
    coursename:"js in hindi",
    price:'999',
    courseInstructor:"pavan"
}

//Object destructure

// console.log(course.courseInstructor);
// console.log(course.courseInstructor);
// console.log(course.courseInstructor);

// const {courseInstructor}=course;
// console.log(courseInstructor);
// console.log(courseInstructor);
// console.log(courseInstructor);
// console.log(courseInstructor);

const {courseInstructor:pk}=course;
console.log(pk);