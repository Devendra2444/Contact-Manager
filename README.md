# Contact Manager

A full-stack contact management app built with Next.js 16, featuring user authentication and CRUD operations with a JSON server backend.

## Features

- User authentication (login/logout)
- Create, read, update, and delete contacts
- Dashboard with contact statistics
- Responsive design with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Backend:** json-server
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the app

Start json-server (API backend):

```bash
npm run server
```

In a separate terminal, start the Next.js dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Seed data

The app includes sample users:

| Email | Password |
|---|---|
| user1@gmail.com | 123456 |
| user2@gmail.com | 123456 |
