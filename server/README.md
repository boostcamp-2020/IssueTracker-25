# IssueTracker25 BackEnd

## api 명세서

### issues

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

### labels

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

### users

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

### milestones

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
