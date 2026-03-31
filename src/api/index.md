# API Reference

REST API for the CLIuno backend — a simple todo app with a following system.

## Base URL

```
/api/v1
```

## Authentication

Most endpoints require a Bearer token in the `Authorization` header:

```
Authorization: Bearer <token>
```

---

## Auth

### Login
**POST** `/api/v1/auth/login`

Authenticate a user and receive an access token.

::: details Request Body
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
:::

::: details Response
```json
{
  "token": "eyJ...",
  "refresh_token": "eyJ..."
}
```
:::

---

### Register <Badge type="warning" text="not implemented" />
**POST** `/api/v1/auth/register`

Create a new user account.

---

### Logout <Badge type="warning" text="not implemented" />
**POST** `/api/v1/auth/logout`

Invalidate the current session token.

---

### Forgot Password
**POST** `/api/v1/auth/forgot-password`

Send a password reset link to the user's email.

::: details Request Body
```json
{
  "email": "user@example.com"
}
```
:::

---

### Reset Password
**POST** `/api/v1/auth/reset-password`

Reset the user's password using the token from the reset email.

::: details Request Body
```json
{
  "token": "reset-token",
  "password": "newpassword",
  "password_confirmation": "newpassword"
}
```
:::

---

### Change Password
**POST** `/api/v1/auth/change-password`

Change the authenticated user's password.

::: details Request Body
```json
{
  "current_password": "oldpassword",
  "password": "newpassword",
  "password_confirmation": "newpassword"
}
```
:::

---

### Send Verification Email
**POST** `/api/v1/auth/send-verify-email`

Resend the email verification link to the authenticated user.

---

### Verify Email
**POST** `/api/v1/auth/verify-email`

Verify the user's email address using the token from the verification email.

::: details Request Body
```json
{
  "token": "verify-token"
}
```
:::

---

### Check Token <Badge type="warning" text="not implemented" />
**POST** `/api/v1/auth/check-token`

Validate whether an access token is still active.

---

### Refresh Token <Badge type="warning" text="not implemented" />
**POST** `/api/v1/auth/refresh-token`

Exchange a refresh token for a new access token.

---

### Generate OTP
**POST** `/api/v1/auth/otp/generate`

Generate a new OTP secret for the authenticated user.

---

### Verify OTP
**POST** `/api/v1/auth/otp/verify`

Verify and enable OTP for the authenticated user.

::: details Request Body
```json
{
  "token": "123456"
}
```
:::

---

### Validate OTP
**POST** `/api/v1/auth/otp/validate`

Validate an OTP code during login (when OTP is enabled).

::: details Request Body
```json
{
  "token": "123456"
}
```
:::

---

### Disable OTP
**POST** `/api/v1/auth/otp/disable`

Disable OTP for the authenticated user.

::: details Request Body
```json
{
  "token": "123456"
}
```
:::

---

## Users

### Get Current User <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/current`

Returns the authenticated user's profile.

---

### Get User by Username <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/username/:username`

Look up a user by their username.

| Parameter  | Type   | Description       |
|------------|--------|-------------------|
| `username` | string | The username      |

---

### Get All Users <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users`

Returns a paginated list of all users.

---

### Get User by ID <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:id`

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | User ID     |

---

### Update User <Badge type="warning" text="not implemented" />
**PATCH** `/api/v1/users/:id`

Update a user's profile fields.

---

### Delete User <Badge type="warning" text="not implemented" />
**DELETE** `/api/v1/users/:id`

Permanently delete a user account.

---

### Get User Permissions <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/permissions`

List all permissions assigned to a user.

---

### Get User Posts <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/posts`

List all posts created by a user.

---

### Get User Roles <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/roles`

List all roles assigned to a user.

---

### Get User Comments <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/comments`

List all comments made by a user.

---

## Roles

### Get All Roles <Badge type="warning" text="not implemented" />
**GET** `/api/v1/roles`

Returns all defined roles.

---

### Get Role by ID <Badge type="warning" text="not implemented" />
**GET** `/api/v1/roles/:id`

---

### Create Role <Badge type="warning" text="not implemented" />
**POST** `/api/v1/roles`

::: details Request Body
```json
{
  "name": "editor",
  "permissions": []
}
```
:::

---

### Update Role <Badge type="warning" text="not implemented" />
**PATCH** `/api/v1/roles/:id`

---

### Delete Role <Badge type="warning" text="not implemented" />
**DELETE** `/api/v1/roles/:id`

---

### Get Role Permissions <Badge type="warning" text="not implemented" />
**GET** `/api/v1/roles/:role_id/permissions`

---

### Get Role Users <Badge type="warning" text="not implemented" />
**GET** `/api/v1/roles/:role_id/users`

---

## Posts

### Get Current User Posts <Badge type="warning" text="not implemented" />
**GET** `/api/v1/posts/current-user`

Returns all posts belonging to the authenticated user.

---

### Get All Posts <Badge type="warning" text="not implemented" />
**GET** `/api/v1/posts`

Returns a paginated list of all posts.

---

### Get Post by ID <Badge type="warning" text="not implemented" />
**GET** `/api/v1/posts/:id`

---

### Create Post <Badge type="warning" text="not implemented" />
**POST** `/api/v1/posts`

::: details Request Body
```json
{
  "title": "My first post",
  "body": "Hello world!"
}
```
:::

---

### Update Post <Badge type="warning" text="not implemented" />
**PATCH** `/api/v1/posts/:id`

---

### Delete Post <Badge type="warning" text="not implemented" />
**DELETE** `/api/v1/posts/:id`

---

### Get Post Author <Badge type="warning" text="not implemented" />
**GET** `/api/v1/posts/:post_id/user`

Returns the user who created the post.

---

### Get Post Comments <Badge type="warning" text="not implemented" />
**GET** `/api/v1/posts/:post_id/comments`

Returns all comments on a post.

---

## Follows

Endpoints for the user following system. A `Follow` represents a directed relationship — a `follower` follows a `following` user (unique per pair).

### Follow a User <Badge type="warning" text="not implemented" />
**POST** `/api/v1/users/:user_id/follow`

Follow another user. Requires authentication. Returns `409` if already following.

| Parameter | Type   | Description              |
|-----------|--------|--------------------------|
| `user_id` | string | ID of the user to follow |

::: details Response
```json
{
  "id": "uuid",
  "follower": { "id": "...", "username": "..." },
  "following": { "id": "...", "username": "..." },
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```
:::

---

### Unfollow a User <Badge type="warning" text="not implemented" />
**DELETE** `/api/v1/users/:user_id/follow`

Unfollow a user. Returns `404` if the follow relationship does not exist.

| Parameter | Type   | Description                |
|-----------|--------|----------------------------|
| `user_id` | string | ID of the user to unfollow |

---

### Get User Followers <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/followers`

Returns all users who follow the given user.

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `user_id` | string | User ID     |

---

### Get User Following <Badge type="warning" text="not implemented" />
**GET** `/api/v1/users/:user_id/following`

Returns all users that the given user is following.
