# Creating an Application

## Create a new Application

In order to create a new application, you'll need to navigate into your Tag Manager account.

![Tag Manager - Account](/img/tag-manager/tag-manager-account.png)

Once inside, if you haven't already created your first application, you'll be presented with a "Create Your First Application" button. Selecting that will present a side window pane asking for you to enter the domain of your application. Otherwise, please select the "Add" icon in the top right of the page to display the "Create Application" window pane.

![Tag Manager - Create Application](/img/tag-manager/tag-manager-create-application.png)

In the right window pane, please enter your domain name of for the new application. By default, the name of your Application with inherit the domain name, however this can be changed. We appreciate some users will prefer to have multiple tag-manager instances for the same domain. Please however do not confuse this with Environments as we do have fully support for managing multiple Environments.

## Installing the Tag Manager

Once your application has been created you'll be prompted to install this on your website. The basic scaffolding has been created for you with your first Environment already configured and ready to install.

<Warn>

This code needs to be installed in the ***HEAD*** of your page. It can be dynamically loaded, but we **do not** recommend it. Please make sure that you **do not** try to load this code into friendly or un-friendly iframes.

</Warn>

![Tag Manager - Install Application](/img/tag-manager/tag-manager-install.png)

## Analytics Only

We are aware that some website owners will not require a Tag Manager at this stage and instead be interested only in our analytics product. For this reason we have decoupled the two products and offer an analytics-only install option.

There is full support for both single-page applications and also websites that route to new pages using the '#' symbol. If you are unsure, please leave these options disabled and reach out to us in order to assist you further.

![Tag Manager - Analytics Only Mode](/img/tag-manager/tag-manager-analytics-only.png)

<Warn>

The same warning as the Tag Manager installation still applies however. This code needs to be installed in the ***HEAD*** of your page. It can be dynamically loaded, but we **do not** recommend it. Please make sure that you **do not** try to load this code into friendly or un-friendly iframes.

</Warn>

## Managing your Applications

Once the installation window has been closed you'll be presented with a table displaying your applications. To navigate into your application please either click on the name, or the right arrow in the "Actions" menu.

![Tag Manager - Application View](/img/tag-manager/tag-manager-app-view.png)

## Troubleshooting your installation

TODO. #s8debug