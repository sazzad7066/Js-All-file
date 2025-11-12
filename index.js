// synchronous programing

const taskOne = () => {
  console.log(1);
};
const dataLoading = () =>{
  console.log("Test2. Data loading");
}
const taskTwo = () => {
  setTimeout(dataLoading, 2000);
  
};
const taskThree = () => {
  console.log(3);
};
const taskFour = () => {
  console.log(4);
};
const taskFive = () => {
  console.log(5);
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();