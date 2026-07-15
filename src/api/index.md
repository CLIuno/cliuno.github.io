# API Reference

The shared REST contract that **every CLIuno backend implements** and every frontend
consumes — the demo app: auth, users, todos, posts + comments, follows and roles.

## Conventions

**Base URL**

```
/api/v1
```

**Auth** — send the access token from login as a Bearer token:

```
Authorization: Bearer <token>
```

**Request keys** are camelCase where the frontends send them (`usernameOrEmail`,
`refreshToken`, `oldPassword`, `newPassword`, `otp`); resource fields are snake_case
(`first_name`, `password_confirmation`).

**Every response** is an envelope:

```json
{ "status": "success", "message": "…", "data": { } }
```

The `data` keys below are what the frontends read, so they are load-bearing. Errors use a
meaningful HTTP status with `{ "status": "error" | "warning", "message": "…" }`.

---

## Auth

### Register
**POST** `/api/v1/auth/register`

::: details Request Body
```json
{
  "first_name": "Ada",
  "last_name": "Lovelace",
  "username": "ada",
  "email": "ada@example.com",
  "phone": "123456",
  "password": "password123",
  "password_confirmation": "password123"
}
```
:::

Creates the user and stores an email-verification token. `data.user` is returned. The
default `user` role is created on first registration.

### Login
**POST** `/api/v1/auth/login`

::: details Request Body
```json
{ "usernameOrEmail": "ada", "password": "password123" }
```
:::

::: details Response `data`
```json
{
  "token": "eyJ…",
  "refreshToken": "eyJ…",
  "user": { "id": "…", "username": "ada", "email": "ada@example.com" }
}
```
:::

### Logout
**POST** `/api/v1/auth/logout` · Bearer. Ends the session.

### Check Token
**POST** `/api/v1/auth/check-token` · Bearer. Returns `200` if the token is valid.

### Refresh Token
**POST** `/api/v1/auth/refresh-token`

::: details Request Body
```json
{ "refreshToken": "eyJ…" }
```
:::

Returns a new `data.token` and `data.refreshToken`.

### Change Password
**POST** `/api/v1/auth/change-password` · Bearer

::: details Request Body
```json
{ "oldPassword": "password123", "newPassword": "newpassword123" }
```
:::

Verifies the old password before changing it.

### Forgot Password
**POST** `/api/v1/auth/forgot-password`

::: details Request Body
```json
{ "email": "ada@example.com" }
```
:::

Stores a one-time reset token on the user (emailed in production).

### Reset Password
**POST** `/api/v1/auth/reset-password`

::: details Request Body
```json
{ "token": "reset-token", "password": "newpassword123" }
```
:::

Looks the user up **by token** and sets the new password.

### Send / Verify Email
**POST** `/api/v1/auth/send-verify-email` · Bearer — stores a verification token.

**POST** `/api/v1/auth/verify-email` — `{ "token": "verify-token" }`, looked up by token.

### OTP (RFC 6238 TOTP)

OTP endpoints act on the **authenticated user**.

- **POST** `/api/v1/auth/otp/generate` · Bearer → `data.secret`, `data.otpauth_url`
- **POST** `/api/v1/auth/otp/verify` · Bearer · `{ "otp": "123456" }` → enables OTP
- **POST** `/api/v1/auth/otp/validate` · Bearer · `{ "otp": "123456" }`
- **POST** `/api/v1/auth/otp/disable` · Bearer → clears the secret

---

## Users

`GET /users` is authenticated (not admin). `PATCH` / `DELETE /users/:id` may be admin-gated
(a `403` for non-admins is a valid response).

| Endpoint | Response `data` |
| -------- | --------------- |
| **GET** `/api/v1/users` | `users: [ … ]` |
| **GET** `/api/v1/users/current` | `user` (current user, Bearer) |
| **PATCH** `/api/v1/users/current` | `user` (update first_name / last_name / phone) |
| **DELETE** `/api/v1/users/current` | `user` (soft-delete) |
| **GET** `/api/v1/users/username/:username` | `user` |
| **GET** `/api/v1/users/:id` | `user` |
| **PATCH** `/api/v1/users/:id` | `user` (admin) |
| **DELETE** `/api/v1/users/:id` | `user` (admin) |
| **GET** `/api/v1/users/:id/posts` | `posts: [ … ]` |
| **GET** `/api/v1/users/:id/roles` | `role` |

---

## Todos

Creates attach the authenticated user as owner.

| Endpoint | Response `data` |
| -------- | --------------- |
| **GET** `/api/v1/todos` | `todos: [ … ]` |
| **GET** `/api/v1/todos/current-user` | `todos: [ … ]` |
| **POST** `/api/v1/todos` — `{ title, description? }` | `todo` |
| **GET** `/api/v1/todos/:id` | `todo` |
| **PATCH** `/api/v1/todos/:id` | `todo` |
| **DELETE** `/api/v1/todos/:id` | `todo` |
| **PATCH** `/api/v1/todos/:id/toggle` | `todo` |

---

## Posts & comments

Posts include their author (`data.post.user`) and comments. Author = the Bearer user;
`imageUrl` is optional.

| Endpoint | Response `data` |
| -------- | --------------- |
| **GET** `/api/v1/posts` | `posts: [ … ]` |
| **GET** `/api/v1/posts/current-user` | `posts: [ … ]` |
| **POST** `/api/v1/posts` — `{ title, content }` | `post` |
| **GET** `/api/v1/posts/:id` | `post` |
| **PATCH** `/api/v1/posts/:id` | `post` |
| **DELETE** `/api/v1/posts/:id` | `post` |
| **GET** `/api/v1/posts/:id/user` | `user` |
| **GET** `/api/v1/posts/:id/comments` | `comments: [ … ]` |
| **POST** `/api/v1/posts/:id/comments` — `{ content }` | `comment` |
| **PATCH** `/api/v1/posts/:id/comments/:commentId` | `comment` |
| **DELETE** `/api/v1/posts/:id/comments/:commentId` | `comment` |

---

## Follows

Keyed by the **target** user id, acting as the Bearer user.

| Endpoint | Response `data` |
| -------- | --------------- |
| **POST** `/api/v1/follows/:id/follow` | — |
| **DELETE** `/api/v1/follows/:id/follow` | — |
| **GET** `/api/v1/follows/:id/followers` | `followers: [ … ]` |
| **GET** `/api/v1/follows/:id/following` | `following: [ … ]` |
| **GET** `/api/v1/follows/:id/is-following` | `isFollowing: boolean` |

---

## Roles

Admin-only (`403` for non-admins). `GET|POST /api/v1/roles`,
`GET|PATCH|DELETE /api/v1/roles/:id`, `GET /api/v1/roles/:id/users`. The `user` role is
created automatically on the first registration.
