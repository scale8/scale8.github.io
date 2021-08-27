# Ingest Endpoint Dashboard

## A Quick Overview

We provide a general overview of requests made to your Ingest Endpoint and also the number of bytes ingested. Use the period selection in the top right of the page to select the range you are interested in. It is important to make sure you stay within the limits of your plan. We don't mind the occasional burst, or a small amount of overage occasionally, but we will ask you to upgrade if this becomes a regular occurrence.

![Ingest Endpoint Dashboard](/img/data-manager/ingest-endpoint-dashboard.png)

## Troubleshooting

The tracking endpoint will always notify you immediately on any payload that fails to meet validation requirements. If you think you are missing requests from the dashboard, please make sure that there are no errors being returned from the endpoint.

## Real-time

We delay our real-time data by around 60 seconds in order to capture everything for that "minute" slice. For this reason data may not show up immediately, so please wait a few minutes before checking.