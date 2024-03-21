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
    { date: "2001-02-33", firstName: "Bob", lastName: "Anderson" },

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
        } else {
            year = "UniqueYear";
        }
        years.add(year);
        if (!yearData[year]) {
            yearData[year] = [];
        }
        yearData[year].push(item);
        // console.log(yearData);
    }
    const htmlString = generateTableHTML(years, yearData);
    document.getElementById("data-body").innerHTML = htmlString;

    // console.log(htmlString);
}

function generateTableHTML(years, yearData) {
    let htmlString = `<tbody>`;

    for (const year of years) {
        htmlString += `
              <tr>
                <td colspan="3" class="group-title" data-toggle="toggle">${year}</td>
              </tr>
            `;
        for (const item of yearData[year]) {
            htmlString += `
                <tr class="hide${year} hide">
                  <td>${item.date}</td>
                  <td>${item.firstName}</td>
                  <td>${item.lastName}</td>
                </tr>
              `;


            }
            // console.log(year);
    }
    htmlString += `</tbody>`;
    return htmlString;
}

createTable();

const toggles = document.querySelectorAll('[data-toggle="toggle"]');
for (let toggle of toggles) {

    toggle.addEventListener("click", () => {
        // console.log(toggle);
        let targetClass = `.hide${toggle.innerHTML}`;
        let elementsOfYears = document.querySelectorAll(targetClass);

        for (let element of elementsOfYears) {
            element.classList.toggle("hide");
        }
    });
}
