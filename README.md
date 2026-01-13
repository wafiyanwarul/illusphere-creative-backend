# Illusphere Creative - Backend API

Backend API for Illusphere Creative, a tech and creative agency platform.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js + TypeScript
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Authentication**: JWT
- **File Storage**: Supabase Storage
- **Cache**: Redis (Upstash)
- **Payment**: Xendit

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn
- PostgreSQL database (Supabase account)

### Installation

\`\`\`bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your credentials

# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start development server
npm run dev
\`\`\`

## Project Structure
\`\`\`
src/
├── config/          # Configuration files
├── modules/         # Feature modules
│   ├── auth/
│   ├── projects/
│   ├── clients/
│   ├── payments/
│   └── notifications/
├── shared/          # Shared utilities
│   ├── middlewares/
│   ├── utils/
│   └── types/
├── app.ts          # Express app setup
└── server.ts       # Server entry point
\`\`\`

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:studio` - Open Prisma Studio
- `npm test` - Run tests

## License
MIT