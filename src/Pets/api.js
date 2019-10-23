const petsDB = {
  dogs: { name: "Dogs", voice: "Woof!", avatar: "🐶" },
  cats: { name: "Cats", voice: "Miauuu", avatar: "🐱" }
};

export function getPet(type) {
  return new Promise(resolve => {
    // immulate fetch call
    setTimeout(() => {
      resolve(petsDB[type]);
    }, 1000);
  });
}
