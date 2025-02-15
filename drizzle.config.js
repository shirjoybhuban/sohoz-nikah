import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/db/schema.js",  // Path to your schema
  out: "./lib/db/migrations",  
  dbCredentials: {
    url: process.env.DATABASE_URL,  // Your connection string
  },
});