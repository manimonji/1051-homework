let table = $("table");

fetch("https://raw.githubusercontent.com/manimonji/1051-homework/main/takalif.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(homework => {
            table.append(
                `<tr>
                    <td>${homework.course}</td>
                    <td>${homework.description}</td>
                    <td>${new Date(homework.date).toLocaleString("fa-IR", {weekday:"long",year:"numeric",month:"2-digit","day":"2-digit"})}</td>
                </tr>`
            )
        });
    });