/**
 * Cloudflare Worker — proxy za Resend API (newsletter pretplata)
 *
 * Environment varijable koje treba podesiti u Cloudflare Dashboard:
 *   RESEND_API_KEY    — tvoj Resend API kljuc
 *   RESEND_AUDIENCE_ID — ID audience-a u Resend-u
 *   ALLOWED_ORIGIN    — URL tvog sajta (npr. https://humantrop.github.io)
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Metod nije dozvoljen.' },
        { status: 405, headers: corsHeaders }
      );
    }

    try {
      const { email } = await request.json();

      if (!email || typeof email !== 'string') {
        return Response.json(
          { error: 'Email adresa je obavezna.' },
          { status: 400, headers: corsHeaders }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return Response.json(
          { error: 'Unesite validnu email adresu.' },
          { status: 400, headers: corsHeaders }
        );
      }

      const res = await fetch('https://api.resend.com/audiences/' + env.RESEND_AUDIENCE_ID + '/contacts', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + env.RESEND_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const err = await res.text();
        return Response.json(
          { error: 'Greska pri registraciji: ' + err },
          { status: res.status, headers: corsHeaders }
        );
      }

      return Response.json({ success: true }, { headers: corsHeaders });
    } catch {
      return Response.json(
        { error: 'Doslo je do greske.' },
        { status: 500, headers: corsHeaders }
      );
    }
  },
};
