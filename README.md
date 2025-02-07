# Ordinal Search

A React application for searching and viewing Bitcoin Ordinal inscriptions. This application allows users to look up ordinal inscriptions stored in Bitcoin wallets and view their details.

## Features

- Search ordinal inscriptions by Bitcoin wallet address
- View list of inscriptions with infinite loading
- Display detailed inscription information including:
  - Basic inscription details
  - Content preview (images, text, gif, games??)
  - Collection information
  - Transaction details
  - Genesis information
  - Satoshi attributes

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Routing**: React Router DOM
- **API Client**: Axios
- **State Management**: 
  - Zustand (global state)
  - React Query (server state)
- **Styling**: 
  - Tailwind CSS
  - NextUI Components
- **Code Quality**:
  - ESLint
  - Prettier

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:verkhohliad/ordinals-search.git
cd ordinal-search
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   └── ui/            # Basic UI elements
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── layouts/           # Layout components
├── pages/             # Page components
│   ├── home/          # Home page with search
│   └── details/       # Inscription details page
├── services/          # API services
├── store/             # Global state management
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## API Endpoints

The application uses the following Xverse API endpoints:

1. List Ordinal UTXOs:
```
GET https://api-3.xverse.app/v1/address/:address/ordinal-utxo
```

2. Get Inscription Details:
```
GET https://api-3.xverse.app/v1/address/:address/ordinals/inscriptions/:inscriptionId
```

3. View Inscription Content:
```
GET https://ord.xverse.app/content/:inscriptionId
or 
GET https://ordinals.com/content/:inscriptionId
```
