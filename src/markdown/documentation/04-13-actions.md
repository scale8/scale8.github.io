# Actions

## A quick introduction

Actions sit within an Action Group and contain some Action to be performed once a Rule containing the Action Group has been triggered. The order of execution for Actions may need to be considered, and we provide the functionality to re-order Actions to help you meet your required workflow more easily.

All the Actions within an Action group will execute one after another, in serial. This is useful as the preceding Action may need to set something up before the following Action then runs.

Please see Action Group Distributions for more information regarding the distribution logic that can be employed for things like A/B testing features.

Custom Variables (Macros) can be used in some Action input fields and allow for dynamically inserted values. This can be useful for setting up a wide range of actions that need to access variables that are tested for in Conditions or created by Events.

## A small technical overview

Actions can either be synchronous or asynchronous, and if the former it chosen, it will be wrapped into a promise. In our specification an Action must provide a 'run' method. This is called at point of execution and the value of the return is ignored unless it's a promise. If a promise is provided, we will wait until that promise has been resoled before continuing to the next Action. This guarantees that Actions run in serial.

The example below is a simple logging Action that has defined a synchronous run method. It takes a value passed in from the user and logs this to both the browser console, and the Scale8 debug layer.

```typescript
{
    run: (a, log, err) => {
        const replacement = a.macroReplace(a.props.message);
        log(replacement);
        Logger.info(replacement);
    },
},
```

The Scale8 Platform provides a similar selection of core actions that are present in other Tag Manager offerings such as Google Tag Manager and Adobe DTM. On our roadmap towards the end of Q4 2021, we will be releasing a new feature that enables developers to define their own Platform Actions. For now, we offer the ability for both JavaScript and HTML snippets to be executed in the page.

## Adding an Action

In order to create an Action, select the "Add Action" button in the Action Group container you wish to create the Action in.

![Tag Manager - Actions Container](/img/tag-manager/tag-manager-actions-container.png)

### Selecting a Platform Action

Once selected, a right-hand side window pane should appear. Select the 'Scale8 Platform' from the drop down, followed by the 'Action' you wish to use. For the purpose of this example, we have selected the 'Simple Logger' action as shown below.

![Tag Manager - Actions Container](/img/tag-manager/tag-manager-add-action.png)

### Using Custom Variables

This particular method has support for ***custom variables***. To select a variable click on "Use Variable". A small window should then appear and prompt for the selection of both Platform and Data Container. In this example we have selected "Query String" as our data container and then in the 'Custom Data Element' text box, we have entered 'foo'. This Action should now print out the value of **?foo=** from the query string in the browser's address bar.

## Managing an Action

### Editing an Action

To edit an Action, please select the 'Pencil' icon to the right of the chosen Action. This will display a right-side window pane once clicked. Finally, when changes have been completed, click the "Update Action" button at the bottom to commit your updates.

### Ordering Actions

Provided there is more than just one Action present in the list, the Action can be moved either up or down. Actions at the top of the list are executed first, while actions at the bottom of the list are executed last. Ordering can be very important, and the wrong sequence could prevent your setup from working correctly.

### Deleting an Action

Select the 'Trash' icon to the right of the chosen Action to delete it. Once deleted it will be removed from the list.
