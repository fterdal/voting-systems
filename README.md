# Voting Systems

## Feature Plans

1. A user can create a vote (in an election)
2. An election admin can configure publicity and general privileges on Elections
3. An election-admin can tally the votes
4. An election-admin can set permissions on the election
5. The Election will account for ties
6. Election admin can close elections early

### Basic Crud for certain models

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
