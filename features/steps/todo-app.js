const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkElementValue = require("../support/check/checkElementValue");
const sendKeys = require("../support/action/sendKeys");
const clickElement = require("../support/action/clickElement");

Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "/")
    await checkElementExists.call(this, "#todo-input", false)
    await checkElementValue.call(this,"#todo-input", "not", "some value")
    await checkElementExists.call(this, "#add-todo", false)
});

When(/^User write "([^"]*)" to text box and click to add button$/, async function (newTodo) {
    await sendKeys.call(this, "#todo-input", newTodo)
    await clickElement.call(this, "#add-todo")
});

Then(/^User should see "([^"]*)" item in ToDo list$/, function () {

});