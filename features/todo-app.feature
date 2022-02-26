Feature: Todo Project
  As Product Owner I want to surf on our todo project

  Scenario: User should add ToDo on main page
    Given Empty ToDo list
    When User write "buy some milk" to text box and click to add button
    Then User should see "buy some milk" item in ToDo list