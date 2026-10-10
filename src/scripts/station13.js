data = "global data";

const returnThisData = () => {
  return this.data;
};

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
