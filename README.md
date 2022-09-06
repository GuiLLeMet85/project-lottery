# Project's name REST API

## Description

This is a the backend repository for the React application Lottery Wallet.

---

## Instructions

When cloning the project, change the <code>sample.env</code> file name for <code>.env</code>. The project will run on **PORT 8000**.

Then, run:

```bash
npm install
```

## Scripts

- To start the project run:

```bash
npm run start
```

- To start the project in development mode, run:

```bash
npm run dev
```

- To seed the database, run:

```bash
npm run seed
```

---

## Models

### BetUser

````js
{
"userId": { type: String, required: true },
"dateLottery": { type: Date, required: true },
"numbers": {
            type: [
            {
            "num0": {
            type: Number
            },
            "num1": {
            type: Number
            },
            "num2": {
            type: Number
            },
            "num3": {
            type: Number
            },
            "num4": {
            type: Number
            },
            "num5": {
            type: Number"
            }
            ],
required: true
},
"numComplem": { type: Number,required: true },
"numReint": { type: Number, required: true },
"euroBet": { type: Number, default: 1, required: true },
"isPrized": { type: Boolean, required: true }
},



### User

Users in the database have the following properties:

```js
{
  "username": String,
  "email": String,
  "hashedPassword": String
}
````

---

## API endpoints and usage

| Action             | Method | Endpoint            | Req.body                      | Private/Public |
| ------------------ | ------ | ------------------- | ----------------------------- | -------------- |
| SIGN UP user       | POST   | /api/v1/auth/signup | { username, email, password } | Public         |
| LOG IN user        | POST   | /api/v1/auth/login  | { email, password }           | Public         |
| GET logged in user | GET    | /api/v1/auth/me     |                               | Private        |

---

## Useful links

- [Presentation slides]()
- [Frontend repository]()
- [Frontend deploy]()
- [Deployed REST API]()
