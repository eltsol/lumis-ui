function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);
    const candidates =
      pathname === "/"
        ? ["/index.html"]
        : pathname.endsWith("/")
          ? [`${pathname}index.html`]
          : [pathname, `${pathname}.html`, `${pathname}/index.html`];

    for (const candidate of candidates) {
      const response = await env.ASSETS.fetch(assetRequest(request, candidate));
      if (response.status !== 404) return response;
    }

    return new Response("Not found", { status: 404 });
  },
};
