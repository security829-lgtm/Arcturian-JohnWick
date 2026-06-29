export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        status: "ok",
        service: "Arcturian",
        timestamp: new Date().toISOString()
      });
    }

    return new Response("Arcturian Worker is running 🚀", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
