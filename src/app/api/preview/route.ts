import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../../prismicio";

export async function GET(request: NextRequest) {
  const client = createClient();

  return await redirectToPreviewURL({ client, request });
}

// Define Route Handler
// API Endpoint to use on app