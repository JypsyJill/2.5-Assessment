
let inputField = (browser, selector, value) => {
    browser
    .clearValue(selector)
    .setValue(selector, value)
    // .verify.value(selector, value)
}

let evenOddTest = (browser, selector, value) => {
    browser
    .waitForElementVisible('input[name="evenOddInput"]',3000)
        .setValue(selector.rndmnumbers, "2,91,273,479,36,12,2")
    .click(selector.evenOddButton)
       .expect.element(selector.evenresults).text.to.equal("Evens: [2,36,12,2]")
browser
    .expect.element(selector.oddresults).text.to.equal("Odds: [91,273,479]") 
}

let filterObjectTest = (browser, selector, value) => {
       browser
    .waitForElementVisible('input[name="objectFilterInput"]',3000)
    .setValue(selector.objfilter,value.objfilter)
    .click(selector.objfilterButton)
    .expect.element(selector.objfilterResults).text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    
}
let filterStringTest = (browser, selector, value) => {
    browser
    .waitForElementVisible('input[id="nameFilterInput"]',3000)
    .setValue(selector.strfilter,value.strfilter)
    .click(selector.strfilterButton)
    .expect.element(selector.strfilterResults).text.to.equal('Filtered Names: [ "James" ]')
}
let palindromeTest = (browser, selector, value) => {
    browser
    .waitForElementVisible('input[name="palindromeInput"]',3000)
    .setValue(selector.palinput, value.palinput)
    .click(selector.palButton)
    .expect.element(selector.palResults).text.to.equal('Palindrome: true')

}
let sumTest = (browser, selector, value) => {
    browser
    .waitForElementVisible('input[name="sumInput1"]',3000)
    .setValue(selector.sumin1,value.sumin1)
    .setValue(selector.sumin2, value.sumin2)
    .click(selector.sumButton)
    .expect.element(selector.sumResults).text.to.equal('Sum: 36')
}
module.exports = {
    evenOddTest:evenOddTest,
    filterObjectTest:filterObjectTest,
    filterStringTest:filterStringTest,
    palindromeTest:palindromeTest,
    sumTest:sumTest
}
