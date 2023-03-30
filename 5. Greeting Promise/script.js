function greetWithName(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== "string") {
      reject("Name should be a string");
    }
    resolve(`Hello, ${name}!`);
  });
}
greetWithName("Manish")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
