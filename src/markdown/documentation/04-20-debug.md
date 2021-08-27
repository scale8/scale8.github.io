# Debugging & Troubleshooting

<Info>

We are already working on providing a relay option for debugging on a mobile device. This will enable a similar view inside our main UI and will also assist with capturing and tracing actions across multiple page views.

</Info>

## The debug layer introduction

The debug layer can be launched at any time by appending **#s8debug** to any URL that is running our tag manager. You will need to be logged in however, with a valid session to gain access to detailed debugging information. 

![Tag Manager - Debug Layer - Revision Preview](/img/tag-manager/tag-manager-debug-revision-preview.png)

Selecting 'Revision Preview' will also launch the debug layer. It is possible to preview any review at any time and on any device by scanning the provided QR code.

![Tag Manager - Debug Layer](/img/tag-manager/tag-manager-debug.png)

## Locating Placement Tags

When using 'Placement Tags', selecting the 'Locate' icon in the top right menu will jump you to your placement tag on the page. Since 'Head Tags' are invisible, we are unable to display the location of these tags.

## Missing Tags

We list all the tags you have created in the left menu of the debug layer window. If we fail to detect a tag loading then we will mark it with warning symbol.

![Tag Manager - Debug Layer - Missing Tags](/img/tag-manager/tag-manager-debug-missing-tag.png)

## Repeated Rules

Rules can be repeated, and we have added a drop-down menu in the layer view to assist with navigating backwards and forwards through rule executions.

![Tag Manager - Debug Layer - Repeated Rules](/img/tag-manager/tag-manager-debug-repeated-rules.png)

## Data Layer

'Data layers' provides a full and transparent view of how the tag manager sees the data held by data containers on your website. As the data changes it will be refreshed and updated in this view.

![Tag Manager - Debug Layer - Data Layer](/img/tag-manager/tag-manager-debug-data-layer.png)

## Logs and errors

Events, conditions, exceptions and actions all have dedicated log and error streams that are fed directly to the debug layer. This feature has been designed to help with complex debugging issues.  

To view the log, navigate to 'information' icon and select it. You should be then presented with a detail log for that entity.

![Tag Manager - Debug Layer - Debug Logging](/img/tag-manager/tag-manager-debug-logging.png)

When debug mode is enabled we also log directly to the browser's console. To view the log, navigate to your developer tools area in your chosen browser and select the 'console' option.

![Tag Manager - Debug Layer - Console Logging](/img/tag-manager/tag-manager-console-logging.png)


