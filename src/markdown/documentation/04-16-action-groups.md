# Action Groups

## Introduction

Action Groups are the container for Actions. All Actions in an Action Group will execute in the order they are presented (top-down). Action Groups can be distributed via Action Group Distributions to achieve more complex workflows.

![Tag Manager - Action Group Example](/img/tag-manager/tag-manager-action-group-example.png)

The example above shows an Action Group containing 3 actions. The first to execute will be "Scale8 Platform - Inject Script", followed by "Scale8 Platform - Custom HTML" and then finally "Scale8 Platform - Custom JavaScript".

An example of this workflow:- injecting a 3rd party library, then creating an element to contain some widget, finally followed by some JavaScript to tell the third party library to target the container defined by the Custom HTML action.

## Create an Action Group

To create a new Action Group, first select the "Add Action Group" button in the Rule you wish to create a new Action Group. Once the right-hand side window appears, you will be prompted to add a new name for this Action Group. When done, select the "Create Action Group" button to commit your changes and save. After doing this, the window will close automatically and the Rule will be updated to reflect the new Action Group that has just been created.

![Tag Manager - Action Group Example](/img/tag-manager/tag-manager-action-group-add.png)

## Managing Action Groups

### Accessing the menu

To view the Action Group menu, hover over the icon containing three dots to the right of the Action Group container. A menu will reveal itself on mouseover.

![Tag Manager - Action Group Distribution Menu](/img/tag-manager/tag-manager-action-group-menu.png)

### Editing Action Groups

To edit an Action Group, please select the 'Pencil' icon to the right of the chosen Action Group. This will display a right-side window pane once clicked. Finally, when changes have been completed, click the "Update Action Group" button at the bottom to commit your updates.

### Ordering Action Groups

Action Group can be moved up or down the list. Action Groups are executed in serial, and the order can play important part of the desired workflow.

If you have more than one Action Group, follow the steps in 'Accessing the menu' above to reveal the menu. Select the up arrow to shift the position up, or the down around to move it further down the list.

### Deleting an Action Group

Select the 'Trash' icon to the right of the chosen Action Group to delete it. Once deleted it will be removed from the list.
