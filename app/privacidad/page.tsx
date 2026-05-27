import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LAUNCH_OFFER, LEGAL_OPERATOR, LEGAL_RUT, EMAIL, SITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Holy Solutions',
  description: 'Cómo Holy Solutions recopila, usa y protege tus datos personales.',
  alternates: { canonical: '/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className={`flex-1 ${LAUNCH_OFFER.active ? 'pt-[108px]' : 'pt-[68px]'}`}>
        <section className="hs-section">
          <div className="hs-container" style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="hs-eyebrow">Legal</span>
              <h1 className="hs-h2" style={{ marginTop: '12px' }}>Política de Privacidad</h1>
              <p className="hs-p" style={{ marginTop: '8px' }}>Última actualización: mayo 2026</p>
            </div>

            {/* TOC */}
            <div className="hs-legal-toc">
              <p className="hs-legal-toc-title">Contenidos</p>
              <ol>
                <li><a href="#responsable">Responsable del tratamiento</a></li>
                <li><a href="#datos">Datos que recopilamos</a></li>
                <li><a href="#finalidad">Finalidad del tratamiento</a></li>
                <li><a href="#base-legal">Base legal</a></li>
                <li><a href="#conservacion">Conservación de datos</a></li>
                <li><a href="#derechos">Derechos del titular</a></li>
                <li><a href="#terceros">Transferencia a terceros</a></li>
                <li><a href="#cookies">Cookies y análisis web</a></li>
                <li><a href="#seguridad">Seguridad</a></li>
                <li><a href="#cambios">Cambios a esta política</a></li>
              </ol>
            </div>

            <div className="hs-legal-body">
              <h2 id="responsable">1. Responsable del tratamiento</h2>
              <p>
                <strong>{LEGAL_OPERATOR}</strong>, RUT {LEGAL_RUT}, operando como{' '}
                <strong>Holy Solutions</strong>, Valparaíso, Chile. Contacto:{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>

              <h2 id="datos">2. Datos que recopilamos</h2>
              <p>
                Recopilamos únicamente los datos que el usuario nos proporciona voluntariamente
                a través del cotizador o contacto directo: nombre, número de teléfono y
                descripción del proyecto. No recopilamos datos sensibles.
              </p>

              <h2 id="finalidad">3. Finalidad del tratamiento</h2>
              <p>
                Los datos se utilizan exclusivamente para responder cotizaciones y gestionar
                la relación comercial con el cliente. No utilizamos datos para marketing sin
                consentimiento previo.
              </p>

              <h2 id="base-legal">4. Base legal</h2>
              <p>
                El tratamiento se basa en el consentimiento del titular, quien nos contacta
                voluntariamente, y en la ejecución del contrato de servicios, conforme a la
                Ley 19.628 sobre Protección de la Vida Privada de Chile.
              </p>

              <h2 id="conservacion">5. Conservación de datos</h2>
              <p>
                Los datos se conservan durante la vigencia de la relación comercial y hasta
                3 años después de su término, salvo obligación legal de mayor plazo.
              </p>

              <h2 id="derechos">6. Derechos del titular</h2>
              <p>
                El titular tiene derecho a acceder, rectificar, cancelar y oponerse al
                tratamiento de sus datos. Para ejercer estos derechos, escribe a{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> indicando tu solicitud.
              </p>

              <h2 id="terceros">7. Transferencia a terceros</h2>
              <p>
                No vendemos ni cedemos datos personales a terceros. Podemos compartir datos
                estrictamente necesarios con proveedores de servicios (hosting, plataformas de
                pago) que actúan como encargados del tratamiento bajo instrucciones de Holy
                Solutions.
              </p>

              <h2 id="cookies">8. Cookies y análisis web</h2>
              <p>
                El sitio puede utilizar Google Analytics (si está configurado) para medir
                tráfico de forma anónima y agregada. No utilizamos cookies de publicidad o
                seguimiento cross-site.
              </p>

              <h2 id="seguridad">9. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas razonables para proteger los datos contra accesos
                no autorizados. Sin embargo, ningún sistema es 100% seguro; te recomendamos
                no enviarnos información que no sea estrictamente necesaria.
              </p>

              <h2 id="cambios">10. Cambios a esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política. Cambios significativos
                serán notificados en el sitio web con al menos 15 días de anticipación.
              </p>

              <hr />
              <p>
                Para consultas sobre privacidad, escríbenos a{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
