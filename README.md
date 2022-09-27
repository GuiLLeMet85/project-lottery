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
"num0": { type: Number, required: true },
"num1": { type: Number, required: true },
"num2": { type: Number, required: true },
"num3": { type: Number, required: true },
"num4": { type: Number, required: true },
"num5": { type: Number, required: true },
"numReint": { type: Number, required: true },
"euroBet": { type: Number, default: 1, required: true },
"isPrized": { type: Boolean, required: true }
},


### User

```js
{
  "email": { type: String, unique: true, required: true},
  "username": { type: String, unique: true, required: true},
  "userPicture": { type: String, default: 'https://res.cloudinary.com/dnxl4zry6/image/upload/v1663025902/userProfile/es9pkrvyvdv2dtzotvjk.png'},
  "phoneNum": { type: Number},
  "role": { type: String, default: 'user'}
},

### primitiva

}
````

{

"date": { type: Date, required: true },
"num0": { type: Number, required: true },
"num1": { type: Number, required: true },
"num2": { type: Number, required: true },
"num3": { type: Number, required: true },
"num4": { type: Number, required: true },
"num5": { type: Number, required: true },
"numCompl": { type: Number,required: true },
"numReint": { type: Number, required: true },
"Joker": { type: Number},
},

---

## API endpoints and usage

| Action             | Method | Endpoint               | Req.body                      | Private/Public |
| ------------------ | ------ | ---------------------- | ----------------------------- | -------------- |
| SIGN UP user       | POST   | /api/v1/auth/signup    | { username, email, password } | Public         |
| LOG IN user        | POST   | /api/v1/auth/login     | { email, password }           | Public         |
| GET logged in user | GET    | /api/v1/auth/me        |                               | Private        |
| UPLOAD to Cloudina | POST   | /api/v1/user/upload    | form-file:profileImage        | Private        |
| Delete user        | DELETE | /api/v1/user/delete    |                               | Private        |
| Edit user          | PUT    | /api/v1/user/edit      |                               | Private        |
| Users Lis          | GET    | /api/v1/user/userslist |                               | Private        |
| GET user bet       | GET    | /api/v1/bets/:id       |                               | Private        |
| Create single bet  | POST   | /api/v1/bets           |                               | Private        |
| Edit user bet      | PUT    | /api/v1/bets/:id       |                               | Private        |
| Delete user bet    | DELETE | /api/v1/bets/:id       |                               | Private        |

## Useful links

- [Presentation slides](https://slides.com/d/wXETgCg/live)
- [Frontend repository](https://github.com/GuiLLeMet85/project-lottery-frontend)
- [Frontend deploy](https://lottery-wallet.netlify.app/)
- [Deployed REST API](https://lottery-wallet-back.herokuapp.com/)
