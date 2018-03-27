const functions = require('../test_assets/functions')
const selector = require('../test_assets/selectors')
const value = require('../test_assets/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    "evenOddTest" : browser => {
        functions.evenOddTest(browser, selector.selector, value)
            
    },
    "filterObjectTest": browser => {
        functions.filterObjectTest(browser, selector.selector, value)
                
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