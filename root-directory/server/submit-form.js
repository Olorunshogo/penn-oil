export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // TODO: Save to DB, send email, etc.
    console.log({ name, email, message });

    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}