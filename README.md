# nobels-api

This is a REST api created in node without dependencies in production, only use of `nodemon` in dev

This API could be used to get info about the nobel prices, you can get a JSON response of info about the nobel prices filtering by year or/and category

The data is from the repository from jdorfman called [awesome-json-datasets](https://github.com/jdorfman/awesome-json-datasets)

## GET request
The host of the REST api is
`https://nobels-api.herokuapp.com/`
. To make request keep format
`api/search?<name>=<value>&<name>=<value>`

| params      | Description |
| ----------- | ----------- |
| year        | Used to return the nobel prices in that year, if there are multiple values for years(example: `?year=2002&year=2000`), the API is going to return the nobel prices in both years  |
| category   | (String in minus) Used to return the nobel prices in that category, if there are multiple values for category(example: `?category=chemistry&category=medicine`), the API is going to return the nobel prices in both categories being inclusive |

`year` & `category` are the only parameters or filters for the get request, if both are not in the get request, the response is going to be all the data

> Example GET Request

`https://nobels-api.herokuapp.com/api/search?year=2002`

If `category` & `year` parameters are present, the response is goind to filter to the prices that are in the same `category` and `year`

Can append more than 1 `year` or `category`, the response is going to be the nobel prices where its year is in the set of values of parameters

### Example

> GET Request

`https://nobels-api.herokuapp.com/api/search?year=2002&year=2000&category=medicine`

> Response

```
[
    {
        "year": "2002",
        "category": "medicine",
        "laureates": [
            {
                "id": "750",
                "firstname": "Sydney",
                "surname": "Brenner",
                "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
                "share": "3"
            },
            {
                "id": "751",
                "firstname": "H. Robert",
                "surname": "Horvitz",
                "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
                "share": "3"
            },
            {
                "id": "752",
                "firstname": "John E.",
                "surname": "Sulston",
                "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
                "share": "3"
            }
        ]
    },
    {
        "year": "2000",
        "category": "medicine",
        "laureates": [
            {
                "id": "722",
                "firstname": "Arvid",
                "surname": "Carlsson",
                "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
                "share": "3"
            },
            {
                "id": "723",
                "firstname": "Paul",
                "surname": "Greengard",
                "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
                "share": "3"
            },
            {
                "id": "724",
                "firstname": "Eric",
                "surname": "Kandel",
                "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
                "share": "3"
            }
        ]
    }
]
```
