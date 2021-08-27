# Ingest Endpoints

## Introduction

An Ingest Endpoint provides a single HTTPS endpoint to send JSON formatted data to. We have support for both GET and POST methods as the former is typically used for creating website tracking pixels.

We have support for multiple deployments per Ingest Endpoint. Each environment enables the connection of a single data store. At present, we only support Google's BigQuery and Amazon's S3 although we do have other connectors in early beta and many more on our roadmap.

Our powerful revisioning system guarantees that any change to an existing data schema will need to be deployed via an environment. This immutability allows roll-backs and enforces revision cloning. 

All endpoints are HTTPS enabled as standard, and we're also offering the ability to use your own custom domain name. You will need to have your SSL certificate ready if you wish to create an environment with your own custom domain. SSL certificate generation is currently on our roadmap for later in the year.

We've designed our infrastructure to handle billions of requests per day, so you will be limited only by the plan you are currently on. For more information about out enterprise offering please contact us.

## Create an Ingest Endpoint

Create a new Ingest Endpoint either by clicking the plus sign in the top right of the Ingest Endpoint page or in the middle of the empty table (it will only be present if you don't have any existing endpoints). 

![Create Ingest Endpoint](/img/data-manager/create-ingest-endpoint.png)


## Manage an Ingest Endpoint

Once an Ingest Endpoint has been created, you'll see it appear in the table view. Click on either the name of the new Ingest Endpoint or the right arrow under "Actions" to navigate to your new endpoint.

Requests and bytes spark charts provide a basic at-a-glance overview. Both requests and bytes are billed for, so it is important to make sure you stay within your plan. Please see organisation billing for more information.

![View Ingest Endpoint](/img/data-manager/view-ingest-endpoint.png)

The name of the Ingest Endpoint can be edited by clicking the pencil icon in the "Actions" column.

![Edit Ingest Endpoint](/img/data-manager/edit-ingest-endpoint.png)


## Delete an Ingest Endpoint

To delete an endpoint, please click on the trash icon in "Actions" column. This will prompt you to confirm the Ingest Endpoint to delete. Please make sure the name matches the endpoint you wish to delete.

<Warn>

Deleting an Ingest Endpoint is permanent. Any data that is sent after this endpoint has been deleted will be ignored, and the endpoint will return an error.

</Warn>

![Delete Ingest Endpoint](/img/data-manager/delete-ingest-endpoint.png)
