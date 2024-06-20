
const countryData3 = [
    { country: 'United States', vaccinations: 358463653.0 },
    { country: 'England', vaccinations: 112912117.0 },
    { country: 'Israel', vaccinations: 83928749.0 },
    { country: 'China', vaccinations: 62767000.0 },
    { country: 'United Arab Emirates', vaccinations: 48174894.0 },
    { country: 'Germany', vaccinations: 33013230.0 },
    { country: 'Italy', vaccinations: 29703535.0 },
    { country: 'India', vaccinations: 24564363.0 },
    { country: 'Turkey', vaccinations: 19731396.0 },
    { country: 'Spain', vaccinations: 15542638.0 },
    { country: 'France', vaccinations: 14181642.0 },
    { country: 'Poland', vaccinations: 13382831.0 },
    { country: 'Mexico', vaccinations: 9726196.0 },
    { country: 'Brazil', vaccinations: 9367645.0 },
    { country: 'Canada', vaccinations: 8403751.0 }
];

// Extract the country names and vaccination totals--------------------------------------
const countries3 = countryData3.map(data => data.country);
const vaccinations = countryData3.map(data => data.vaccinations);

// Create the pie chart--------------------------------------
const data3 = [{
    values: vaccinations,
    labels: countries3,
    type: 'pie'
}];

const layout3 = {
    title: 'Total Vaccinations by Country',
    height: 400,
    width: 500
};

Plotly.newPlot('pie-chart3', data3, layout3);
