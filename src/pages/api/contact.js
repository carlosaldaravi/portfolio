export default async function handler(req, res) {
  try {
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Error sending the contact form" });
  }
}
