import diaryEntires from "../data/entries";
import { DiaryEntry, NonSensetiveDiaryEntry, NewDiaryEntry } from "../type";

const diaries: DiaryEntry[] = diaryEntires;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensetiveDiaryEntry = (): NonSensetiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((x) => x.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensetiveDiaryEntry,
  findById,
};
