# contest_3

Task:
Create a UI for an editable table in Figma. The table should initially have 0 rows, but when the user clicks on the "create a new row" button, a new row should be appended to the table.

Each cell of the new row should be an input field of type text, except for the ID, which should be assigned automatically and cannot be changed.

The user should be able to edit the values of the input fields in every cell of the table except for the ID.

The table data should be stored in an array variable that looks like this:


tableData = [
  {id:1, student_name:"Avi", student_roll:"2020500", subject:"english", marks:95, markedBy:"teacher"},
  {id:2, ...}
];

When the user presses the "save" button, the data for the new row should be saved, and the new row and the entire tableData array should be logged to the console. Validation should be performed on all input fields to ensure that nothing is left empty and that the "marks" field only accepts numbers and the "markedBy" field only accepts email addresses.

Marking Scheme:
Proper implementation of UI as per the given Figma design: 10 marks
Implementation of "create a new row" functionality: 10 marks
Implementation of auto-assigned ID: 10 marks
Implementation of input fields with validation: 20 marks
Implementation of "save" button functionality: 20 marks
Proper storage of data in tableData array: 10 marks
Console logging of the new row and tableData array: 10 marks
Deployment of the project: 10 marks

Link to Figma design: https://www.figma.com/file/4Jb8hNK6uGbtuwdJ12XjIZ/Edtiable-Table?node-id=0%3A1&t=Ati2vzt9bqN0Sznb-1
