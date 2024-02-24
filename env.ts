import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string().trim().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().trim().min(1)
  },
  client: {
    NEXT_PUBLIC_BACKEND_DOMAIN: z
      .string()
      .trim()
      .url({ message: 'invalid backend url' })
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BACKEND_DOMAIN: process.env.NEXT_PUBLIC_BACKEND_DOMAIN
  }
});
