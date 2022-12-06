import type { FullConfig } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-empty-function
async function globalSetup(config: FullConfig) {}

export default globalSetup;
