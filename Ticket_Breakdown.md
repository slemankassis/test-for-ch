# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. ### Add custom Agent ID field to database

#### Acceptance Criteria:

A new field called "custom_agent_id" is added to the Agents table in the database
This field is nullable and can accept any alphanumeric string value

#### Time/Effort Estimate: 1 hour

#### Implementation Details:

This can be done by adding a new column to the Agents table in the database using a database migration tool
This field should be nullable and accept alphanumeric string values

2. ### Update user interface to allow Facilities to enter custom Agent IDs

#### Acceptance Criteria:

A new input field for custom Agent IDs is added to the Facility's UI for adding or editing Agents.
The custom Agent ID is saved to the database when the Facility submits the form

#### Time/Effort Estimate: 2hours

#### Implementation Details:

Add a new input field for custom Agent IDs to the form for adding or editing Agents on the Facility's UI
Update the form's submission handler to save the custom Agent ID to the database

3. ### Modify the getShiftsByFacility function to use the custom Agent ID if available

#### Acceptance Criteria:

The getShiftsByFacility function now returns the custom Agent ID in the metadata for each Shift if it is available

#### Time/Effort Estimate: 1 hour

#### Implementation Details:

Modify the getShiftsByFacility function to check if a custom Agent ID exists for the Agent and include it in the metadata for each Shift if available.

4. ### Modify the generateReport function to use the custom Agent ID if available

#### Acceptance Criteria:

The generateReport function now uses the custom Agent ID instead of the internal database id when generating the report

#### Time/Effort Estimate: 1 hour

#### Implementation Details:

Modify the generateReport function to check if a custom Agent ID exists for each
Agent and use it instead of the internal database id when generating the report

5. ### Test and QA

#### Acceptance Criteria:

All new functionality is tested and confirmed to work as expected
Any bugs or issues are identified and fixed

#### Time/Effort Estimate: 2 hours

#### Implementation Details:

Create or update test cases to cover the new functionality
Perform testing and QA to ensure the new feature is working as expected
Address any bugs or issues that are identified

6. ### Documentation and Deployment

#### Acceptance Criteria:

All relevant documentation is updated to reflect the changes made
The new feature is deployed to production

#### Time/Effort Estimate: 1 hour

#### Implementation Details:

Update any relevant documentation such as technical specifications, user guides and release notes
Deploy the new feature to production

**This is a rough estimation of the time and effort required to complete the task, it may vary depending on the complexity of the codebase, the availability of the required resources and the velocity of the team.**
