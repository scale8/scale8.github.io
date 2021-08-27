# Action Group Distributions

## Introduction

An Action Group Distribution is the container for Action Groups. This level of abstracted provides a unique way of distributing Actions via the dynamic selecting of an Action Group. There is also the option to link a globally defined Action Group Distribution too. This can be useful if the same Action Group Distribution is used by multiple Rules.

### Types of distribution explained

At present there are three types of distribution, 'None', 'Page Load' and 'Session'. Selecting 'None' will prevent any distribution from occurring on the action groups while 'Page Load' and 'Session' will distribute across multiple Action Groups. If 'Page Load' is selected, then distributed will occur at the page level, so each selection on an Action Group will be at random. 'Session' will lock an against a user and select the same Action Group each time it is run. Please note that we do not cookie users or follow them from device to device, instead we create a short-term (24 hour) hash that can't be used to track a visitor or hold any personal information about them. This hash is converted into a distribution value with a range from (1 to 1000) and this is used by the distribution.

![Tag Manager - Action Group Distribution Example](/img/tag-manager/tag-manager-action-group-distribution-example.png)

### Example usages

In the example above, the 'Example Distribution' will expect to call 'Action Group 1' 70% of the time, while 'Action Group 2' will be called '30%' of the time. Any number of Action Groups can be added into this distribution. The percentages can be changed accordingly to reflect the desired distribution. This feature has been primarily designed for quick A/B testing and tracking. It would enable a website owner to very quickly show a small percentage of visitors a new feature while the majority of visitors continue to access the site as normal. These features can be easily tracked and displayed in the Scale8 Tag Manager analytics dashboard.

Another example usage could be working with multiple advertising networks and allocating a small percentage of traffic to a new network to in order to evaluate them. This workflow can be easily achieved and managed in just a few clicks.

## Create an Action Group Distribution

To create a new Action Group Distribution, select the "Add Button" in your chosen Rule. Once clicked this should show a new window pane on the right-hand side of the page.

![Tag Manager - Action Group Distribution - Add](/img/tag-manager/tag-manager-action-group-dist-add.png)

### Create Custom tab

If you wish to create a new custom Action Group Distribution then you will need to enter a new name followed by the desired distribution type. Please see the explanation of distribution types in the introduction above.

### Link Global tab

Instead, there is also an option to link a globally defined Action Group Distribution. Consider creating a global Action Group Distribution should you wish to re-use this across many of your Rules.

### Committing your changes

Once the form has been correctly filled in, please select the button at the bottom of the form.

## Managing Distributions

### Accessing the menu

To view the Action Group Distribution menu, hover over the icon containing three dots to the right of the Action Group Distribution container. A menu will reveal itself on mouseover.

![Tag Manager - Action Group Distribution Menu](/img/tag-manager/tag-manager-action-group-dist-menu.png)

### Editing

To edit an Action Group Distribution, please select the 'Pencil' icon to the right of the chosen Action Group Distribution. This will display a right-side window pane once clicked. Finally, when changes have been completed, click the "Update Action Group Distribution" button at the bottom to commit your updates.

### Ordering

Action Group Distributions can be moved up or down the list. Action Group Distributions are executed in serial, and the order can play important part of the desired workflow.

If you have more than one Action Group Distribution, follow the steps in 'Accessing the menu' above to reveal the menu. Select the up arrow to shift the position up, or the down around to move it further down the list.

### Deleting

Select the 'Trash' icon to the right of the chosen Action Group Distribution to delete it. Once deleted it will be removed from the list.