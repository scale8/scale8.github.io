# Global Triggers

## Introduction

A Trigger is made up of 'Events', 'Conditions' and 'Exceptions'. This is the same group of attributes required to configure a Rule. A Rule abstracts away the Trigger mechanism, but we expose this in Global Triggers in order enable multi-Rule attachment.

Global Triggers are located in the root of a Revision and can be found underneath 'Tags' in the left menu.

![Tag Manager - Global Triggers](/img/tag-manager/tag-manager-global-triggers.png)

## Managing Global Triggers

To manage a Global Trigger, either click on the name or locate the 'Right Arrow' icon under the Actions column. This will navigate you into the Trigger view.

![Tag Manager - Trigger View](/img/tag-manager/tag-manager-trigger-view.png)

### Adding a new Event

To attach an Event to a Global Trigger, please visit [Adding an Event](/docs/events#adding-an-event)

### Adding Conditions or Exceptions

To attach a new Condition or Exception to a Global Trigger, please visit [Adding Conditions and Exceptions](/docs/conditions-and-exceptions#adding-conditions-and-exceptions)

### Managing Events

To manage an Event in a Global Trigger, please visit [Managing an Event](/docs/events#managing-an-event)

### Managing Conditions or Exceptions

To manage a Condition or Exception in a Global Trigger, please visit [Managing a Condition or Exception](/docs/conditions-and-exceptions#managing-a-condition-or-exception)

### Creating a Global Trigger

To create a Global Trigger, first select the 'Add' button in the top-right. A new right-side window should appear and request a name for the new Trigger. Once the name has been entered, click on "Create Trigger" to save and close the window. The table view will then be updated with the new Trigger present.

![Tag Manager - Global Triggers](/img/tag-manager/tag-manager-global-trigger-add.png)

### Editing a Global Trigger

In the table view of Global Triggers, select the 'Pencil' icon located in the 'Actions' column. Once changes have been made, commit your changes, and the table view will be refreshed automatically.

### Attaching a Global Trigger

To attach a Global Trigger, please visit [Using a Global Trigger](/docs/rules#using-a-global-trigger)

### Deleting a Global Trigger

<Warn>

If a Global Trigger is currently in use you will be first prompted to un-link it from the Rule is it currently attached to. You will not be able to delete the Trigger until it has been removed from all the Rules it is currently attached to.

</Warn>

To delete a Global Trigger, select the 'Trash' icon in the 'Actions' column. Once deleted the table view will refresh, and the Global Trigger will have been automatically removed.