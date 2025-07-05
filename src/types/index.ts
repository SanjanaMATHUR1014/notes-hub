export interface Subject {
  id: number;
  name: string;
  notesUrl: string;
}

export interface Semester {
  id: number;
  name: string;
  subjects: Subject[];
}