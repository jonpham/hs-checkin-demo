This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It has been updated to utilize & bootstrap use of the following Toolkits

- Node package manager: `pnpm` + `nvm`
- HTTP Server : Next.JS Router
- UI HTML Rendering: React
- CSS Framework: TailWind
- CSS UI Kit: ShadCN/UI
- http-rest API: NextJS controllers
- http-rpc API protocol: `tRPC`
- graph API protocol: `graphql`
- ORM: Prisma
- DB: Postgres
- PaaS: Vercel
- IaC: Pulumi on AWS

# Verification Tools

- Static Code Analyzer: ESLint
- Static Code Styler: Prettier
- Unit: Vitest
- UI : Storybook
- API : Step CI
- E2E: PlayWright

## Storybook
Use npx `storybook@latest upgrade` to update before using this starter.

# About Next.JS

Next.JS organizes itself based on project structure and specific reserved filenames. It's initial defaults are close to my personal preferences already, however cannot be changed due to Next's Build expectations [jonpham/2024-boilerplate-react](https://github.com/jonpham/2024-boilerplate-react/issues/20#issue-2685077085t)

See Next.JS's folder and file based routing [here](https://nextjs.org/docs/app/getting-started/project-structure#folder-and-file-conventions).

Beyond those requirements, the following guidance is followed:

1. Co-locate source closest to wherever used. 
    - (Use closest common parent dir for re-used components)
2. For global or application-agnostic source use Next's root level.
3. Organize non-production src code in separate `__*__` folders.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
