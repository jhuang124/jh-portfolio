# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run dev:daemon   # Start dev server in background (logs → logs.txt)
npm run build        # Production build
npm run lint         # ESLint

# Testing
npm run test         # Run all tests (Vitest)
npx vitest run src/path/to/file.test.ts  # Run single test file

# Database
npm run setup        # Install deps + generate Prisma client + migrate
npm run db:reset     # Reset database (destructive)
npx prisma studio    # Open Prisma GUI
```

## Architecture

UIGen is an AI-powered React component generator. Users describe components in chat, Claude generates them, and they appear in a live preview — all via a virtual file system (no disk writes).

### Data Flow

1. User sends chat message → `ChatContext` sends messages + virtual FS state to `/api/chat`
2. Server streams Claude's response via Vercel AI SDK `streamText()`
3. Claude uses two tools: `str_replace_editor` (edit file contents) and `file_manager` (rename/delete files)
4. Tool calls update `FileSystemContext` → triggers re-render of `PreviewFrame`
5. Preview iframe compiles JSX on-the-fly via Babel standalone, resolves imports via esm.sh CDN
6. On stream completion, project state is saved to SQLite via Prisma

### Key Contexts

- **`FileSystemContext`** (`src/lib/contexts/file-system-context.tsx`): Wraps `VirtualFileSystem` class, exposes file CRUD and `handleToolCall()` for AI tool responses
- **`ChatContext`** (`src/lib/contexts/chat-context.tsx`): Manages Vercel AI SDK `useChat` state, passes FS state to API

### Virtual File System

`src/lib/file-system.ts` — in-memory tree, serialized as JSON for DB persistence. The AI's root component must be `/App.jsx` with a default export.

### AI Integration

- API route: `src/app/api/chat/route.ts`
- System prompt: `src/lib/prompts/generation.tsx`
- Tools: `src/lib/tools/str-replace.ts`, `src/lib/tools/file-manager.ts`
- Falls back to mock provider if `ANTHROPIC_API_KEY` is not set
- Prompt caching enabled; max 10,000 tokens, 40 steps (4 for mock)

### Preview Engine

`src/lib/transform/jsx-transformer.ts` — Babel transforms JSX → ESM JS, generates import maps pointing to esm.sh for React and npm packages. Preview runs in a sandboxed iframe.

### Authentication

JWT sessions via `jose` stored in HTTP-only cookies. `src/lib/auth.ts` handles session lifecycle; `src/actions/index.ts` has server actions for sign-up/sign-in. Anonymous users get localStorage persistence via `src/lib/anon-work-tracker.ts`.

### Database

SQLite via Prisma. Two models: `User` (email/password) and `Project` (messages + FS data as JSON, optionally linked to a user).

## Tech Stack

- **Framework:** Next.js 15 App Router, React 19, TypeScript 5
- **Styling:** Tailwind CSS v4, shadcn/ui (new-york style), Radix UI
- **AI:** Vercel AI SDK 4, `@ai-sdk/anthropic`
- **DB:** Prisma 6 + SQLite
- **Editor:** Monaco Editor (`@monaco-editor/react`)
- **Testing:** Vitest + Testing Library (jsdom environment)
- **Path alias:** `@/*` → `src/*`

## Environment

Set `ANTHROPIC_API_KEY` in `.env` to use real Claude. Without it, the app falls back to a mock provider returning static code (useful for UI development).

## Database
The database schema is defined in `prisma/schema.prisma`. Two models: `User` (email/password) and `Project` (messages + FS data as JSON blobs).

