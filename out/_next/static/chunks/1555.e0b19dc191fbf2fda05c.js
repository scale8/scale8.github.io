(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1555],{51555:function(e){"use strict";e.exports=JSON.parse('{"md":"\\n# RuleGroup\\n\\nA `RuleGroup` provides a way to group a number of rules together. This is useful for both encapsulation of specific behaviours and also provides the ability to clone and disable in bulk.\\n\\n| Field | Description | Type | Reference | Nullable | Deprecated |\\n|-------|-------------|------|-----------|----------|------------|\\n| id | The `RuleGroup` ID | ID | [ID](/api-docs/id) | No | No |\\n| name | Name associated with the `RuleGroup` | String | [String](/api-docs/string) | No | No |\\n| is_active | If the `RuleGroup` is active or inactive | Boolean | [Boolean](/api-docs/boolean) | No | No |\\n| rules | A set of rules attached to the `RuleGroup`. | List[Rule] | [Rule](/api-docs/rule) | No | No |\\n\\n## Queries\\n\\n*Queries provide a function on the graph to access RuleGroup entities. This should be considered the same as RESTful \'GET\'*\\n\\n---\\n\\n### Get Rule Group\\n\\n```graphql\\ngetRuleGroup(id: ID!): RuleGroup\\n\\n```\\n\\nGet a `RuleGroup` model from the `RuleGroup` ID\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| id | -- | ID | [ID](/api-docs/id) | Yes |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| RuleGroup | [RuleGroup](/api-docs/rule-group) |\\n\\n\\n\\n\\n## Mutations\\n\\n*Mutations enable us to create, modify and delete RuleGroup entities. POST/PUT/DELETE methods in a RESTful API would typically provide this functionality*\\n\\n---\\n\\n### Create Rule Group\\n\\n```graphql\\ncreateRuleGroup(ruleGroupCreateInput: RuleGroupCreateInput!): RuleGroup\\n\\n```\\n\\nCreate a new `RuleGroup`. `Tag` ID is required here to ensure `RuleGroup` is placed inside the correct version\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ruleGroupCreateInput | -- | RuleGroupCreateInput | *RuleGroupCreateInput* | Yes |  | No |\\n\\n\\n**RuleGroupCreateInput**\\n\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| tag_id | The `Tag` under which the `RuleGroup` should be created | ID | [ID](/api-docs/id) | Yes |  | No |\\n| name | The name of the new `RuleGroup` | String | [String](/api-docs/string) | Yes |  | No |\\n| comments | Any additional user comments for the audit | String | [String](/api-docs/string) | No |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| RuleGroup | [RuleGroup](/api-docs/rule-group) |\\n\\n\\n\\n\\n---\\n\\n### Duplicate Rule Group\\n\\n```graphql\\nduplicateRuleGroup(ruleGroupDuplicateInput: RuleGroupDuplicateInput!): RuleGroup\\n\\n```\\n\\nDuplicate a new `RuleGroup`. The duplicated will copy everything beneath `RuleGroup`, creating a new `RuleGroup` entity and linking it to the same `Tag`\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ruleGroupDuplicateInput | -- | RuleGroupDuplicateInput | *RuleGroupDuplicateInput* | Yes |  | No |\\n\\n\\n**RuleGroupDuplicateInput**\\n\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| rule_group_id | `RuleGroup` ID to clone against | ID | [ID](/api-docs/id) | Yes |  | No |\\n| name | New name for the `RuleGroup` | String | [String](/api-docs/string) | Yes |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| RuleGroup | [RuleGroup](/api-docs/rule-group) |\\n\\n\\n\\n\\n---\\n\\n### Update Rule Group\\n\\n```graphql\\nupdateRuleGroup(ruleGroupUpdateInput: RuleGroupUpdateInput!): Boolean\\n\\n```\\n\\nUpdate a `RuleGroup`&#039;s details.\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ruleGroupUpdateInput | -- | RuleGroupUpdateInput | *RuleGroupUpdateInput* | Yes |  | No |\\n\\n\\n**RuleGroupUpdateInput**\\n\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| rule_group_id | `RuleGroup` ID to update against | ID | [ID](/api-docs/id) | Yes |  | No |\\n| name | `RuleGroup` name | String | [String](/api-docs/string) | No |  | No |\\n| is_active | If the `RuleGroup` should be active or not | Boolean | [Boolean](/api-docs/boolean) | No |  | No |\\n| comments | Any additional user comments for the audit | String | [String](/api-docs/string) | No |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| Boolean | [Boolean](/api-docs/boolean) |\\n\\n\\n\\n\\n---\\n\\n### Delete Rule Group\\n\\n```graphql\\ndeleteRuleGroup(ruleGroupDeleteInput: RuleGroupDeleteInput!): [ModelDeleteAcknowledgement]\\n\\n```\\n\\nDelete a `RuleGroup` and its children.\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ruleGroupDeleteInput | -- | RuleGroupDeleteInput | *RuleGroupDeleteInput* | Yes |  | No |\\n\\n\\n**RuleGroupDeleteInput**\\n\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| rule_group_id | `RuleGroup` ID to delete against | ID | [ID](/api-docs/id) | Yes |  | No |\\n| preview | If true, we can do a dry-run and check what the outcome of this delete will be before commiting to it | Boolean | [Boolean](/api-docs/boolean) | No | false | No |\\n| comments | Any additional user comments for the audit | String | [String](/api-docs/string) | No |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| List[ModelDeleteAcknowledgement] | [ModelDeleteAcknowledgement](/api-docs/model-delete-acknowledgement) |\\n\\n\\n\\n\\n---\\n\\n### Update Rules Order\\n\\n```graphql\\nupdateRulesOrder(ruleGroupRuleOrderInput: RuleGroupRuleOrderInput!): Boolean\\n\\n```\\n\\nUpdate the order of `Rule`&#039;s curently linked to `RuleGroup`\\n\\n**Arguments: -**\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| ruleGroupRuleOrderInput | -- | RuleGroupRuleOrderInput | *RuleGroupRuleOrderInput* | Yes |  | No |\\n\\n\\n**RuleGroupRuleOrderInput**\\n\\n\\n| Name | Description | Type | Reference | Required | Default Value | Deprecated |\\n|------|-------------|------|-----------|----------|---------------|------------|\\n| rule_group_id | `RuleGroup` ID to order rules against | ID | [ID](/api-docs/id) | Yes |  | No |\\n| new_order | A new order of `Rule` IDs | List[ID] | [ID](/api-docs/id) | Yes |  | No |\\n\\n\\n**Returns: -**\\n\\n| Type | Reference |\\n|------|-----------|\\n| Boolean | [Boolean](/api-docs/boolean) |\\n\\n\\n\\n"}')}}]);