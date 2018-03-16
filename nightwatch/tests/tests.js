module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    'Even and Odds basic functionality': browser => {
        browser
            .waitForElementVisible('input[name="evenOddInput"]',3000)
            .setValue('input[name="evenOddInput"]', "2,91,273,479,36,12,2")
            .click('button[name="evenOddButton"]')
            .expect.element('span[name="evenResults"]').text.to.equal("Evens: [2,36,12,2]")
        browser
            .expect.element('span[name="oddResults"]').text.to.equal("Odds: [91,273,479]")
    },
    'Filter Object functionality': browser => {
        browser
        .waitForElementVisible('input[name="objectFilterInput"]',3000)
        .setValue('input[name="objectFilterInput"]',"title")
        .click('button[name="objectFilterButton"]')
        .expect.element('span[name="objectFilterResults').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        
    },
    'Filter String functionality': browser => {
        browser
        .waitForElementVisible('input[id="nameFilterInput"]',3000)
        .setValue('input[id="nameFilterInput"]',"Ja")
        .click('button[id="nameFilterButton"]')
        .expect.element('span[name="nameFilterResults"]').text.to.equal('Filtered Names: [ "James" ]')
    },
    'Palindrome functionality': browser => {
        browser
        .waitForElementVisible('input[name="palindromeInput"]',3000)
        .setValue('input[name="palindromeInput"]',"madamimadam")
        .click('button[name="palindromeButton"]')
        .expect.element('span[name="palindromeResults"]').text.to.equal('Palindrome: true')

    },
    'Sum functionality': browser => {
        browser
        .waitForElementVisible('input[name="sumInput1"]',3000)
        .setValue('input[name="sumInput1"]',"17")
        .setValue('input[name="sumInput2"]',"19")
        .click('button[name="sumButton"')
        .expect.element('span[name="sumResults"]').text.to.equal('Sum: 36')
    }
}