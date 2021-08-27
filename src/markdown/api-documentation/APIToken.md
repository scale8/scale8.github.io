# Authenticating with an API token

<Warn>

Please note that if you change your API token future API requests will fail unless the token is updated in your code environment.

</Warn>


### Prerequisites

* A Scale8 account
* Required access permissions to make requests
* Familiar with [GraphQL](https://graphql.org/)

## Step 1

In the UI, click on your icon located in the bottom left-hand corner of the page and click on **Manage Account**.

<p class="img-container">
  <img src="/img/api/api-token-step-1.png">
</p>

## Step 2

Select **API TOKEN** in the menu on the left and copy your API token to clipboard.

<p class="img-container">
  <img style="border: none" src="/img/api/api-token-step-2.png">
</p>

## Step 3

Make your first API request. Replace ```YOUR_API_TOKEN``` with your API token and ```YOUR_USER_ID``` with your user ID from the previous step.

```shell
curl --location --request POST 'https://api.scale8.com/graphql' \
--header 'token: YOUR_API_TOKEN' \
--header 'uid: YOUR_USER_ID' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{me{first_name}}"}'
```

If the request is successful your name should be shown as below. 

```shell
{
  "data": {
    "me": {
      "first_name": "Chris"
    }
  }
}
```