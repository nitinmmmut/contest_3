//this line initialize an empty array called 'tableData'.that will be used to store the data entered into the table.

var tableData = [];

//These lines use the querySelector method to select elements from the HTML document. The first line selects the table element with an id of myTable, the second line selects the tbody element within the table, and the third line selects the button element with an id of btn.


var marksTable = document.querySelector("#myTable");
var marksTableBody = marksTable.querySelector("tbody");
var addRowBtn = document.querySelector("#btn");

//This line attaches an event listener to the click event of the addRowBtn button. When the button is clicked, the function inside the curly braces is executed.

addRowBtn.addEventListener("click", () => {
    //This line of code assigns the number of rows in the table to the variable rowCount. value of rowCount is then used to assign a unique ID to the new row being inserted in the next lines of code.
    var rowCount = marksTableBody.rows.length;

    var row = marksTableBody.insertRow();

    var idCell = row.insertCell();
    var nameCell = row.insertCell();
    var rollCell = row.insertCell();
    var subjectCell = row.insertCell();
    var marksCell = row.insertCell();
    var markedByCell = row.insertCell();
    var document = row.insertCell();


    //The innerHTML property of each cell is set to a string containing an HTML input element with a type of text. This creates a text input field for the user to enter data.

    //This creates a text input field for the user to enter data.

//the last cell in the row contains a "Save" button with a class of save-row-btn.
    idCell.textContent = rowCount + 1;
    nameCell.innerHTML = '<input type="text">';
    rollCell.innerHTML = '<input type="text">';
    subjectCell.innerHTML = '<input type="text">';
    marksCell.innerHTML = '<input type="text">';
    markedByCell.innerHTML = '<input type="text">';
 document.innerHTML = '<button class="save-row-btn">Save</button>';

    var saveBtn = document.querySelector(".save-row-btn");
    // Set the button's style properties
    saveBtn.style.backgroundColor = 'black';
    saveBtn.style.color = 'white';
    saveBtn.style.width = '80px';
    saveBtn.style.height = '20px';
    //he "save" button is clicked, the function inside the event listener is executed.
    saveBtn.addEventListener("click", () => {

        //function uses the querySelector method to get the values entered into the input fields of the corresponding row.
        // trim() method is used to remove any whitespace from the beginning or end of the input value.


        var name = nameCell.querySelector("input").value.trim();
        var roll = rollCell.querySelector("input").value.trim();
        var subject = subjectCell.querySelector("input").value.trim();
        var marks = marksCell.querySelector("input").value.trim();
        var markedBy = markedByCell.querySelector("input").value.trim();

        // Validating input data
        if (!name || !roll || !subject || !marks || !markedBy) {
            alert("Please fill in all fields.");
            return;
        }
        if (isNaN(marks)) {
            alert("Please enter a valid number for the marks.");
            return;
        }
        if (!markedBy.includes("@") || !markedBy.includes(".")) {
            alert(
                "Please enter a valid email address for the marked by field."
            );
            return;
        }

        var newRow = {
            id: rowCount + 1,
            student_name: name,
            student_roll: roll,
            subject,
            marks: Number(marks),
            markedBy,
        };
        tableData.push(newRow);

        updateTable();
    });
});
//  the updateTable() function is called to update the HTML table to reflect the changes in the tableData array..

//If all validation checks pass, a new object newRow is created with the input data and added to the tableData array. The updateTable() function is then called to update the table with the new data.

function updateTable() {
    marksTableBody.innerHTML = "";

    for (let i = 0; i < tableData.length; i++) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = tableData[i].id;
        row.appendChild(idCell);

        const studentNameCell = document.createElement("td");
        const studentNameInput = document.createElement("input");
        studentNameInput.type = "text";
        studentNameInput.value = tableData[i].student_name;
        studentNameCell.appendChild(studentNameInput);
        row.appendChild(studentNameCell);

        const studentRollCell = document.createElement("td");
        const studentRollInput = document.createElement("input");
        studentRollInput.type = "text";
        studentRollInput.value = tableData[i].student_roll;
        studentRollCell.appendChild(studentRollInput);
        row.appendChild(studentRollCell);

        const subjectCell = document.createElement("td");
        const subjectInput = document.createElement("input");
        subjectInput.type = "text";
        subjectInput.value = tableData[i].subject;
        subjectCell.appendChild(subjectInput);
        row.appendChild(subjectCell);

        const marksCell = document.createElement("td");
        const marksInput = document.createElement("input");
        marksInput.type = "text";
        marksInput.value = tableData[i].marks;
        marksCell.appendChild(marksInput);
        row.appendChild(marksCell);

        const markedByCell = document.createElement("td");
        const markedByInput = document.createElement("input");
        markedByInput.type = "text";
        markedByInput.value = tableData[i].markedBy;
        markedByCell.appendChild(markedByInput);
        row.appendChild(markedByCell);

        marksTableBody.appendChild(row);
    }
}
