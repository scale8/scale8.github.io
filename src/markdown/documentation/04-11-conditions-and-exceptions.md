# Conditions and Exceptions

## A quick introduction

A condition is a test made on a data container and aims to assert that some key belonging to a data container object is aligned with the expected value. An exception aims to make the same test, but instead exclude the rule should the test pass.

### Condition example

For example, we may create a condition to only trigger a Rule when a visitor is detected to be from the United Kingdom. For this test we can access our custom data layer variable 'country' and check this value is equal to 'GB', the country code used to identify the United Kingdom.

![Tag Manager - Condition Example](/img/tag-manager/tag-manager-condition-equal-gb.png)

### Exception example

However, we may have another case where we'd like to trigger a Rule for all visitors, except visitors from Italy. Using the same process as conditions, we can use custom data layer variable 'country' and check this value is equal to 'IT', the country code used to identify the Italy.

![Tag Manager - Exception Example](/img/tag-manager/tag-manager-exception-equal-it.png)

### Custom Data Layer example

In this example we have asked the Tag Manager to check the value stored in our custom data layer.

```js
window.customDataLayer = {
  country: 'US',
};
```

In this example above, the Rule using the condition that is testing for country equal to 'GB' would fail, however the Rule using the exception would pass as the country is not equal to 'IT'.

<Info>

At present, only the **Scale8 Platform** is available to be selected. Platforms are currently in beta and once this feature is released, developers will be able to submit their own Platforms to extend the functionality of the Scale8 Tag Manager.

</Info>

## A small technical overview

Just like Events, Data Containers are event driven too. Some Data Containers are mutable and can be regularly updated. When they do update, an internal event is then triggered to re-evaluate the Rule.

The below is an example of data container that transforms a URL query string into an object ready to be queried. The specification requires that change, get and dump functions are all defined. When the URL changes on the page, we automatically re-test the Rule.

```typescript
{
  change: (e) => {
    window.addEventListener('popstate', () => e.trigger(), false);
  },
  get: (e) => ObjectSearch.find(WindowElement.getQueryStringAsObject(), e.key),
  dump: () => WindowElement.getQueryStringAsObject(),
},
```

The Scale8 Platform provides a number of Core Data Containers that can be found here. As previously mentioned, there will also be the functionality to enable Platforms other than the Scale8 Platform in the near future. For now, you can use a Custom Data Layer to dynamically extend current Data Containers.

## Adding Conditions and Exceptions

First locate the rule under which you would like the Condition or Exception to be created. Click on either the "Add Condition" or "Add Exception" button and this will trigger a window pane to open from the right-hand side. The process for adding either a new Condition or new Exception is the same.

### Selecting a Platform Data Container

Select the Scale8 Platform from the drop-down and after that select a Data Container. In this example we are going to check that in our Custom Data Layer, that foo.bla is greater than 5. We are assuming there is correctly configured Custom Data Layer present on the page already.

### An example Custom Data Layer

```html
<script>
window.customDataLayer = {
    foo: {
        bla: 6,
    },
};  
</script>
```

### Accessing values with Dot Notation

In the 'Custom Data Element' field we use dot notation, foo.bla to provide the key reference. We then select 'Greater Than' as our 'Condition' to test for. Finally, we add a value to test against property stored on 'foo.bla'.

![Tag Manager - Create Condition Example](/img/tag-manager/tag-manager-create-condition-example.png)

Once all the fields have been completed, click on either the "Add Condition" or "Add Exception" button to save. The page should then refresh and the new Condition or Exception will be visible in the Rule.

## Managing a Condition or Exception

### Editing Conditions and Exceptions

To edit a Condition or Exception, please select the 'Pencil' icon to the right of the chosen Condition or Exception. This will display a right-side window pane once clicked. Once changes have been completed, click the "Update" button at the bottom to commit your updates.

### Ordering Conditions and Exceptions

As with Events, ordering of Conditions and Exceptions is currently not supported. In nearly all use cases evaluated by our team, there was not a single common use case found for following a sequence to trigger an Rule. Therefore, to keep our interface as simple as possible, we have omitted this feature for now.

If having a sequence is important, please use an Action to set an App-State variable, and a follow-up Rule in another Rule Group to take any appropriate action, testing for another Condition on that App-State variable in order to create a trigger.

### Deleting Conditions and Exceptions

Select the 'Trash' icon to the right of the chosen Conditions or Exceptions to delete it. Once deleted it will be removed from the list. This action can't be undone.