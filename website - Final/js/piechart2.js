
const countryData2 = [
    { country: 'United States', total_cases: 98673905427.0 },
    { country: 'England', total_cases: 23021744756.0 },
    { country: 'Israel', total_cases: 4351336977.0 },
    { country: 'China', total_cases: 52834165036.0 },
    { country: 'United Arab Emirates', total_cases: 1122625860.0 },
    { country: 'Germany', total_cases: 30692981627.0 },
    { country: 'Italy', total_cases: 21644870561.0 },
    { country: 'India', total_cases: 48926651289.0 },
    { country: 'Turkey', total_cases: 16404821691.0 },
    { country: 'Spain', total_cases: 13313618559.0 },
    { country: 'France', total_cases: 32547041968.0 },
    { country: 'Poland', total_cases: 6542223249.0 },
    { country: 'Mexico', total_cases: 7395257306.0 },
    { country: 'Brazil', total_cases: 37650987467.0 },
    { country: 'Canada', total_cases: 4328297090.0 }
];

// Extract the country names and total cases--------------------------------------
const countries2 = countryData2.map(data => data.country);
const cases = countryData2.map(data => data.total_cases);

// Debugging---------------------Check if data is correctly extracted
console.log("Countries:", countries2);
console.log("Cases:", cases);

// Create the pie chart----------------------------------------------
const data2 = [{
    values: cases,
    labels: countries2,
    type: 'pie'
}];

const layout2 = {
    title: 'Total Cases by Country',
    height: 400,
    width: 500
};

// Debugging---------------------------- Check for Plotly
if (typeof Plotly !== 'undefined') {
    console.log("Plotly is available.");
    Plotly.newPlot('pie-chart2', data2, layout2);
} else {
    console.error("Plotly is not available.");
}
