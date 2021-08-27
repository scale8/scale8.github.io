# Data Structure

## Data Maps

A Data Map is essentially a key -> value pair and every type in the system is a Data Map. It maps some key to some value and allows for a set of fixed properties such as type, required and child relationships to be defined. This structure is largely supported by nearly all formats and databases and thus serves as the basis for designing a payload. This single schema definition allows us to design connectors for databases like Google's BigQuery, Amazon's Redshift, Postgres, MongoDB, Clickhouse and many others. In the case of BigQuery which is already fully supported in production, we will automatically build the table structure for you if the table is not already present. As new revisions are created we do not apply up-deltas or down-deltas on rollbacks. Instead we dynamically create new tables where applicable.

<Info>

Future releases may provide automatic modifications to data structures, however we will almost certainly require user approval before making such as change as this could lead to data loss. There will also be challenges with regards to roll-backs.

</Info>

### Data Map Types

| Name | Type | Description | Example |
|---|---|---|---|
| String | STRING | A text based input | "abc" |
| Integer | INT | A 64 bit numeric value | 123 |
| Float | FLOAT | A 64 bit double precision numeric value | 12.3 |
| Boolean | BOOLEAN | A true or false value | true |
| Date&nbsp;Time | DATETIME | A data time, string based value of YYYY-MM-DD HH:ii:ss format | 2021-01-02 15:16:17 |
| Time&nbsp;Stamp | TIMESTAMP | A valid unix timestamp | 1625579080 |
| Object | OBJECT | A map containing other key-value pairs | -- |
| Object&nbsp;Array | ARRAY_OBJECT | An array of objects that each contain a map of key-value pairs. The object structure is a repeated type and must be the same for all objects in the array structure | -- |
| String&nbsp;Array | ARRAY_STRING | An array of strings | [ "abc" , "def", "ghi", ... ] |
| Integer&nbsp;Array | ARRAY_INT | An array of integers | [ 123 , 456, 789, ... ] |
| Float&nbsp;Array | ARRAY_FLOAT | An array of floats | [ 12.3 , 4.56, 0.78, ... ] |

### Optional vs Required

If the Data Map has been marked as optional, then this will enable the Data Map to be nullable. It will therefore be absent from any data payload reaching the data store.

### Default Value

A default value can be provided and will be automatically applied if a value is missing from the payload structure. These default values can contain macros that will be replaced dynamically by the server with their corresponding value.

### Applying validations

Zero or more validations can be applied to a single Data Map. These validations can be used to enforce a value is correct before submitting.

<Info>

Please note that regular expressions are evaluated in linear-time only. There is no support any regular expressions that require exponential time. We have made this decision to protect our servers from ReDoS attacks.

</Info>

## Creating new Data Maps

### Layout

The layout has been designed in such a ways as to enable a complete overview of the whole structure. There is a limit to a maximum object nesting depth of 3.

![Ingest Endpoint - Data Maps](/img/data-manager/ingest-endpoint-data-maps.png)

### Adding a Data Map

When **Add Data Map** is clicked, the side menu will expand displaying a form. A key is required to identify the Data Map and all Data Maps are key-value orientated.

### Selecting a Var Type

Next you'll need to specify a **Var Type**. These have been explained above in this document. You'll need to select the right **Var Type** for your data structure.

Different **Var Types** have different options associated with them. In the case of this example using a **String** type, there is the option to select one of Optional, Required, Use Default Value or Use Macro.

### Macro Support

Depending on the **Var Type** macros may or may not be present. A full list of Macros can be found in our API Documentation. Default Values can be applied only to certain types and will be applied only when there is no key-value present in the payload. Validation too can only be applied to certain types that support them. These include at present, only String, Integer and Float types.

![Ingest Endpoint - Data Maps - Add](/img/data-manager/ingest-endpoint-data-maps-add.png)

### Objects and Object Arrays

An **Object** is a container for multiple key-value pairs. Children are displayed as per the example below for key "example_key_2".

![Ingest Endpoint - Data Maps - Object Example](/img/data-manager/ingest-endpoint-data-maps-object.png)

**Object Arrays** define a repeated object container which in turn has multiple key-value pairs.