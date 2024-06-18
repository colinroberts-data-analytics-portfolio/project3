// store source URL, keep it constant to avoid haveing to re-enter it for each section
const url = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json';

// Get the metadata field
d3.json(url).then(function(data){
    console.log(data);
}); 

//create the initial function that will populate the dropdown, bar chart, and bubble chart with data for each sample
function init(){
    //create the dropdown list variable for all sample id's in the dataset by appending each ID as a new value
    let dropdown = d3.select("#selDataset");
    //access sample data using d3
    d3.json(url).then((data) => {
    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    let sample_ids = data.names;
    console.log(sample_ids);
        for (id of sample_ids){
            dropdown.append("option").attr("value", id).text(id);
        };
    //store the first sample for display initialization
    let first_entry = sample_ids[0];
    console.log(first_entry);
    
    // Call the init() function for the graphs with the first entry
    // Which is ID 940
    makeBar(first_entry);
    makeBubble(first_entry);
    makeDemographics(first_entry);
    }); //clear d3
};

//create a function to populate the bar chart 
function makeBar(sample){

    //Building the bar chart
    d3.json(url).then((data) => {
        let sample_data = data.samples;
        //apply a filter that matches based on sample id
        let results = sample_data.filter(id => id.id == sample);
        //get the first entry in 'results' filter
        let first_result = results[0];
        console.log(first_result);
        // get the first 10 results to display in the bar chart
        // Remember to slice the data
        let sample_values = first_result.sample_values.slice(0,10);
        let otu_ids = first_result.otu_ids.slice(0,10);
        let otu_labels = first_result.otu_labels.slice(0,10);
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        // Render the Bar Chart
        // Don't forget to reverse the data
        let bar_trace = {
            x: sample_values.reverse(),
            y: otu_ids.map(item => `OTU ${item}`).reverse(),
            text: otu_labels.reverse(),
            type: 'bar',
            orientation: 'h'
        };

        let layout = {
            title: "Top Ten Bacteria Cultures Found",
            xaxis: {title:'Number of Bacteria'}
          };       
        Plotly.newPlot("bar", [bar_trace], layout);
    });
};

function makeBubble(sample){
    // Build the Bubble Chart
    d3.json(url).then((data) => {
        let sample_data = data.samples;
        //apply filter that matches based on sample id
        let results = sample_data.filter(id => id.id == sample);
        //get the first entry in results filter
        let first_result = results[0];
        console.log(first_result);
        //get results to display in the bubble chart
        let sample_values = first_result.sample_values;
        let otu_ids = first_result.otu_ids;
        let otu_labels = first_result.otu_labels;
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        //Trace for the Bubble chart
        // Reverse the data
        let bubble_trace = {
            x: otu_ids.reverse(),
            y: sample_values.reverse(),
            text: otu_labels.reverse(),
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
            }
        };
// Render the Bubble Chart
        let layout = {
            title: "Bacteria Cultures per Sample",
            xaxis: {title: 'OTU ID'},
            yaxis: {title: 'Number of Bacteria'}
        };
        Plotly.newPlot("bubble", [bubble_trace], layout); 
    });
};

//Demographic/metadata info function
function makeDemographics(sample){
    //get the sample data for populating the demographics section
    d3.json(url).then((data) => {
    //access the metadata with d3
    let demographic_info = data.metadata;
     //filter on sample ID
    let results = demographic_info.filter(id => id.id == sample);
    //store the first result to display in demographic info
    let first_result = results[0];
    console.log(first_result);
    // Clear out any previous selections
    
    d3.select('#sample-metadata').text('');

    Object.entries(first_result).forEach(([key,value]) => {
        console.log(key,value);
        //select the demographic info html section with d3 and append new key:value pairs
        d3.select('#sample-metadata').append('h3').text(`${key} : ${value}`);
    });
    
    });
};

// define the function for change in the dropdown
function optionChanged(newSample){
    //log the value for debug
    console.log(newSample);
// Call functions for the charts and demographic metadata
    makeBar(newSample);
    makeBubble(newSample);
    makeDemographics(newSample);
};
// Initialize the Dashboard
init();