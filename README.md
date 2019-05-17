# WebScrapingGoogleResults
Draft for returning google search results on a webpage given a keyword 




Tools Used: TextWrangler, MacTerminal
Installations Required: node.js, prompt, cheerio, 

INSTRUCTIONS ON BUILD
1. npm install cheerio
2. npm install prompt
3. Using terminal only-start terminal with "node search" typed within local directory
4. Give word want to search with to prompt(node.js) that appears to run the application 
5. Results displayed in terminal with console.log()

DESRIPTION ON IMPLEMENTATION 
1.Using terminal only, mainly because of use of cheerio
2. Use prompt the user for input using "var prompt = require('prompt');"
3. using "links[1]['lnk'] = 'http://www.google.com/search?hl=en&q=';" specifically for 
google search, adding the input given by the user to the link
4. Breakdown parts of the html obtained using cheerio and search for the specific URL and 
title using class names
5. Split() method used to separate the url of the first result from other data given for 
the first search result's html  
