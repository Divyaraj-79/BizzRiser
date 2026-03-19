# BizzRiser Backend - Hostinger Deployment Guide

This guide explains how to host the BizzRiser backend on Hostinger using the **Node.js Web App** feature and GitHub integration.

## Prerequisites

1.  A Hostinger hosting plan that supports Node.js (Business or higher).
2.  A MySQL database created in Web Hosting -> Databases -> MySQL Databases.
3.  The backend code pushed to a GitHub repository.

---

## Step 1: Prepare the Hub (GitHub)

Ensure your latest changes are pushed to your GitHub repository. The backend should have the following files updated (which we just did):
-   `package.json`: Contains `build:prod` and `prisma:deploy`.
-   `prisma/fix-provider.js`: Handles switching from SQLite to MySQL automatically.

## Step 2: Create a MySQL Database on Hostinger

1.  Log in to Hostinger hPanel.
2.  Go to **Databases** -> **MySQL Databases**.
3.  Create a new database and user. **Note down the Database Name, Username, and Password.**
4.  The host is usually `localhost` or `127.0.0.1`.

## Step 3: Set up the Node.js Web App

1.  In hPanel, go to **Web Hosting** -> **Advanced** -> **Node.js**.
2.  Click **Create Application**.
3.  **Application Name**: `bizzriser-backend`
4.  **Domain**: Choose your domain or subdomain (e.g., `api.bizzriser.com`).
5.  **GitHub Repository**: Connect your GitHub account and select the `BizzRiser` repository.
6.  **Branch**: `main` (or your preferred branch).
7.  **Application Root**: `/bizzriser-backend`
8.  **Application Startup File**: `dist/src/main.js`
9.  **Node.js Version**: Select the latest stable version (e.g., 20.x or 22.x).
10. **Run Environment**: `Production`

## Step 4: Configure Environment Variables

In the Node.js App settings, find the **Environment Variables** section and add the following:

| Variable | Value |
| :--- | :--- |
| `NODE_ENV` | `production` |
| `PORT` | `3001` (or whatever Hostinger assigns) |
| `DATABASE_URL` | `mysql://USER:PASSWORD@127.0.0.1:3306/DB_NAME` |
| `HOSTINGER` | `true` |
| `JWT_SECRET` | A random long string |
| `FRONTEND_URL` | Your frontend URL (e.g., `https://bizzriser.com`) |
| `SMTP_USER` | Your email |
| `SMTP_PASS` | Your email app password |

## Step 5: Deployment and Database Setup

1.  Click **Connect & Deploy**. Hostinger will pull the code.
2.  Once deployed, look for the **Terminal** icon in your hPanel (under Advanced) or the **Web Console** inside the Node.js application menu.
3.  Alternatively, you can use **SSH** if you have it enabled in hPanel.
4.  Run these commands in order:

    ```bash
    # 1. Navigate to the project folder
    # Note: Hostinger usually puts the code in a subfolder like 'public_html' or '.builds'
    # Use 'ls' to find where your files are!
    ```
    
    # 1. Install dependencies
    npm install
    
    # 2. Fix permissions (Crucial for Hostinger)
    chmod +x node_modules/.bin/prisma
    
    # 3. Build for production (Use ONLY build:prod!)
    npm run build:prod
    
    # 4. Push database schema safely
    npm run prisma:deploy
    ```
    *Note: `npm run build:prod` is safer as it won't wipe your data. `npm run prisma:deploy` will create tables in your MySQL database without deleting existing data.*

> [!WARNING]
> Always use `npm run build:prod` on Hostinger. The standard `npm run build` command is configured to **RESET** your database (delete all data) for development purposes.

## Step 6: Verify

1.  Your API should be live at `https://your-api-domain.com/api/docs`.
2.  If you still see "Permission denied" or "Command not found", double-check Step 5.

---

## Troubleshooting

-   **Prisma Errors**: If you see "Inconsistent query engine" errors, ensure `npm install` was run on the Hostinger server so it generates the correct binaries for their Linux environment.
-   **CORS Issues**: Ensure `FRONTEND_URL` in environment variables matches exactly with where your frontend is hosted.
