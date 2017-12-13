# Loopback Dummy Book Project


## Usage

**Configurate models**

Make sure you add `loopback-dummy-project/models` as a source and configure the following models according to your project needs.

```
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "loopback-dummy-project/models",
      "../models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "loopback/server/mixins",
      "../mixins"
    ]
  },
  "Book": {
      "dataSource": "db",
      "public": true
  },
  "Page": {
      "dataSource": "db",
      "public": true
  },
  "Author": {
      "dataSource": "db",
      "public": true
  },
  "Publisher": {
      "dataSource": "db",
      "public": true
  }
}
```


**Add migration**

Add the following path to your bootDirs `loopback-dummy-project/boot`
