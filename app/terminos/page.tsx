import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LAUNCH_OFFER, LEGAL_OPERATOR, LEGAL_RUT, EMAIL, SITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Servicio — Holy Solutions',
  description: 'Condiciones generales que rigen la contratación de servicios de Holy Solutions.',
  alternates: { canonical: '/terminos' },
}

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className={`flex-1 ${LAUNCH_OFFER.active ? 'pt-[108px]' : 'pt-[68px]'}`}>
        <section className="hs-section">
          <div className="hs-container" style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="hs-eyebrow">Legal</span>
              <h1 className="hs-h2" style={{ marginTop: '12px' }}>Términos de Servicio</h1>
              <p className="hs-p" style={{ marginTop: '8px' }}>Última actualización: mayo 2026</p>
            </div>

            {/* TOC */}
            <div className="hs-legal-toc">
              <p className="hs-legal-toc-title">Contenidos</p>
              <ol>
                <li><a href="#objeto">Objeto</a></li>
                <li><a href="#partes">Partes</a></li>
                <li><a href="#servicios">Servicios ofrecidos</a></li>
                <li><a href="#cotizacion">Cotización y aceptación</a></li>
                <li><a href="#pagos">Pagos</a></li>
                <li><a href="#plazos">Plazos de entrega</a></li>
                <li><a href="#propiedad">Propiedad intelectual</a></li>
                <li><a href="#responsabilidad">Limitación de responsabilidad</a></li>
                <li><a href="#terminacion">Terminación</a></li>
                <li><a href="#ley">Ley aplicable</a></li>
              </ol>
            </div>

            <div className="hs-legal-body">
              <h2 id="objeto">1. Objeto</h2>
              <p>
                El presente documento establece los términos y condiciones que rigen la
                contratación de servicios de desarrollo web y software entre Holy Solutions
                y sus clientes.
              </p>

              <h2 id="partes">2. Partes</h2>
              <p>
                El proveedor es <strong>{LEGAL_OPERATOR}</strong>, RUT {LEGAL_RUT}, que opera
                bajo la marca comercial <strong>Holy Solutions</strong>, con domicilio en
                Valparaíso, Chile. El cliente es la persona natural o jurídica que contrata
                los servicios.
              </p>

              <h2 id="servicios">3. Servicios ofrecidos</h2>
              <p>
                Holy Solutions ofrece: landing pages, sitios corporativos, tiendas online
                (e-commerce), software a medida, automatización con IA, mantención mensual,
                SEO, migración de sitios y consultoría técnica. Los detalles, alcance y precio
                específico de cada proyecto se establecen en la cotización aceptada.
              </p>

              <h2 id="cotizacion">4. Cotización y aceptación</h2>
              <p>
                Toda cotización es válida por 15 días calendarios desde su emisión. La
                aceptación se formaliza mediante el pago del anticipo del 50% o confirmación
                expresa por escrito (correo electrónico o WhatsApp). Al aceptar la cotización,
                el cliente declara haber leído y aceptado estos términos.
              </p>

              <h2 id="pagos">5. Pagos</h2>
              <p>
                El esquema estándar es 50% anticipo al inicio del proyecto y 50% contra
                entrega. Para proyectos de mantención mensual, el pago se realiza por adelantado
                cada 30 días. Se acepta transferencia bancaria y plataformas de pago electrónico.
                Holy Solutions emite boleta de honorarios por cada pago recibido.
              </p>

              <h2 id="plazos">6. Plazos de entrega</h2>
              <p>
                Los plazos acordados en la cotización se consideran hábiles y comienzan a correr
                desde la recepción del anticipo y de todos los materiales necesarios por parte del
                cliente (textos, imágenes, accesos). Retrasos atribuibles al cliente no serán
                responsabilidad de Holy Solutions.
              </p>

              <h2 id="propiedad">7. Propiedad intelectual</h2>
              <p>
                Una vez realizado el pago total del proyecto, el cliente adquiere todos los
                derechos sobre el producto entregado (código fuente, diseño, contenido). Holy
                Solutions se reserva el derecho de mostrar el trabajo en su portafolio salvo
                indicación expresa en contrario.
              </p>

              <h2 id="responsabilidad">8. Limitación de responsabilidad</h2>
              <p>
                Holy Solutions no se hace responsable por pérdidas de ingresos, datos o cualquier
                daño indirecto derivado del uso o imposibilidad de uso de los productos entregados.
                La responsabilidad máxima de Holy Solutions se limita al monto pagado por el
                servicio en cuestión.
              </p>

              <h2 id="terminacion">9. Terminación</h2>
              <p>
                Cualquiera de las partes puede dar término al contrato con aviso previo de 10 días
                hábiles. En caso de terminación anticipada por parte del cliente, el anticipo pagado
                no es reembolsable. Holy Solutions devolverá el anticipo si la terminación es por
                incumplimiento propio.
              </p>

              <h2 id="ley">10. Ley aplicable</h2>
              <p>
                Este contrato se rige por las leyes de la República de Chile. Cualquier controversia
                se someterá en primera instancia a mediación entre las partes y, de no resolverse,
                a los tribunales ordinarios de justicia de Valparaíso.
              </p>

              <hr />
              <p>
                Para consultas sobre estos términos, escríbenos a{' '}
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
