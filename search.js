var prompt = require('prompt');
prompt.start();
  prompt.get(['textstring'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  textstring: ' + result.textstring);
    
const request = require('request');
const cheerio = require('cheerio');
	var links = new Array();
	links[1] = new Array();
	links[1]['lnk'] = 'http://www.google.com/search?hl=en&q=';
    var slink="";
		links[1]['lnk'] = links[1]['lnk']+result.textstring;
        console.log(slink); 
        request(links[1]['lnk'], (error, response, html) => {
        if(!error && response.statusCode ==200){
        	const $ = cheerio.load(html);  
        	const titles = $('.g');
        	
        	//specifically for first result 
        	const output = titles.find('.r').html();
        	
        	//return title of first link 
        	m = cheerio.load(output);
        	//var y = m('html').html();
        	//console.log(y);
			var t = m('html').text();
        	console.log(t);
        	//console.log(output);
        	var oo=output.split("q=");
        	var ooo=oo[1].split("&amp");
        	console.log(ooo[0]);	
        	
        }
        });
      });    
        



