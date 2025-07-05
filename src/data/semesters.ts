import { Semester } from '../types';
import maths1 from '../assets/notes/1st sem/maths 1st sem.pdf';
import physics1 from '../assets/notes/1st sem/physics sem 1.pdf';
import electrical1 from '../assets/notes/1st sem/electrical1.pdf';
import DBMS from '../assets/notes/6th sem/DBMS 6th sem.pdf';
import image from '../assets/notes/6th sem/image 6th sem.pdf';
import research from '../assets/notes/6th sem/research 6th sem.pdf';
import pattern from '../assets/notes/6th sem/pattern.pdf';
import AI from '../assets/notes/5th sem/AI.pdf';
import CD from '../assets/notes/5th sem/CD.pdf';
import oops from '../assets/notes/5th sem/oops.pdf';
import OS from '../assets/notes/5th sem/OS.pdf';
import CA from '../assets/notes/4th sem/CA 4th sem.pdf';
import DAA from '../assets/notes/4th sem/DAA 4th sem.pdf';
import EVS from '../assets/notes/4th sem/EVS notes.pdf';
import maths from '../assets/notes/4th sem/maths 4th sem.pdf';
import AD from '../assets/notes/3rd sem/AD.pdf'; 
import CO from '../assets/notes/3rd sem/CO.pdf';
import dsa from '../assets/notes/3rd sem/dsa.pdf';
import economics from '../assets/notes/3rd sem/economics.pdf';
import C from '../assets/notes/2nd sem/C.pdf';
import chemistry from '../assets/notes/2nd sem/chemistry.pdf';
import programs from '../assets/notes/2nd sem/programs.pdf';




import CN from '../assets/notes/6th sem/CN 6th sem.pdf';
export const semesters: Semester[] = [
  {
    id: 1,
    name: "First Semester",
    subjects: [
      {
        id: 101,
        name: "Engineering Mathematics I",
        notesUrl: maths1
        
      },
      {
        id: 102,
        name: "Engineering Physics",
        notesUrl: physics1
      },
      {
        id: 103,
        name: "Electrical Engineering",
        notesUrl: electrical1
      },
      
    ]
  },
  {
    id: 2,
    name: "Second Semester",
    subjects: [
      
      {
        id: 201,
        name: "Programming for Problem Solving",
        notesUrl: C
      },
      {
        id: 202,
        name: "Chemistry for Engineers",
        notesUrl: chemistry
      },
      {
        id: 203,
        name: "Programs",
        notesUrl: programs
      },
    ]
  },
  {
    id: 3,
    name: "Third Semester",
    subjects: [
      {
        id: 301,
        name: "Analog and Digital",
        notesUrl: AD
      },
      {
        id: 302,
        name: "Data Structures and Algorithms",
        notesUrl: dsa
      },
      {
        id: 303,
        name: "Economics for Engineers",
        notesUrl: economics
      },
      {
        id: 304,
        name: "Computer Organization",
        notesUrl: CO
      },
      
    ]
  },
  {
    id: 4,
    name: "Fourth Semester",
    subjects: [
      {
        id: 401,
        name: "Computer Architecture",
        notesUrl: CA
      },
      {
        id: 402,
        name: "Design and Analysis of Algorithm",
        notesUrl: DAA
      },
      {
        id: 403,
        name: "Environmental Science",
        notesUrl: EVS
      },
      {
        id: 404,
        name: "Engineering Mathematics IV",
        notesUrl: maths
      },
      
    ]
  },
  {
    id: 5,
    name: "Fifth Semester",
    subjects: [
      {
        id: 501,
        name: "Artificial Intelligence",
        notesUrl: AI
      },
      {
        id: 502,
        name: "Compiler Design",
        notesUrl: CD
      },
      {
        id: 503,
        name: "Operating System",
        notesUrl: OS
      },
      {
        id: 504,
        name: "Object Oriented Programming",
        notesUrl: oops
      },
      
    ]
  },
  {
    id: 6,
    name: "Sixth Semester",
    subjects: [
      {
        id: 601,
        name: "Computer Network",
        notesUrl: CN
      },
      {
        id: 602,
        name: "Database Management System",
        notesUrl: DBMS
      },
      {
        id: 603,
        name: "Image Processing",
        notesUrl: image
      },
      {
        id: 604,
        name: "Research Methodology",
        notesUrl: research
      },
      {
        id: 605,
        name: "Pattern Recognition",
        notesUrl: pattern
      }
    ]
  },
  {
    id: 7,
    name: "Seventh Semester",
    subjects: [
      {
        id: 701,
        name: "Data Mining",
        notesUrl: "https://example.com/notes/data-mining.pdf"
      },
      {
        id: 702,
        name: "Computer Vision",
        notesUrl: "https://example.com/notes/computer-vision.pdf"
      },
      {
        id: 703,
        name: "Natural Language Processing",
        notesUrl: "https://example.com/notes/nlp.pdf"
      },
      {
        id: 704,
        name: "Project Management",
        notesUrl: "https://example.com/notes/project-mgmt.pdf"
      },
      {
        id: 705,
        name: "Elective I",
        notesUrl: "https://example.com/notes/elective1.pdf"
      }
    ]
  },
  {
    id: 8,
    name: "Eighth Semester",
    subjects: [
      {
        id: 801,
        name: "Distributed Systems",
        notesUrl: "https://example.com/notes/distributed.pdf"
      },
      {
        id: 802,
        name: "Big Data Analytics",
        notesUrl: "https://example.com/notes/big-data.pdf"
      },
      {
        id: 803,
        name: "Internet of Things",
        notesUrl: "https://example.com/notes/iot.pdf"
      },
      {
        id: 804,
        name: "Major Project",
        notesUrl: "https://example.com/notes/project.pdf"
      },
      {
        id: 805,
        name: "Elective II",
        notesUrl: "https://example.com/notes/elective2.pdf"
      }
    ]
  }
];