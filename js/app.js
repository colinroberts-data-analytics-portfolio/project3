
function init() {
    // Populate the dropdown menu --------------------------------------
    let selector = d3.select("#selCountry");
    Object.keys(country_data).forEach((country) => {
      selector.append("option").text(country).property("value", country);
    });
  
    // Display the first country's data --------------------------------------
    let firstCountry = Object.keys(country_data)[0];
    buildMetadata(firstCountry);
    buildCharts(firstCountry);
    buildHeatMapTotalCases();
    buildHeatMapTotalDeaths();
    buildHeatMapTotalVaccinations();
  }
  
  // Function to update the dashboard when a new country is selected --------------------------------------
  function optionChanged(newCountry) {
    buildMetadata(newCountry);
    buildCharts(newCountry);
  }
  
  // display country metadata --------------------------------------
  function buildMetadata(country) {
    let metadata = country_data[country];
    let PANEL = d3.select("#country-metadata");
  
    PANEL.html("");
    Object.entries(metadata).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  }
  
  // Function to create the charts--------------------------------------
  function buildCharts(country) {
    let data = country_data[country];
  
    // Bar Chart for total cases, total deaths, vaccinations, and population--------------------------------------
    let barData = [
      {
        x: ["Total Cases", "Total Deaths", "Vaccinations", "Population", "Density(P/KMsq)"],
        y: [data.total_cases, data.total_deaths, data.vaccinations, data.Population, data.Density],
        type: "bar"
      }
    ];
    let barLayout = {
      title: "Total Cases, Deaths, Vaccinations, Population and Density(P/KMsq)",
    };
    Plotly.newPlot("bar", barData, barLayout);
  
    // Line Chart for vaccinations, and population-------------------------------------
    let lineData = [
      {
        x: ["Vaccinations", "Population", "Density(P/KMsq)"],
        y: [data.vaccinations, data.Population, data.Density],
        type: "scatter",
        mode: "lines+markers",
        name: country
      }
    ];
    let lineLayout = {
      title: "Vaccinations, Population and Density",
    };
    Plotly.newPlot("line", lineData, lineLayout);
  }
  
  // Function to build the heatmap for total cases------------------------------------------
  function buildHeatMapTotalCases() {
    let lat = [];
    let lon = [];
    let text = [];
    let z = [];
  
    Object.keys(country_data).forEach((country) => {
      let data = country_data[country];
      lat.push(data.latitude);
      lon.push(data.longitude);
      text.push(`${country}<br>Total Cases: ${data.total_cases}<br>Total Deaths: ${data.total_deaths}<br>Vaccinations: ${data.vaccinations}<br>Population: ${data.Population}<br>Density(P/KMsq): ${data.Density}`);
      z.push(data.total_cases);
    });
  
    let heatmapData = [{
      type: 'scattergeo',
      locationmode: 'country names',
      lat: lat,
      lon: lon,
      text: text,
      marker: {
        size: z.map(d => Math.sqrt(d) / 4e3),
        color: z,
        colorscale: 'YlOrRd',
        cmin: 0,
        cmax: Math.max(...z),
        colorbar: {
          title: 'Total Cases',
          thickness: 10,
          ticksuffix: ' cases',
        },
        line: {
          color: 'black'
        }
      },
      hoverinfo: 'text'
    }];
  
    let heatmapLayout = {
      title: 'Heatmap of Total Cases by Country',
      geo: {
        showframe: false,
        showcoastlines: true,
        coastlinecolor: 'rgb(255,255,255)',
        projection: {
          type: 'equirectangular'
        },
        showland: true,
        landcolor: 'rgb(50,205,50)',
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)',
        oceancolor: 'rgb(173,216,230)',
        showocean: true
      }
    };
  
    Plotly.newPlot("heatmapCases", heatmapData, heatmapLayout);
  }
  
  // Function to build the heatmap for total deaths--------------------------------------
  function buildHeatMapTotalDeaths() {
    let lat = [];
    let lon = [];
    let text = [];
    let z = [];
  
    Object.keys(country_data).forEach((country) => {
      let data = country_data[country];
      lat.push(data.latitude);
      lon.push(data.longitude);
      text.push(`${country}<br>Total Cases: ${data.total_cases}<br>Total Deaths: ${data.total_deaths}<br>Vaccinations: ${data.vaccinations}<br>Population: ${data.Population}<br>Density(P/KMsq): ${data.Density}`);
      z.push(data.total_deaths);
    });
  
    let heatmapData = [{
      type: 'scattergeo',
      locationmode: 'country names',
      lat: lat,
      lon: lon,
      text: text,
      marker: {
        size: z.map(d => Math.sqrt(d) / 2e3), 
        color: z,
        colorscale: 'YlOrRd',
        cmin: 0,
        cmax: Math.max(...z),
        colorbar: {
          title: 'Total Deaths',
          thickness: 10,
          ticksuffix: ' deaths',
        },
        line: {
          color: 'black'
        }
      },
      hoverinfo: 'text'
    }];
  
    let heatmapLayout = {
      title: 'Heatmap of Total Deaths by Country',
      geo: {
        showframe: false,
        showcoastlines: true,
        coastlinecolor: 'rgb(255,255,255)',
        projection: {
          type: 'equirectangular'
        },
        showland: true,
        landcolor: 'rgb(50,205,50)',
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)',
        oceancolor: 'rgb(173,216,230)',
        showocean: true
      }
    };
  
    Plotly.newPlot("heatmapDeaths", heatmapData, heatmapLayout);
  }
  
  // Function to build the heatmap for total vaccinations --------------------------------------
  function buildHeatMapTotalVaccinations() {
    let lat = [];
    let lon = [];
    let text = [];
    let z = [];
  
    Object.keys(country_data).forEach((country) => {
      let data = country_data[country];
      lat.push(data.latitude);
      lon.push(data.longitude);
      text.push(`${country}<br>Total Cases: ${data.total_cases}<br>Total Deaths: ${data.total_deaths}<br>Vaccinations: ${data.vaccinations}<br>Population: ${data.Population}<br>Density(P/KMsq): ${data.Density}`);
      z.push(data.vaccinations);
    });
  
    let heatmapData = [{
      type: 'scattergeo',
      locationmode: 'country names',
      lat: lat,
      lon: lon,
      text: text,
      marker: {
        size: z.map(d => Math.sqrt(d) / 2e3), 
        color: z,
        colorscale: 'YlOrRd',
        cmin: 0,
        cmax: Math.max(...z),
        colorbar: {
          title: 'Total Vaccinations',
          thickness: 10,
          ticksuffix: ' vaccinations',
        },
        line: {
          color: 'black'
        }
      },
      hoverinfo: 'text'
    }];
  
    let heatmapLayout = {
      title: 'Heatmap of Total Vaccinations by Country',
      geo: {
        showframe: false,
        showcoastlines: true,
        coastlinecolor: 'rgb(255,255,255)',
        projection: {
          type: 'equirectangular'
        },
        showland: true,
        landcolor: 'rgb(50,205,50)',
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)',
        oceancolor: 'rgb(173,216,230)',
        showocean: true
      }
    };
  
    Plotly.newPlot("heatmapVaccinations", heatmapData, heatmapLayout);
  }
  
  // Initialize the dashboard
  init();
  