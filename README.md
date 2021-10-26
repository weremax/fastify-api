## FASTIFY-API

* git clone {repo}
* cd {repo}
* yarn install
* npm run start

http://localhost:3000/
```json
{
    "hello": "world"
}
```

http://localhost:3000/v1/users
```json
{
    "users": [
        {
            "uid": 1,
            "name": "Christopher",
            "email": "christopher@test.com"
        },
        {
            "uid": 2,
            "name": "Timothy",
            "email": "timothy@test.com"
        }
    ]
}
```