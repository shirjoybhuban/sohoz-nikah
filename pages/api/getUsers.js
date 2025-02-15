
// Assuming you have a `users` schema
import { db } from 'lib/db';
import { users } from 'lib/db/schema';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const data = await db.select().from(users); // Replace with your query
            res.status(200).json({ users: data });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
