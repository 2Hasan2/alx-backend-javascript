interface Student {
  FirstName: string;
  LastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    FirstName: 'Jane',
    LastName: 'Doe',
    age: 20,
    location: 'Lagos',
  },
  {
    FirstName: 'Jane',
    LastName: 'Doe',
    age: 20,
    location: 'Lagos',
  },
];

const studentUi = (student: Student): string => `
        <tr>
        <td>${student.FirstName}</td>
        <td>${student.LastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
        </tr>
    `;

const header = typeof studentsList[0] === 'object' ? Object.keys(studentsList[0]) : [];
const table = `
  <table>
    <thead>
        <tr>
            ${header.map((head) => `<th>${head}</th>`).join('')}
        </tr>
        </thead>
        <tbody>
            ${studentsList.map(studentUi).join('')}
        </tbody>
    </table>
`;

document.body.innerHTML = table;

// style
const styleSheet = `
    html,body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        background-color: #f2f2f2;
        font-family: Arial, sans-serif;
    }
    table {
        border-collapse: collapse;
        width: 80%;
        background-color: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    thead {
        font-weight: bold;
        background-color: #f5f5f5;
    }
    th {
        padding: 10px;
        text-align: left;
    }
    td {
        padding: 10px;
        border-bottom: 1px solid #f2f2f2;   
        cursor: pointer;
    }
    td:hover {
        background: gainsboro;
    }
    td:nth-child(1) {
        text-align: center;
    }
`;

const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
