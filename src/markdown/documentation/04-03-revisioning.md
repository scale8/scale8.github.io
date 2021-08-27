# Revisions

## Introduction

<Info>

We are making changes to our revision difference tool. It will be far more powerful, intuitive and easier to use. We've never seen anyone take this kind of approach either, so it could be a first. We'll keep the existing tool however and await feedback from users before phasing it out.

</Info>

Tags are under version control in our system. We looked at how Google Tag Manager, Adobe DTM and other had approached this challenge are we believe we've got this just right. It is powerful and yet simple enough to work with on a daily basis.

We wanted to give website owners confidence in the Environments they create and deploy, but we didn't want to complicate the process or increase too many steps as to significantly slow the overall management and release process.

## Immutability

Before a revision can be attached to an Environment, it must first be finalised. Once locked it can't be unlocked and must be cloned in order to continue working on it. This provides a guarantee that any revision connected to any Environment can't be modified.

## Create a revision

Every application when generated will contain a basic skeleton. Part of this initial construct will house the first revision. To 'Create' a new revision it must be cloned from a parent revision.

## Cloning

When a revision is cloned, it will clone everything under that Revision, this includes any Tags, Rule Groups, Rules, Events, Conditions etc. A modification to any of the entities under the Revision will not impact anything else in any other Revision.

## Finalising

Once all the necessary changes have been made, the Revision can be finalised and then deployed to any of the Environments you have created. A Revision however can't be unlocked, it must be cloned. A prompt will show if you are inside of a Revision that has been finalised and ask you to clone it before trying to work on it.

## Previewing

A Revision can be previewed at any time and in any state (final or not). Click on the 'Eye' icon and when prompted, enter the URL on which to preview the revision.

<Info>

Please note that you must have the Tag Manager installed on the page you wish to preview on. It can be any existing Environment, but the base Tag Manager code is required to load the selected Revision and override the one that is currently attached.

</Info>

## Deploying

If the Revision is ready to be deployed, select the 'Deploy' button (Upload Icon) and this prompt you to select an Environment in which the Revision should be installed.

## Deleting a Revision

We don't currently allow the deleting of a revision. We may in the future allow some branches to be removed, provided that the Revision is not a parent of child currently in use. For now this provides a valuable history and is unlikely to change in the near term.