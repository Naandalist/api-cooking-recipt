## Resep Masak


### Documentation
---

| Field | Description |
| ------ | ----------- |
| key   | is a unique key used to access the next endpoint example  ```key : 'resep-sambal-teri'``` |
| page | load a next of data if want to make pagination in your app |
| tag    | is unique key of a article category to hit a detail of article|
| limit    | set limit of result **note** make sure you set limit below of 10 |



### Endpoint Usage
---


| Endpoint | Usage | Example |
|----------|-------|---------|
| new recipes | `/api/recipes` | - |
| new recipes by page | `/api/recipes/:page` | `/api/recipes/1` |
| new recipes limit | `/api/recipes-length/?limit=size` | `/api/recipes-length/?limit=5` |
| recipes by category | `/api/category/recipes/:key` | `/api/category/recipes/masakan-hari-raya` |
| recipes category | `/api/category/recipes` | - |
| recipe detail | `/api/recipe/:key` | - |
| search recipes | `/api/search/?q=parameter` | `/api/search/?q=coto` |
| article categorys | `/api/category/article` | - |
| article by category | `/api/category/article/:key` | `/api/category/article/makanan-gaya-hidup` |
| article | `/api/articles/new` | - |
| article detail | `/api/article/:tag/:key` | `/api/article/makanan-gaya-hidup/papeda-dan-masakan-indonesia-timur` |


