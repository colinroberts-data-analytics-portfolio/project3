#Project 3

import pandas as pd
import matplotlib.pyplot as plt

#Load CSV file into data frame
df = pd.read_csv('vaccinations.csv')

#Data
data = { 
    ('country'):
     [ 'United State', 'China', 'Ecuador', 'Germany', 'India', 'United Kingdom', 'France', 'Russia', 'Spain', 'Canada',
             'Suadi Arabia', 'Turkey', 'Italy', 'Bermuda', 'Kuwait', 'Switzerland', 'Mexico', 'Brazil', 'England', 'Isreal'
     ]}

data = {
    ('Vaccinations'):

    [358463653, 62767000, 3090, 33013230, 24564363, 112912117, 14181642, 
     1880500, 15542638, 8403751, 1103372, 19731396, 29703535, 4597, 2500, 805232, 9726196, 9367645, 98410334, 83928749

]}

#Creating Data Frame
df = pd.DataFrame(data)

#Displaying the DataFrame
print(df)

# the Bar Chart
plt.figure(figsize=(14, 8))
bar = ('country'), ('Vaccinations'), 
color= ('red')

#Labels on top of the bars
for bar in bar:
    height = bar.get_height()
    plt.text(bar.get_x() + 
bar.get_width() / 2, height, f'{height:,}', ha='center', 
va='bottom', fontsize=8)

#plot Layout
plt.xlabel('countries')
plt.ylabel('Vaccination')
plt.title('Covid_19 Vaccination Countries')
plt.xticks(rotation=45)
plt.tight_layout
#Set the y-axis limits from 0 to 100
plt.show()