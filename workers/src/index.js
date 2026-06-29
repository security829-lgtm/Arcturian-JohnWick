export default {
  async fetch(request) {
    const url = new URL(request.url);

    switch (url.pathname) {
      case "/":
        return Response.json({
          name: "Arcturian",
          status: "running"
        });

      case "/health":
        return Response.json({
          status: "healthy",
          uptime: Date.now()
        });

      case "/version":
        return Response.json({
          version: "0.1.0",
          runtime: "Cloudflare Workers"
        });

      case "/agent":
        if (request.method !== "POST") {
          return new Response("Method Not Allowed", { status: 405 });
        }

        const body = await request.json();

        return Response.json({
          success: true,
          received: body,
          message: "Agent endpoint ready"
        });

      default:
        return new Response("Not Found", { status: 404 });
    }
  }
};
