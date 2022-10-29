# Blog API

- Front:
  *Get 
    - All publications
    - One publication
    - All categories
    - All posts created
    - All posts created by one user

  *Actions
    - Paginate posts
    - CRUD actions on posts
    - Create new categories

```json
{
  "total": 68,
  "prev": "localhost:9000/api/v1/posts?start=50&limit=60",
  "next": "localhost:9000/api/v1/posts?start=61&limit=68",
  "data": [
    {
      "id": "fb78cb36-829e-4bdf-8212-12ce9be0d5d0",
      "title": "example",
      "content": "lorem ipsum",
      "createdBy": {
        "id": 18,
        "name": "Camilo",
        "email": "camilo.example@gmail.com"
      },
      "category": {
        "id": 4,
        "name": "technology"
      }
    }
  ]
}
```

/api/v1

/users
    - /me
    - /:id
    - /me/posts

/categories
    - /:id
    - /:id/posts

/posts
    - /:id