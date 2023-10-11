let table = d3.select("table");

fetch("https://raw.githubusercontent.com/manimonji/1051-homework/main/takalif.json")
    .then(response => response.json())
    .then((data) => {
       table.selectAll()
            .data(data)
            .enter()
            .append("tr")
            .append("td")
            .text(d => d.course);
    });