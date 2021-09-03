(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7720],{97720:function(n){"use strict";n.exports=JSON.parse('{"md":"\\n# IngestEndpointEnvironment\\n\\nThis entity holds the nessessary configuration to configure the `IngestEndpoint` for deployment. Please note that we are unable to retrieve cert_pem and key_pem in this model as a security precaution. There is no API access to our encrypted vault where we hold secure information.\\n\\n| Field | Description | Type | Reference | Nullable | Deprecated |\\n|-------|-------------|------|-----------|----------|------------|\\n| id | ID of the `IngestEndpointEnvironment` | ID | [ID](/api-docs/id) | No | No |\\n| name | Name of the `IngestEndpointEnvironment` | String | [String](/api-docs/string) | No | No |\\n| custom_domain | A custom domain name associated with this `IngestEndpointEnvironment` | String | [String](/api-docs/string) | Yes | No |\\n| install_domain | `IngestEndpointEnvironment`&#039;s install domain used to push data to | String | [String](/api-docs/string) | No | No |\\n| cname | `IngestEndpointEnvironment`&#039;s CNAME | String | [String](/api-docs/string) | No | No |\\n| storage_provider | The storage provider used by the `IngestEndpointEnvironment` to store ingested data | StorageProvider | [StorageProvider](/api-docs/storage-provider) | No | No |\\n| ingest_endpoint_revision | The `IngestEndpointRevision` currently bound to the `IngestEndpointEnvironment` | IngestEndpointRevision | [IngestEndpointRevision](/api-docs/ingest-endpoint-revision) | No | No |\\n| config_hint | A hint of the credentials currently in use by the `IngestEndpointEnvironment`. For security reasons we don&#039;t enable to full retrival of this information via the API. It does not persist in our database or servers and remains in our vault. | String | [String](/api-docs/string) | No | No |\\n| created_at | Date the `IngestEndpointEnvironment` was created | DateTime | [DateTime](/api-docs/date-time) | No | No |\\n| updated_at | Date the `IngestEndpointEnvironment` last updated | DateTime | [DateTime](/api-docs/date-time) | No | No |\\n| request_stats | Request stats - Please note that environment is automatically applied in the filter | GroupingCountsResponse | [GroupingCountsResponse](/api-docs/grouping-counts-response) | No | No |\\n| byte_stats | Byte stats - Please note that environment is automatically applied in the filter | GroupingCountsResponse | [GroupingCountsResponse](/api-docs/grouping-counts-response) | No | No |\\n\\n## Queries\\n\\n*Queries provide a function on the graph to access IngestEndpointEnvironment entities. This should be considered the same as RESTful \'GET\'*\\n\\n---\\n\\n### Get Ingest Endpoint Environment\\n\\n```graphql\\ngetIngestEndpointEnvironment(id: ID!): IngestEndpointEnvironment\\n\\n```\\n\\nGet an `IngestEndpointEnvironment` model from `IngestEndpointEnvironment` ID\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| id | -- | ID | [ID](/api-docs/id) | Yes |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| IngestEndpointEnvironment | [IngestEndpointEnvironment](/api-docs/ingest-endpoint-environment) |\\n\\n\\n\\n\\n## Mutations\\n\\n*Mutations enable us to create, modify and delete IngestEndpointEnvironment entities. POST/PUT/DELETE methods in a RESTful API would typically provide this functionality*\\n\\n---\\n\\n### Create Ingest Endpoint Environment\\n\\n```graphql\\ncreateIngestEndpointEnvironment(ingestEndpointEnvironmentCreateInput: IngestEndpointEnvironmentCreateInput!): IngestEndpointEnvironment\\n\\n```\\n\\nCreate a new `IngestEndpointEnvironment`.\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingestEndpointEnvironmentCreateInput | -- | IngestEndpointEnvironmentCreateInput | *IngestEndpointEnvironmentCreateInput* | Yes |  | No |\\n\\n\\n**IngestEndpointEnvironmentCreateInput**\\n\\n*Multiple deployments can be configured here, the same `IngestEndpoint` can be configured to work with different engines and adapted to your own specific use cases. A storage engine must be provided however to successfully create and configure and new environment.*\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingest_endpoint_id | The ID of the `IngestEndpoint` under which the new `IngestEndpointEnvironment` should be created | ID | [ID](/api-docs/id) | Yes |  | No |\\n| name | Name of the new `IngestEndpointEnvironment` | String | [String](/api-docs/string) | Yes |  | No |\\n| custom_domain | A custom domain name to be associated with this `IngestEndpointEnvironment` | String | [String](/api-docs/string) | No |  | No |\\n| cert_pem | If a custom domain is provided, a certificate is required to handle secure web traffic | String | [String](/api-docs/string) | No |  | No |\\n| key_pem | If a custom domain is provided, a key is required to handle secure web traffic | String | [String](/api-docs/string) | No |  | No |\\n| storage_provider | The storage provider to be used by the `IngestEndpointEnvironment` to store ingested data | StorageProvider | [StorageProvider](/api-docs/storage-provider) | Yes |  | No |\\n| ingest_endpoint_revision_id | The `IngestEndpointRevision` ID to be linked to the new `IngestEndpointEnvironment` | ID | [ID](/api-docs/id) | Yes |  | No |\\n| aws_storage_config | The AWS specific configuration linked to this new `IngestEndpointEnvironment` | AWSStorageConfig | *AWSStorageConfig* | No |  | No |\\n| gc_bigquery_stream_config | The Google Cloud BigQuery Stream specific configuration linked to this new `IngestEndpointEnvironment` | GCBigQueryStreamConfig | *GCBigQueryStreamConfig* | No |  | No |\\n\\n**AWSStorageConfig**\\n\\n*In order to use AWS as your storage engine, you will need to create an AWS account and create a new service account for Scale8. Please see our documentation on how to configure this.*\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| access_key_id | Your AWS access key. We recommend following our tutorial and creating Scale8 credentials to be used with the region / bucket selected only. We only require the ability to list and add files. We never require the ability to read your data. | String | [String](/api-docs/string) | Yes |  | No |\\n| secret_access_key | Your AWS secret key. | String | [String](/api-docs/string) | Yes |  | No |\\n| region | The AWS region in which you want the data to be placed and your bucket has been created. | AWSRegion | [AWSRegion](/api-docs/aws-region) | Yes |  | No |\\n| path_prefix | An optional path prefix. By default the path prefix is &#039;/&#039; | String | [String](/api-docs/string) | No | &quot;/&quot; | No |\\n| bucket_name | The name of the storage bucket currently in use | String | [String](/api-docs/string) | Yes |  | No |\\n\\n**GCBigQueryStreamConfig**\\n\\n*BigQuery stream configuration required a Google Cloud Services account to be setup and configured. PLease follow our guide and configure this properly before attempting to use this service.*\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| service_account_json | Service Account JSON for Google Cloud&#039;s BigQuery administrative role. | JSON | [JSON](/api-docs/json) | Yes |  | No |\\n| data_set_name | The &#039;Data Set&#039; under which a new table will be created. | String | [String](/api-docs/string) | Yes |  | No |\\n| data_set_location | The location of the data set, if it doesn&#039;t exist, we&#039;ll try and create it using the location specified | String | [String](/api-docs/string) | No | &quot;US&quot; | No |\\n| require_partition_filter_in_queries | If this is set to true, a WHERE clause will be required when querying data in order to reduce costs. See BigQuery documentation for more details. | Boolean | [Boolean](/api-docs/boolean) | No | false | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| IngestEndpointEnvironment | [IngestEndpointEnvironment](/api-docs/ingest-endpoint-environment) |\\n\\n\\n\\n\\n---\\n\\n### Delete Ingest Endpoint Environment\\n\\n```graphql\\ndeleteIngestEndpointEnvironment(ingestEndpointEnvironmentDeleteInput: IngestEndpointEnvironmentDeleteInput!): Boolean\\n\\n```\\n\\nDelete a `IngestEndpointEnvironment`.\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingestEndpointEnvironmentDeleteInput | -- | IngestEndpointEnvironmentDeleteInput | *IngestEndpointEnvironmentDeleteInput* | Yes |  | No |\\n\\n\\n**IngestEndpointEnvironmentDeleteInput**\\n\\n*Deleting an environment will remove the deployment permanently. It will not delete the information from your storage/stream engines however. We will make no attempt to clean and data from your cloud services.*\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingest_endpoint_environment_id | ID of the `IngestEndpointEnvironment` to be deleted | ID | [ID](/api-docs/id) | Yes |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| Boolean | [Boolean](/api-docs/boolean) |\\n\\n\\n\\n\\n---\\n\\n### Update Ingest Endpoint Environment\\n\\n```graphql\\nupdateIngestEndpointEnvironment(ingestEndpointEnvironmentUpdateInput: IngestEndpointEnvironmentUpdateInput!): Boolean\\n\\n```\\n\\nUpdate a `IngestEndpointEnvironment`.\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingestEndpointEnvironmentUpdateInput | -- | IngestEndpointEnvironmentUpdateInput | *IngestEndpointEnvironmentUpdateInput* | Yes |  | No |\\n\\n\\n**IngestEndpointEnvironmentUpdateInput**\\n\\n*We do not currently allow changes to a storage engine to be made, doing so could cause a number of potential issues. If you find yourself requiring any assistance, please contact us and we&#039;ll do our best to support your setup issues.*\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ingest_endpoint_environment_id | ID of the `IngestEndpointEnvironment` | ID | [ID](/api-docs/id) | Yes |  | No |\\n| ingest_endpoint_revision_id | ID of the `IngestEndpointRevision` to attach to the `IngestEndpointEnvironment` | ID | [ID](/api-docs/id) | Yes |  | No |\\n| name | `IngestEndpointEnvironment` name | String | [String](/api-docs/string) | No |  | No |\\n| cert_pem | If a custom domain is used a new certificate can be installed which will replace the exiting one | String | [String](/api-docs/string) | No |  | No |\\n| key_pem | If a custom domain is used a new key can be installed which will replace the exiting one | String | [String](/api-docs/string) | No |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| Boolean | [Boolean](/api-docs/boolean) |\\n\\n\\n\\n"}')}}]);