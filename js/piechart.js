// Prepare the data
const countryData = [
    { country: 'United States', total_deaths: 1218863185 },
    { country: 'England', total_deaths: 261355366 },
    { country: 'Israel', total_deaths: 13151763 },
    { country: 'China', total_deaths: 70720410 },
    { country: 'United Arab Emirates', total_deaths: 2760461 },
    { country: 'Germany', total_deaths: 178143287 },
    { country: 'Italy', total_deaths: 212975311 },
    { country: 'India', total_deaths: 599302657 },
    { country: 'Turkey', total_deaths: 107437256 },
    { country: 'Spain', total_deaths: 141002109 },
    { country: 'France', total_deaths: 185756417 },
    { country: 'Poland', total_deaths: 128711768 },
    { country: 'Mexico', total_deaths: 398087604 },
    { country: 'Brazil', total_deaths: 796385382 },
    { country: 'Canada', total_deaths: 53408711 }
];

// Extract the country names and death totals
const countries = countryData.map(data => data.country);
const deaths = countryData.map(data => data.total_deaths);

// Create the pie chart
const data = [{
    values: deaths,
    labels: countries,
    type: 'pie'
}];

const layout = {
    title: 'Total Deaths by Country',
    height: 400,
    width: 500
};

Plotly.newPlot('pie-chart', data, layout);
