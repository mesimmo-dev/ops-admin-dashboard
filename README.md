# Ops Admin Dashboard

A lightweight full-stack admin dashboard scaffold built with Next.js, TypeScript, and synthetic operational records.

This project is intentionally minimal. It is designed as a carpool-lane prototype for practicing full-stack dashboard structure, typed records, API routes, and admin-style interfaces without using personal or sensitive data.

## Purpose

Ops Admin Dashboard provides a simple interface for viewing synthetic operational records by status and category.

The project demonstrates:

- a typed dashboard data model
- a synthetic records table
- basic admin-style status tracking
- a simple API route structure
- a clean foundation for future Supabase integration

## Current Version

This version uses local synthetic records only.

No real user data, client data, private project data, or personally identifiable information is included.

## Planned Stack

- Next.js
- TypeScript
- Supabase
- Simple API routes
- Vercel deployment

## Current Features

- Synthetic operational records
- Dashboard summary cards
- Recent records table
- Status categories
- API-ready project structure

## Example Record Fields

| Field | Description |
|---|---|
| id | Synthetic record identifier |
| label | Generic record label |
| category | Operational category |
| status | Current review state |
| priority | Low, medium, or high priority |

## Sample Statuses

| Status | Meaning |
|---|---|
| pending | Awaiting review |
| cleared | Approved or completed |
| flagged | Needs attention |
| archived | Stored for reference |

## Folder Structure

```text
ops-admin-dashboard/
│
├── README.md
├── package.json
├── .env.example
├── app/
│   ├── page.tsx
│   └── api/
│       └── records/
│           └── route.ts
├── lib/
│   └── sampleRecords.ts
└── types/
    └── record.ts
