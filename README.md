# Voting Systems

## Feature Plans

1. Scaffold UI
2. Test framework (runner)
3. Authentication
4. A user can invite other users to vote in elections
5. A user can see which elections they are invited to vote in
6. A user can create a vote (in an election)
7. An election admin can configure publicity and general privileges on Elections
8. An election-admin can tally the votes
9. An election-admin can set permissions on the election
10. The Election will account for ties
11. Election admin can close elections early

### UI Scaffolding

- [ ] add vite
- [ ] At least two routes
  - [ ] react hello
  - [ ] Basic API Call
- [ ] Decide on CSS patterns
- [ ] Decide on client-side routing system
- [ ] HMR

### Authentication

- [ ] As a user I would like to Create, Read and Update an account
  - [ ] API
    - [ ] Route: `POST /api/auth/account`: Creates or updates a user's account information
    - [ ] Route `GET /api/auth/account`: Retrieves user's account information
    - [ ]
- [ ] As a user I would like to log into and out of my account
  - [ ] API
    - [ ] Route: `/api/auth/login`
    - [ ] Route `/api/auth/logout`
  - [ ] Client
    - [ ]

## Notes from Excalidraw Session 0

### Entities

- Election
  - Creator (User)
  - Strategy (Enum)
    - Start with plurality
    - Instant Runoff
    - Star
  - open/close datetimes (optional)
- User
- Election Admins
  - Election/User m2m
- Ballot
- Option (or candidate)

### Tools and Technologies

TypeScript

- Front-End (Browser)
  - React
  - MobX
- Back
  - NodeJS
  - Express
  - Postgres
  - REST API
- Target
  - AWS

Misc tools in order of priority

- Prettier
- ESLint
- .editorconfig
- .gitconfig

Instant Runoff

- 4 candidates
  - Reuben
  - BLT
  - PB&J
  - Ice Cream

1. Ice cream
2. PB&J
3. BLT
4. Reuben

Winner must have 50% + 1
Round 1: No winners (<50%)
_ Reuben 35%
_ BLT 30%
_ PB&J 20%
_ Ice Cream 15%
Candidate w/ Least votes gets the can
(Ice Cream)
_ Iterate over each ballot
_ For every ballot which had Ice Cream sandwich,
count them instead for their second choices
Round 2:
_ Reuben 35%
_ BLT 35% \* PB&J 30%

Round 3:
_ Reuben 45%
_ BLT 55%

# Later Feature Ideas

- OAuth 2.0

# Stream notes:

Resolution: 2560 x 1440
Zoom level 150%
