const fs = require('fs');
const filePath = './test.txt';

let myFileData = fs.readFileSync('test.txt','utf8')

const matches = myFileData.match(/\w(@softwire\.com)\s/g);
 
//console.log(matches.length);

// Use a dictionary to find how many instances of each email domains.

const emailAddresses = myFileData.match(/\w+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);

//console.log(emailAddresses);

let domains = []

for(let i = 0; i < emailAddresses.length; i ++ ) {
    domains[i] = emailAddresses[i].split("@").pop()
}

//console.log(domains)

let domainCounts = {};

domains.forEach(domain => {
    if (domainCounts[domain]) {
        domainCounts[domain] += 1;
    } else {
        domainCounts[domain] = 1;
    }
});

console.log(domainCounts)
