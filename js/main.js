const data = [
    { date: "2024-02-29", firstName: "john", lastName: "Doe" },
    { date: "2024-03-30", firstName: "haneen", lastName: "ashraf" },
    { date: "2024-08-2", firstName: "amir", lastName: "osman" },
    { date: "2024-05-5", firstName: "aly", lastName: "ahmed" },
    { date: "2023-05-5", firstName: "aly", lastName: "ahmed" },
    { date: "2023-05-5", firstName: "aly", lastName: "ahmed" },
    { date: "2023-05-5", firstName: "aly", lastName: "ahmed" },
    { date: "2023-06-22", firstName: "Bob", lastName: "Anderson" },
    { date: "2022-02-33", firstName: "Bob", lastName: "Anderson" },
    { date: "2001/02/28", firstName: "Bob", lastName: "Anderson" },
];

console.log(data);

function createTable() {
    const years = new Set(); // unique years
    const yearData = {};

    for (const item of data) {
        const yearDateObject = new Date(item.date);
        let year;
        if (!isNaN(yearDateObject.getDate())) {
            year = yearDateObject.getFullYear();
        } 
        else {
            year = ""
        }
        years.add(year);
        if (!yearData[year]) {

            yearData[year] = [];

        }
        yearData[year].push(item);
        // console.log(yearData);
    }
    const htmlString = generateTableHTML(years, yearData);
    document.getElementById('data-body').innerHTML = htmlString;

    // console.log(htmlString);
}

function generateTableHTML(years, yearData) {
    let htmlString = `<tbody>`;

    if (years.size === 1) {
        const year = years.values().next().value;
    } else {
        for (const year of years) {
            if (year === "") {
                htmlString += `
            <tr>
              <td colspan="3" class="group-title">Unique years</td>
            </tr>
          `;

            } else {
                htmlString += `
            <tr>
              <td colspan="3" class="group-title">${year}</td>
            </tr>
          `;
                for (const item of yearData[year]) {
                    htmlString += `
              <tr>
                <td>${item.date}</td>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
              </tr>
            `;
                }
            }
            console.log(year);
        }
    }
    htmlString += `</tbody>`;
    return htmlString;
}


createTable();
