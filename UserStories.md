# Production Employee Notes Management System

> Goal: Build a production-ready full-stack application one user story
> at a time.

## Project Vision

**Roles** - Admin - Manager - Employee

**Permissions** - Admin: Full access - Manager: Manage notes for
employees - Employee: View assigned notes only

------------------------------------------------------------------------

# Epic 1 -- Authentication

## US-001 Register

**As a** new user **I want** to create an account **So that** I can
access the system.

### Acceptance Criteria

-   Email is unique
-   Password is hashed
-   Input is validated
-   Verification email is sent

------------------------------------------------------------------------

## US-002 Login

### Acceptance Criteria

-   Validate credentials
-   Generate Access Token
-   Generate Refresh Token
-   Store refresh token securely
-   Return secure cookies

------------------------------------------------------------------------

## US-003 Logout

-   Invalidate refresh token
-   Clear cookies

## US-004 Refresh Token

-   Verify refresh token
-   Rotate refresh token
-   Return new access token

## US-005 Forgot Password

## US-006 Reset Password

## US-007 Verify Email

------------------------------------------------------------------------

# Epic 2 -- Authorization

## US-008 Role Based Access Control

Roles: - Admin - Manager - Employee

## US-009 Permission Middleware

-   isAuthenticated
-   isAdmin
-   isManager

------------------------------------------------------------------------

# Epic 3 -- User Management

## Stories

-   Create Employee
-   Update Employee
-   Delete Employee
-   Upload Avatar
-   View Profile

------------------------------------------------------------------------

# Epic 4 -- Notes

Stories: - Create Note - Update Note - Delete Note - Assign Note - View Assigned Notes

------------------------------------------------------------------------

# Epic 5 -- Search & Pagination

Stories: - Search - Filter - Sort - Pagination

------------------------------------------------------------------------

# Epic 6 -- Security

Stories: - JWT - CORS - Rate Limiting - HTTP-only Cookies

------------------------------------------------------------------------

# Epic 7 -- Validation & Error Handling

Stories: - Request Validation - Global Error Handler - Standard API
Responses

------------------------------------------------------------------------

# Epic 8 -- Logging & Monitoring

Stories: - Request Logs - Error Logs - Audit Logs - Health Check
Endpoint

------------------------------------------------------------------------

# Epic 9 -- File Uploads & Email

Stories: - Upload Avatar - Upload Attachments - Welcome Email - Password
Reset Email

------------------------------------------------------------------------

# Epic 10 -- Performance

Stories: - Redis Cache - Database Indexes 

------------------------------------------------------------------------

# Epic 11 -- Deployment

Stories: - CI/CD - Environment Variables - Production
Deployment

------------------------------------------------------------------------

# Definition of Done

For every user story: - \[ \] Database updated - \[ \] API endpoint
created - \[ \] Validation added - \[ \] Authentication applied - \[ \]
Authorization applied - \[ \] Tests written - \[ \] Error handling
added - \[ \] Logging added - \[ \] Documentation updated - \[ \]
Frontend integrated
