import { NewDiaryEntry } from "./type";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  console.log("utils", object);
  const newEntry: NewDiaryEntry = {
    weather: "cloudy",
    visibility: "great",
    date: "2022-1-1",
    comment: "fake news",
  };
  return newEntry;
};

export default toNewDiaryEntry;
