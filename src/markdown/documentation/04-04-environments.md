# Environments

## Introduction

A single Application can have multiple Environments. A typical workflow would see a website being tested first in 'Development', then moving to 'Staging' for QA and then finally being deployed to a 'Live' or 'Production' environment.

We allow multiple Environments to be created to best fit your current deployment workflow. On top of this we offer the ability to set Environment Variables, and these can be accessed in Conditions, Exceptions and Actions within a Rule container.

<Info>

Please note that Environment Variables are public. These are present client-side when we load our configuration. Please **do not** place 'secrets' in these variables!

For our server-side actions we will allow you to manage secrets, however this will be in a separate location and clearly labelled. Server-side actions are currently in beta testing.

</Info>

We appreciate that some website owners may wish to white-label our platform and therefore we have full support for custom domains. You'll need to bring your own SSL certificate however.

## Creating a new Environment

To create an Environment, please navigate to the Environments page under the Application in which you would like to add a new Environment. Once on the page, please select the 'Add' icon in top right, and you will be presented with a right side window pane titled 'Create Environment'.

You'll be prompted to enter a name for your Environment followed by the URL. While the URL is optional, it is useful as the preview tool on Revisions will pick this up automatically to save you writing it out each time.

An Environment requires a Revision to be attached. Please note that **only finalised** Revisions will appear in this drop-down menu.

If you wish to have a custom domain, you'll need to also enter your domain for which the certificate is valid along with the private key and certificate (in PEM format). We will automatically validate this for you when you click "Create Environment".

<Info>

For security reasons we don't store your SSL certificates in our database. There is no API endpoint to fetch them either. For this reason, you'll need to provide them again when you come to update an Environment.

</Info>

Finally, at the point of creating an Environment you can add custom key -> value pairs. These will become accessible when using Conditions, Exceptions or Actions under Rules.

## Managing your Environments

To edit your Environment variables, please locate the 'Cog' icon in the "Actions" column. Make the necessary changes and close the window once completed. To add a new key -> value, enter the key and value before click on the '+' symbol to add it.

Use the 'Pencil' icon to make changes to the name, url or current Revision attached to the Environment.

## Installing an Environment

Select the 'Code' icon under the "Actions" column for the desired Environment to be installed. Follow the instructions provided in [Creating an Application](/docs/creating-application#installing-the-tag-manager)

## Deleting an Environment

To delete an Environment, select the 'Trash' icon. Please note that deleting an Environment is final and can't be undone. We therefore recommend you make sure that the Environment is no longer in use before deleting it.

<Warn>

If an Environment is removed and is in use on a production website this will cause the revision installed on the Environment to cease working. This operation can't be reverted.

</Warn>