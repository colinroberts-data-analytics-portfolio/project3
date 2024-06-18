CREATE TABLE covid_population(
country VARCHAR(40) PRIMARY KEY NOT NULL,
total_cases BIGINT,
total_deaths BIGINT,
latitude DECIMAL(8,4),
longitude DECIMAL(8,4),
population BIGINT,
population_density INTEGER,
land_area BIGINT);

