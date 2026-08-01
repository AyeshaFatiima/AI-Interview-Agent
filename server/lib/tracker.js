import { createXRay } from "@hellyeah/x-ray/server"

export const TRACKER_ID =
  process.env.HELLYEAH_TRACKER_ID || "019ebabe-3644-7000-a40f-124bc4f17f31"

export const tracker = createXRay(TRACKER_ID, {
  env: process.env.HELLYEAH_TRACKER_ENV,
})

export { cv } from "@hellyeah/x-ray/server"
