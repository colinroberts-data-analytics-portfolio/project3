# pip install dask


import dask.dataframe as dd
import pandas as pd

# Define the file paths
input_file_path = r'C:\Users\colin\Desktop\VU_BootCamp_Assignments\project3\data\set1\owid-covid-data.csv'
output_file_path = r'C:\Users\colin\Desktop\VU_BootCamp_Assignments\project3\data\set1\cleaned_owid_covid_data.csv'

# Load the CSV file with Dask, specifying the dtype for the problematic column
df = dd.read_csv(input_file_path, dtype={'tests_units': 'object'})

# Replace '########' with an empty string and then convert to NaT
df['date'] = df['date'].str.replace('########', '')

# Convert the date column to datetime
df['date'] = dd.to_datetime(df['date'], errors='coerce')

# List of columns to keep (adjust based on your needs)
columns_to_keep = [
    "iso_code", "continent", "location", "date", "total_cases", "new_cases", "new_cases_smoothed", "total_deaths", 
    "new_deaths", "new_deaths_smoothed", "total_cases_per_million", "new_cases_per_million", 
    "new_cases_smoothed_per_million", "total_deaths_per_million", "new_deaths_per_million", 
    "new_deaths_smoothed_per_million", "reproduction_rate", "icu_patients", "icu_patients_per_million", 
    "hosp_patients", "hosp_patients_per_million", "weekly_icu_admissions", "weekly_icu_admissions_per_million", 
    "weekly_hosp_admissions", "weekly_hosp_admissions_per_million", "total_tests", "new_tests", 
    "total_tests_per_thousand", "new_tests_per_thousand", "new_tests_smoothed", "new_tests_smoothed_per_thousand", 
    "positive_rate", "tests_per_case", "tests_units", "total_vaccinations", "people_vaccinated", 
    "people_fully_vaccinated", "total_boosters", "new_vaccinations", "new_vaccinations_smoothed", 
    "total_vaccinations_per_hundred", "people_vaccinated_per_hundred", "people_fully_vaccinated_per_hundred", 
    "total_boosters_per_hundred", "new_vaccinations_smoothed_per_million", "new_people_vaccinated_smoothed", 
    "new_people_vaccinated_smoothed_per_hundred", "stringency_index", "population_density", "median_age", 
    "aged_65_older", "aged_70_older", "gdp_per_capita", "extreme_poverty", "cardiovasc_death_rate", 
    "diabetes_prevalence", "female_smokers", "male_smokers", "handwashing_facilities", "hospital_beds_per_thousand", 
    "life_expectancy", "human_development_index", "population"
]

# Drop unused columns
df = df[columns_to_keep]

# Save the cleaned CSV file
df.to_csv(output_file_path, single_file=True, index=False)





### RUN
# python clean_dates_with_dask_library.py