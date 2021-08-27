# Rule Groups

## A quick overview

Rule Groups contain Rules and a single Tag can have many Rule Groups. All Rule Groups defined will have to opportunity to execute in parallel with each other.

For example, if we have **Rule Group 1**, **Rule Group 2** and **Rule Group 3**. These three Rule Groups will execute at the same time. **Only one** Rule inside each of these Rule Groups can be executed however.

![Tag Manager - Rule Group Containers](/img/tag-manager/tag-manager-rule-group-containers.png)

Rule Groups use '**AND**' logic while Rules use '**OR**' logic. This provides a flexible structure for almost every possible use case and maintains simple, intuitive and logical consistency.

## Creating a Rule Group

To create a new Rule Group, please select click the "Add Rule Group" button at the bottom of the Rules page. You will be prompts in a new right-side window pane to enter a name for this new Rule Group.

## Managing a Rule Group

### Accessing the menu

To view the Rule Group menu, hover over the icon containing three dots to the right of the Rule Group container. A menu will reveal itself on mouseover.

![Tag Manager - Rule Group Menu](/img/tag-manager/tag-manager-rule-group-menu.png)

### Editing a Rule Group

To edit the name of the Rule Group, select the 'Pencil' icon.

### Re-ordering a Rule Group

Rule Groups can be re-ordered, enabling them to be moved up and down. While this doesn't change the execution logic as Rule Groups run in parallel, it can be useful to better manage your own logic.

### Duplicating a Rule Group

A Rule Group and all its contents can be duplicated by selecting the 'Copy' icon in the Rule Group menu. You will be prompted to enter a new name for your Rule Group before the whole structure will be cloned.

### Deleting a Rule Group

If a Rule Group is deleted, the Rule Group container along with Rules, Events, Conditions, Exceptions etc. will all be deleted too. To delete the Rule Group, locate the menu and select the 'Trash' icon and confirm the action when prompted. You will be informed of what will be deleted when running this delete action.