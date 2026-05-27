import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Holy Solutions — Desarrollo web y software para empresas en Chile'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0A0A0F 0%, #16161E 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(60rem 40rem at 30% 20%, rgba(79,70,229,0.2), transparent 60%), radial-gradient(40rem 30rem at 70% 80%, rgba(79,70,229,0.15), transparent 60%)',
            display: 'flex',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: '#4F46E5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#FAFAFA',
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}
        >
          Holy Solutions
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: '#A1A1AA',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Desarrollo web y software para empresas en Chile
        </div>

        {/* Pill */}
        <div
          style={{
            marginTop: 48,
            background: 'rgba(79,70,229,0.2)',
            border: '1px solid rgba(79,70,229,0.4)',
            borderRadius: 9999,
            padding: '10px 28px',
            fontSize: 18,
            color: '#818CF8',
            fontWeight: 500,
          }}
        >
          holysolutions.cl
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
