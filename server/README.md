# IssueTracker25 BackEnd

## api 명세서

### issue

| URL | Method | Body | Query | param |
| --- | ------ | ---- | ----- | ----- |
| /   | GET    |      |       |       |

**Return**

```
[
    {
        "id": Number,
        "title" : String,
        "contents" : String,
        "writer" : String,
        "milestoneTitle": String,
        "isClosed" : Boolean,
        "closedAt" : datetime or null,
        "createdAt" : datetime,
        "updatedAt" : datetime,
        "assigneeList" :[
            {
                "id" : Number,
                "name" : String
            }
        ],
        "labelList":[
            {
                "id" : Number,
                "name" : String,
                "color" : String
            }
        ],
        "commentLength" : Number
    }
]

```

### lable

| URL | Method | Body | Query | param |
| --- | ------ | ---- | ----- | ----- |
| /   | GET    |      |       |       |

**Return**

```
[
    {
        "id" : Number,
        "name" : String,
        "color" : String,
        "description" : String,
    }
]
```

### user

| URL | Method | Body | Query | param |
| --- | ------ | ---- | ----- | ----- |
| /   | GET    |      |       |       |

**Return**

```
[
    {
        "id": Number,
        "name": String,
        "uid": String,
        "profile_link": String
    }
]
```

### milestone

| URL | Method | Body | Query | param |
| --- | ------ | ---- | ----- | ----- |
| /   | GET    |      |       |       |

**Return**

```
[
    {
        "id": Number,
        "title": String,
        "description": String,
        "end_date": String,
        "createdAt": String,
        "updatedAt": String
    }
]
```
