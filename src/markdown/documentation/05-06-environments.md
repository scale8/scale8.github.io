# Environments

## Introduction

An environment is fundamentally is designed to contain a finalised revision. Developers typically create multiple environments such as 'Development', 'Staging', 'UAT' or 'Live', and we have architected our solution to meet a flexible configuration.

<Info>

Our system makes no guarantees for payload delivery. We aim to achieve a minimum delivery target of 99.99%. Future versions may include a fail-over for write transactions, however this system was designed for general analytics and error logging at scale where some data loss can be acceptable.

All servers work independently and move data every 60 seconds from the server to the desired destination. There maybe multiple chucks from multiple servers delivered for any 60-second window. We typically allocate a few geo-located edge servers to each ingest endpoint.

</Info>

## Custom Domains

We have included support for custom domains, although you'll need to bring your own SSL certificate for now.

<Info>

Automatic SSL Certificate generation in on our roadmap, and we hope this will be ready for release soon. For more information, please reach out to us to discuss. 

</Info>

## Storage Providers

| Provider | Description | Released |
|---|---|---|
| Amazon's S3 | We have full support for Amazon's S3. Create an S3 bucket along with a role with the necessary permissions our Data Manager will place JSON Gzip'd files in the destination.  | **Yes** |
| Amazon's Kinesis | Support for Kinesis Firehose. It will require a configured Kinesis Firehose service along with the necessary permissions | No, in private beta |
| Amazon's Redshift | A configured and deployed Redshift service is required along with the necessary permissions | No, in private beta |
| Google's BigQuery | Support for stream ingest only. We require a data-set to be created along with necessary permissions | **Yes** |
| Google's GCS | Similar to our S3 support and requires the necessary permissions in order to be added | No, in private beta |

## Create a new Environment

Create a new Environment by navigating to the Environment page under your Ingest Endpoint and clicking on the black "add" button in the top right. From here a new pane should slide out and look similar to the one in the screenshot below.

![Ingest Endpoint - Environment - Create](/img/data-manager/ingest-endpoint-environment-create.png)

You'll need to provide a name for the new Environment, and we recommend trying to mirror your current development setup that your websites have. Next select a Revision, but please note that the Revision must be finalised before it can be attached to an Environment.

### Custom Domains

If you wish to use your own Custom Domain, please check the box and a number of inputs will be displayed. Please enter the domain name you wish to use and this will need to correspond with the SSL certificates provided. We check to make sure the private key, certficate and domain name all match and are compatible before allowing you to save. If you have any problems using your own custom domain, please reach out to us.

### Storage Providers

Finally, select a storage provider from the drop down menu. We will validate the credentials with the storage details provided before allowing an Environment to be created.

<Info>

We will be adding storage specific setup tutorials soon. For now, please reach out to us with any issues you may have.

</Info>

## Managing your Environments

To edit your Environment, please select the pencil icon under the "Actions" column.

<Warn>

We don't store your SSL certificates in our database for security reasons and there are no API methods to retrieve it either. For this reason if you wish to update them, you'll need to provide them again.

</Warn>

## Installing an Environment

To install your environment, select the code icon under the "Actions" column. This will display an overlay asking you to prepare your values.

![Ingest Endpoint - Environment - Prepare](/img/data-manager/ingest-endpoint-environment-prepare.png)

The form provided in the window will represent your key -> value structure that is similar to the Data Map designer. Enter your values where applicable and once done, click next. These values are only to provide a complete example for generation of code or pixel.

![Ingest Endpoint - Environment - Pixel](/img/data-manager/ingest-endpoint-environment-pixel.png)

On the next page you should be presented with a choice of either a Pixel or Code. The pixel will look something like the one below.

```html
<!-- S8 Pixel -->
<img width=0 height=0 src="https://<replace>.scale8.com/?d=%7B%22example_key_1%22:%22foo%22,%22example_key_2%22:%7B%22example_child_key_1%22:123%7D%7D" alt=""/>
<!-- / S8 Pixel -->
```

Alternatively you can select from mutliple languages to generate the code you require to send a request to the new Ingest Endpoint Environment.

![Ingest Endpoint - Environment - Curl](/img/data-manager/ingest-endpoint-environment-curl.png)

```bash
curl --location --request POST 'https://<replace>.scale8.com' \
--header 'Content-Type: application/json' \
--data-raw '{
  "example_key_1": "foo",
  "example_key_2": {
    "example_child_key_1": 123
  }
}'
```

## Testing and troubleshooting

If everything is OK with the payload, then **{"o":"k"}** will be returned from the server.

```bash
~#> curl --location --request POST 'https://<replace>.scale8.com' \
--header 'Content-Type: application/json' \
--data-raw '{
  "example_key_1": "foo",
  "example_key_2": {
    "example_child_key_1": 123
  }
}'
{"o":"k"}
```

However, in the example below, the payload has failed to meet the schema requirements.

```bash
~#> curl --location --request POST 'https://p60e41e02ee92f3001bf4b225.scale8.com' \
--header 'Content-Type: application/json' \
--data-raw '{
  "example_key_1": "ffoo",
  "example_key_2": {
    "example_child_key_1": "foo"
  }
}'
[
  "ffoo does not match regex ^foo|bla$",
  "Property 'example_child_key_1' should be of type 'INT' on 'example_key_2'. Max string size (bytes) 32000"
]
```

In the above example, the value for 'example_key_1' has failed to match the validation rule provided and the child value for 'example_key_2', 'example_child_key_1' should have been a string, but an integer has been provided instead.