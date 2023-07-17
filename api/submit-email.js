import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  const client = await db.connect();
  const email = request.body.email;
  await client.sql`INSERT INTO emails (email) VALUES (${email})`;
  response.status(200).json({
    message: "Email submitted successfully!"
  });
}