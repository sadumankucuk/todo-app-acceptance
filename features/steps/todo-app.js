const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkElementValue = require("../support/check/checkElementValue");

Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "/")
    await checkElementExists.call(this, "#todo-input", false)
    await checkElementValue.call(this,"#todo-input", "not", "some value")
    await checkElementExists.call(this, "#add-todo", false)
});

When(/^User write "([^"]*)" to text box and click to add button$/, function () {

});

Then(/^User should see "([^"]*)" item in ToDo list$/, function () {

});