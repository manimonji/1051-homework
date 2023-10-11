let homeworksTable = $("table:nth-of-type(1)");
let examsTable = $("table:nth-of-type(2)");

const fillTable = (element,data) => {
    data.forEach(value => {
        element.append(
            `<tr>
                <td>${value.course}</td>
                <td>${value.description}</td>
                <td>${new Date(value.date).toLocaleString("fa-IR", {weekday:"long",year:"numeric",month:"2-digit","day":"2-digit"})}</td>
            </tr>`
        )
    });
};

fetch("https://raw.githubusercontent.com/manimonji/1051-homework/main/takalif.json")
    .then(response => response.json())
    .then((data) => {
        fillTable(homeworksTable, data.homeworks);
        fillTable(examsTable, data.exams);
    });