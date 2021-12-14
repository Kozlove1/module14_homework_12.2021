
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

const person = data.list;


person.forEach((i) => {
    const result = {
        name: i.name,
        prof: i.prof,

        age: Number(i.age),

    };
    console.log('result', result);
})
