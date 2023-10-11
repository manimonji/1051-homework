let table = $("table");

fetch("https://raw.githubusercontent.com/manimonji/1051-homework/main/takalif.json")
    .then(response => response.json())
    .then((data) => {
        data.forEach(homework => {
            table.append(
                `<tr>
                    <td>${homework.course}</td>
                    <td>${homework.description}</td>
                </tr>`
            )
        });
    });