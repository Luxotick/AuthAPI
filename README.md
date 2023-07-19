# AuthAPI

An Authentication api written in javascript with express.

# Usage 

It's simple actually here is a post example for using api :

```json
{
  "hwid": "an-example-randomkey"
}
```

and the response is :

```json
{
    "success": true,
    "username": "luxotick#0",
    "date": "19/8/2023"
}
```

and if the post request contains an invalid key the response is :

```
{
    "success": false
}
```
