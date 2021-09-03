(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4303],{94303:function(e){"use strict";e.exports=JSON.parse('{"md":"# Events\\n\\n## A quick introduction\\n\\nAn event is triggered by the browser and we provide a simple interface to help select and listen to those events. A link being clicked, a page coming into focus, or a form being submitted are all examples of events you may wish to listen to.\\n\\nUsing a link being clicked as an example, this would require you to define which link should be bound. We have full support for CSS query selectors, but the ID or Class is often enough.\\n\\n```html\\n<a id=\\"example-id\\" class=\\"example-class\\" data-test=\\"testing\\" .... >\\n```\\n\\nIf we choose the ID option \'example-id\', we can use this as our selector. If the link is clicked, the event will fire. We can then set-up Conditions or Exceptions to test which link has been clicked as secondary check.\\n\\nWe are also able to reference the clicked element in our defined Actions. We could therefore tell our Action to take the value from the attribute \\"data-test\\" and use this to track an interaction. \\n\\n## A small technical overview\\n\\nThe Scale8 Tag Manager has been designed from the ground up to be fully event driven. We support both defined Platform Events and Custom Browser Events.\\n\\nAll Platform Events have a common specification. A create method and a test method. We also transform your defined Custom Browser Events into this structure.\\n\\n```js\\n{\\n    create: (e) => {\\n        window.addEventListener(\'focus\', () => e.trigger(), false);\\n        e.trigger(); //event could have fired...\\n    },\\n    test: () => window.document.hasFocus(),\\n},\\n```\\n\\n<Info>\\n\\nAt present, only the **Scale8 Platform** is available to be selected. Platforms are currently in beta and once this feature is released, developers will be able to submit their own Platforms to extend the functionality of the Scale8 Tag Manager.\\n\\n</Info>\\n\\n## Adding an Event\\n\\nTo add an Event, select the \\"Add Event\\" button in the Rule that you wish to contain the new Event. A new window titled \\"Add Event\\" will appear.\\n\\n![Tag Manager - Add Event](/img/tag-manager/tag-manager-add-event.png)\\n\\n### Using Custom Browser Events\\n\\nThe first checkbox asks if you wish to add a Custom Browser Event. This can be any custom event triggered in the scope of the page window. This is more of an advanced feature, so we will skip this for now.\\n\\n### Using Platform Events\\n\\nTo use a predefined event, select a Platform from the drop-down list. At the time of writing this, only the Scale8 Platform is currently available. Once selected a list of Events will appear that correspond with the chosen platform. A full explanation of Core Events can be found here.\\n\\nIn order to follow the example in the introduction above, select \\"Click Elements\\" from the list and in the \\"Selector\\", swap it from \\"Custom\\" to \\"ID\\". Enter the ID of the element (example-id).\\n\\n### Resetting Event state\\n\\nAn option to reset the event state is provided via a checkbox. Enabling this feature will reset the click event after some period of elapsed time, specified in milliseconds. This is useful in some more advanced scenarios, so once again we will move on.\\n\\n### Automatic name generation\\n\\nThe final option \\"Generate Name\\" will attempt to generate a name from the values specified automatically. Should you wish to provide your own, more meaningful name for this event, please uncheck this box and enter your own name.\\n\\n### Committing your changes\\n\\nOnce ready, and the form has been completed, click \\"Add Event\\". Your new Event should be shown under \\"Events\\" in the Rule you specified.\\n\\n## Managing an Event\\n\\n### Editing\\n\\nTo edit an Event, please select the \'Pencil\' icon to the right of the chosen Event. This will display a right-side window pane once clicked. Please note that only direct properties of the Platform Event will be modifiable. Once changes have been completed, click the \\"Update Event\\" button at the bottom to commit your updates.\\n\\n### Ordering\\n\\nThere is currently no support for Event ordering. In nearly all use cases evaluated by our team, there was not a single common use case found for following a sequence to trigger a Rule. Therefore, to keep our interface as simple as possible, we have omitted this feature for now.\\n\\nIf Event sequence is important, please use an Action to set an App-State variable, and a follow-up Rule in another Rule Group to take any appropriate action, testing for a Condition on that App-State variable in order to create a trigger.\\n\\n### Deleting an Event\\n\\nSelect the \'Trash\' icon to the right of the chosen Event to delete it. Once deleted it will be removed from the Events list. This action can\'t be undone."}')}}]);