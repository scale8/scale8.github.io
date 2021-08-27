# Installed Platform Revisions

## Introduction

From time to time most code bases will change. These published changes can cause issues for those who are reliant on their current version and perhaps not yet ready to upgrade to the next version. New releases of software can create breaking changes and we have attempted to minimise that chance by adding version control. This enables version locking at the revision level and provides confidence that newer versions of code will not break the current setup.

At the Application level, a Platform is installed and any terms of service are agreed to. This platform is then freely available throughout the Application and in all Revisions. Different Revision however may be linked to different versions of the Platform. This enables a Revision to have a newer version of the Platform code and then have this deployed to a development Environment to ensure behaviour is still as expected.

![Tag Manager - Installed Platform Revisions](/img/tag-manager/tag-manager-installed-platform-revisions.png)

## Installing a Platform Revision

To install a new Platform Revision, make sure that you have already installed the Platform beforehand. Please note that Installed Platforms are managed at the Application level.

<Info>

At present the only available Platform is the 'Scale8 Platform'. This will be expanded on towards the end of Q4 2021.

</Info>

## Managing a Platform Revision

To upgrade or downgrade a revision, please select the 'Pencil' icon in the 'Actions' column. Select a new Platform Revision and save. You will be prompted if there are any breaking changes - this signifies that the versions are not compatible and there is a breaking change. If you continue with the upgrade or downgrade, then anything linked (Events, Conditions, Actions etc) that is dependent on the corresponding Platform Entity will be automatically removed.

## Deleting a Platform Revision

To delete an installed Platform Revision, please select the 'Trash' icon. You will be prompted if any of the Platform Revision entities are currently in use. Forcing a delete here would remove all linked references. Please make sure that all reference to the Platform have been removed.

<Warn>

While it is possible to upgrade or downgrade the Scale8 Platform, it is not possible to remove it. The Scale8 Platform is required to load all other platforms and therefore is intrinsically linked.

</Warn>
