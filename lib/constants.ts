import type {
  Service,
  PricingTab,
  Project,
  Step,
  MaintPlan,
  Addon,
  FaqTab,
  PorQueItem,
  NavLink,
  Social,
  WizardOptions,
} from '@/types'

// ===== Contact =====
export const WHATSAPP_NUMBER  = '56900000000'
export const WHATSAPP_DISPLAY = '+56 9 0000 0000'
export const EMAIL    = 'holysolutions.cl@gmail.com'
export const HOURS    = '10:00 a 22:00 hrs'
export const LOCATION = 'Valparaíso, Chile'
export const SITE_URL = 'https://holysolutions.cl'

// ===== Legal =====
export const LEGAL_OPERATOR = 'José Miguel Meza Pontigo'
export const LEGAL_RUT      = '21.501.509-2'

// ===== Launch offer =====
export const LAUNCH_OFFER = {
  active:     true,
  discount:   0.25,
  spotsTotal: 5,
  validUntil: '31 de julio 2026',
  label:      'Oferta de lanzamiento',
}

// ===== Helpers =====
export function formatCLP(amount: number): string {
  return '$' + amount.toLocaleString('es-CL')
}

export function getDiscountedPrice(priceNumeric: number): string {
  return formatCLP(Math.round(priceNumeric * (1 - LAUNCH_OFFER.discount)))
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildPlanWhatsAppUrl(
  planName: string,
  serviceType: string,
  price: string,
  discountedPrice?: string,
): string {
  const priceText = discountedPrice
    ? `${discountedPrice} CLP (precio de lanzamiento, original ${price} CLP)`
    : `${price} CLP`
  return buildWhatsAppUrl(
    `Hola, me interesa el ${planName} de ${serviceType} por ${priceText}. ¿Podemos coordinar?`,
  )
}

// ===== Navigation =====
export const NAV_LINKS: NavLink[] = [
  { label: 'Servicios',  href: '/#services' },
  { label: 'Proyectos',  href: '/#projects' },
  { label: 'Precios',    href: '/#pricing' },
  { label: 'Contacto',   href: '/#cotizador' },
]

// ===== Sobre nosotros =====
export const SOBRE = {
  title: 'Somos un equipo de sansanos',
  body:  'Somos un equipo de sansanos de la Universidad Técnica Federico Santa María, apasionados por construir productos digitales que generen impacto real para negocios chilenos. Trabajamos desde Valparaíso para todo Chile.',
  pills: ['Equipo USM', 'Base en Valparaíso', '100% remoto', 'Atención 10:00 – 22:00'],
}

// ===== Por qué Holy =====
export const PORQUE: PorQueItem[] = [
  { iconName: 'Zap',           title: 'Velocidad',        body: 'Entregas rápidas. Landings en 5 a 7 días hábiles, sitios corporativos en 2 semanas.' },
  { iconName: 'HandCoins',     title: 'Precio justo',     body: 'Calidad de agencia, precio accesible para pymes. Todo en CLP, sin sorpresas.' },
  { iconName: 'Rocket',        title: 'Stack moderno',    body: 'Next.js, TypeScript, Vercel. No WordPress lento ni temas anticuados que se quiebran.' },
  { iconName: 'MessageSquare', title: 'Atención directa', body: 'Hablas con quien construye. Sin vendedores, sin filtros, sin formularios que se pierden.' },
]

// ===== Services (9) =====
export const SERVICES: Service[] = [
  { id: 'landing',     name: 'Landing Page',             description: 'Páginas diseñadas para convertir visitantes en clientes',             startingPrice: 'desde $150.000 CLP',  iconName: 'LayoutTemplate' },
  { id: 'corporate',   name: 'Sitio Corporativo',        description: 'Presencia web profesional para tu empresa o negocio',                 startingPrice: 'desde $280.000 CLP',  iconName: 'Building2' },
  { id: 'ecommerce',   name: 'Tienda Online',            description: 'E-commerce con carrito, pagos WebPay y gestión de productos',         startingPrice: 'desde $550.000 CLP',  iconName: 'ShoppingBag' },
  { id: 'software',    name: 'Software a Medida',        description: 'Aplicaciones web personalizadas para resolver problemas reales',       startingPrice: 'desde $800.000 CLP',  iconName: 'Code2' },
  { id: 'automation',  name: 'Automatización IA',        description: 'Chatbots, flujos automáticos e IA para tu negocio',                   startingPrice: 'desde $400.000 CLP',  iconName: 'Bot' },
  { id: 'maintenance', name: 'Mantención Mensual',       description: 'Hosting, cambios y soporte continuo para que duermas tranquilo',      startingPrice: 'desde $25.000 / mes', iconName: 'Wrench' },
  { id: 'seo',         name: 'SEO + Google Business',   description: 'Aparece primero en Google con tu ficha y posicionamiento local',       startingPrice: 'desde $180.000 CLP',  iconName: 'Search' },
  { id: 'migration',   name: 'Optimización / Migración', description: 'Sacamos tu sitio de WordPress lento a algo rápido y moderno',         startingPrice: 'desde $200.000 CLP',  iconName: 'Rocket' },
  { id: 'consulting',  name: 'Consultoría Técnica',      description: 'Hora de asesoría para revisar arquitectura, performance o roadmap',    startingPrice: '$25.000 / hora',      iconName: 'Lightbulb' },
]

export const SERVICE_LABELS: Record<string, string> = {
  landing:     'Landing Page',
  corporate:   'Sitio Corporativo',
  ecommerce:   'Tienda Online',
  software:    'Software a Medida',
  automation:  'Automatización IA',
  maintenance: 'Mantención',
  seo:         'SEO',
  migration:   'Migración',
  consulting:  'Consultoría',
}

// ===== Steps =====
export const STEPS: Step[] = [
  { number: '01', title: 'Cuéntanos tu idea',    description: 'Contáctanos por WhatsApp o completa el cotizador en menos de un minuto.' },
  { number: '02', title: 'Recibe tu propuesta',  description: 'En menos de 24 horas tienes una cotización detallada, sin costo y sin compromiso.' },
  { number: '03', title: 'Lanzamos tu proyecto', description: 'Desarrollo ágil, revisiones incluidas y entrega en los plazos acordados.' },
]

// ===== Projects =====
export const PROJECTS: Project[] = [
  {
    id: 'tajtaj',
    name: 'Transportes TajTaj',
    client: 'Empresa de carga pesada',
    type: 'corporate',
    description: 'Sitio corporativo profesional para empresa de transporte de carga pesada. Catálogo de servicios, flota y contacto integrado.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    url: 'https://transportestajtaj.com',
    bgColor: '#FEF3C7',
    accent: '#D97706',
    featured: true,
  },
  { id: 'placeholder-1', name: 'Próximo proyecto', client: '', type: 'landing',    description: '', technologies: [], bgColor: '#DBEAFE', visible: false },
  { id: 'placeholder-2', name: 'Próximo proyecto', client: '', type: 'ecommerce',  description: '', technologies: [], bgColor: '#DCFCE7', visible: false },
  { id: 'placeholder-3', name: 'Próximo proyecto', client: '', type: 'software',   description: '', technologies: [], bgColor: '#F3E8FF', visible: false },
  { id: 'placeholder-4', name: 'Próximo proyecto', client: '', type: 'automation', description: '', technologies: [], bgColor: '#FFE4E6', visible: false },
]

// ===== Pricing tabs =====
export const PRICING_TABS: PricingTab[] = [
  { id: 'landing', label: 'Landing Page', plans: [
    { name: 'Plan Básico',   price: '$150.000', priceNumeric: 150000, features: ['1 página completa y responsiva', 'Formulario de contacto integrado', 'Dominio y hosting primer año', 'Entrega en 5 días hábiles', '1 ronda de revisiones'] },
    { name: 'Plan Estándar', price: '$220.000', priceNumeric: 220000, popular: true, features: ['Todo lo del plan básico', 'Hasta 3 secciones personalizadas', 'Animaciones y efectos visuales', 'Integración Google Analytics', 'SEO básico optimizado', 'Entrega en 7 días hábiles', '2 rondas de revisiones'] },
    { name: 'Plan Premium',  price: '$320.000', priceNumeric: 320000, features: ['Todo lo del plan estándar', 'Blog integrado', 'Optimización avanzada de velocidad', 'Integración con redes sociales', 'Soporte técnico 30 días post-entrega', '3 rondas de revisiones'] },
  ]},
  { id: 'corporate', label: 'Sitio Corporativo', plans: [
    { name: 'Plan Básico',   price: '$280.000', priceNumeric: 280000, features: ['Hasta 5 páginas', 'Diseño responsivo profesional', 'Formulario de contacto', 'SEO básico', 'Entrega en 10 días hábiles'] },
    { name: 'Plan Estándar', price: '$420.000', priceNumeric: 420000, popular: true, features: ['Hasta 8 páginas', 'Panel para editar contenido', 'Blog integrado', 'Google Maps y redes sociales', 'Google Analytics', 'Entrega en 14 días hábiles'] },
    { name: 'Plan Premium',  price: '$620.000', priceNumeric: 620000, features: ['Páginas ilimitadas', 'Todo lo del plan estándar', 'Chat en vivo integrado', 'Diseño 100% a medida', 'Soporte técnico 60 días'] },
  ]},
  { id: 'ecommerce', label: 'Tienda Online', plans: [
    { name: 'Plan Básico',   price: '$550.000',   priceNumeric: 550000,  features: ['Hasta 50 productos', 'Carrito de compras', 'WebPay Plus (Transbank)', 'Panel de inventario', 'Entrega en 15 días hábiles'] },
    { name: 'Plan Estándar', price: '$850.000',   priceNumeric: 850000,  popular: true, features: ['Hasta 200 productos', 'Todo lo del plan básico', 'Cupones y descuentos', 'Seguimiento de pedidos', 'Integración con redes sociales', 'Reportes de ventas básicos', 'Entrega en 20 días hábiles'] },
    { name: 'Plan Premium',  price: '$1.300.000', priceNumeric: 1300000, features: ['Productos ilimitados', 'Todo lo del plan estándar', 'Múltiples métodos de pago', 'Reseñas de productos', 'Dashboard de analytics avanzado', 'Soporte técnico 90 días'] },
  ]},
  { id: 'software', label: 'Software a Medida', plans: [
    { name: 'Plan Básico',   price: '$800.000',   priceNumeric: 800000,  features: ['Sistema web con hasta 3 módulos', 'Autenticación de usuarios', 'Base de datos incluida', 'Panel de administración básico', 'Documentación de uso'] },
    { name: 'Plan Estándar', price: '$1.400.000', priceNumeric: 1400000, popular: true, features: ['Hasta 6 módulos', 'Roles y permisos avanzados', 'Reportes y estadísticas', 'API propia documentada', 'Integración con servicios externos', 'Soporte técnico 60 días'] },
    { name: 'Plan Premium',  price: 'Cotización personalizada', customQuote: true, features: ['Proyectos de alta complejidad', 'Arquitectura escalable', 'Integraciones empresariales', 'Soporte dedicado'] },
  ]},
  { id: 'automation', label: 'Automatización IA', plans: [
    { name: 'Plan Básico',   price: '$400.000',   priceNumeric: 400000,  features: ['Chatbot para WhatsApp Business', 'Respuestas a preguntas frecuentes', 'Configuración con info de tu negocio', 'Entrega en 7 días hábiles'] },
    { name: 'Plan Estándar', price: '$700.000',   priceNumeric: 700000,  popular: true, features: ['Chatbot avanzado con IA', 'Integración con tu sistema o CRM', 'Flujos personalizados', 'Panel de seguimiento', 'Entrega en 12 días hábiles'] },
    { name: 'Plan Premium',  price: '$1.200.000', priceNumeric: 1200000, features: ['Sistema completo de automatización', 'WhatsApp + email + web', 'Flujos de trabajo automáticos', 'Reportes y métricas', 'Soporte técnico 60 días'] },
  ]},
]

// ===== Maintenance plans =====
export const MAINTENANCE_PLANS: MaintPlan[] = [
  { name: 'Básico',   priceNumeric: 25000,  features: ['Hosting + dominio incluidos', '1 hora de cambios al mes', 'Backup semanal automático', 'Reporte mensual de uptime', 'Soporte por WhatsApp en horario'] },
  { name: 'Estándar', priceNumeric: 55000,  popular: true, features: ['Todo lo del básico', '3 horas de cambios al mes', 'Soporte WhatsApp prioritario', 'Actualizaciones de seguridad', 'Reporte detallado mensual'] },
  { name: 'Pro',      priceNumeric: 110000, features: ['Todo lo del estándar', '8 horas de cambios al mes', 'Respuesta en menos de 4 horas', 'Optimización SEO mensual', 'Reunión estratégica mensual'] },
]

// ===== Add-ons (for Cotizador summary) =====
export const ADDONS: Addon[] = [
  { id: 'maintenance-basic', label: 'Mantención mensual Básico', sub: 'Hosting + 1h cambios + backups', priceNumeric: 25000,  recurring: true },
  { id: 'seo',               label: 'SEO + Google Business',     sub: 'Setup inicial + ficha local',    priceNumeric: 180000, recurring: false },
  { id: 'migration',         label: 'Migración desde WordPress', sub: 'Te sacamos del CMS lento',       priceNumeric: 200000, recurring: false },
  { id: 'analytics',         label: 'Google Analytics + GTM',    sub: 'Setup + dashboard inicial',       priceNumeric: 90000,  recurring: false },
  { id: 'training',          label: 'Capacitación de tu equipo', sub: '2 sesiones de 1 hora',            priceNumeric: 80000,  recurring: false },
]

// ===== FAQ tabs =====
export const FAQ_TABS: FaqTab[] = [
  { id: 'general', label: 'General', items: [
    { q: '¿Cuánto demora mi proyecto?',          a: 'Depende del tipo. Una landing toma 5 a 7 días hábiles, un sitio corporativo 10 a 14 días, y proyectos más complejos se acuerdan en la cotización.' },
    { q: '¿Cómo son los pagos?',                 a: 'Trabajamos con 50% al inicio y 50% contra entrega. Aceptamos transferencia bancaria y MercadoPago Link. Emitimos boleta de honorarios.' },
    { q: '¿El sitio web me pertenece a mí?',     a: 'Sí, 100%. Una vez pagada la entrega final, todos los archivos, código y dominio son completamente tuyos.' },
    { q: '¿Trabajan con empresas de todo Chile?', a: 'Sí. Trabajamos de forma 100% remota desde Valparaíso para clientes en todo el país. Atención de 10:00 a 22:00 hrs.' },
    { q: '¿Qué necesito para empezar?',          a: 'Solo contáctanos con tu idea. Te guiamos desde el dominio hasta el lanzamiento.' },
    { q: '¿Mi sitio va a funcionar bien en celulares?', a: 'Todos nuestros proyectos son mobile-first: diseñados primero para celular y luego para escritorio.' },
  ]},
  { id: 'landing', label: 'Landing Page', items: [
    { q: '¿Qué es exactamente una landing page?', a: 'Una página única, larga y con un solo objetivo: convertir visitantes en clientes, contactos o ventas. Ideal para campañas, lanzamientos o servicios específicos.' },
    { q: '¿Puedo agregar más páginas después?',   a: 'Sí. Cualquier landing puede crecer a un sitio corporativo más adelante; solo pagas la diferencia.' },
    { q: '¿Incluye dominio y hosting?',           a: 'El primer año está incluido. Después renuevas directamente o tomas un plan de mantención.' },
    { q: '¿Cuántos cambios puedo pedir?',         a: 'Depende del plan: 1, 2 o 3 rondas de revisiones durante el desarrollo. Cambios después de la entrega se coordinan por hora.' },
  ]},
  { id: 'corporate', label: 'Sitio Corporativo', items: [
    { q: '¿Puedo editar contenido sin saber código?', a: 'Sí, desde el plan Estándar incluimos un panel simple para que actualices textos e imágenes sin tocar código.' },
    { q: '¿Hacen blog integrado?',                    a: 'Sí, viene desde el plan Estándar con categorías, autor y SEO básico.' },
    { q: '¿Pueden integrar Google Maps y formularios?', a: 'Sí, está incluido. También integramos redes sociales, Calendly, chat en vivo, etc.' },
    { q: '¿Cuántas páginas máximo?',                  a: 'Básico hasta 5, Estándar hasta 8, Premium ilimitadas.' },
  ]},
  { id: 'ecommerce', label: 'Tienda Online', items: [
    { q: '¿Qué pasarela de pago usan?',   a: 'WebPay Plus de Transbank por defecto. También integramos MercadoPago, Stripe o Khipu según el caso.' },
    { q: '¿Puedo subir mis productos solo?', a: 'Sí. Te entregamos el panel y una capacitación para que cargues, edites y publiques sin depender de nosotros.' },
    { q: '¿Cómo manejan stock y envíos?', a: 'Panel de inventario incluido. Para envíos integramos con Chilexpress, Starken o tu propio sistema.' },
    { q: '¿Sirve para boletas electrónicas?', a: 'Sí, integramos con OpenFactura, Bsale u otro emisor según prefieras.' },
  ]},
  { id: 'software', label: 'Software a Medida', items: [
    { q: '¿Qué tipo de software desarrollan?', a: 'Sistemas internos, paneles de gestión, herramientas SaaS, integraciones con APIs externas. Si lo puedes describir, probablemente lo podemos construir.' },
    { q: '¿Cuánto tarda un sistema?',          a: 'Depende de complejidad. Acordamos hitos quincenales y los plazos quedan firmes en la cotización.' },
    { q: '¿Quién es dueño del código?',        a: 'Tú. Te entregamos el repositorio en GitHub y la documentación completa.' },
    { q: '¿Pueden integrar con mi ERP / CRM?', a: 'Sí. Trabajamos con APIs REST, webhooks, y conectores a sistemas comunes (Defontana, Bsale, HubSpot, etc.).' },
  ]},
  { id: 'automation', label: 'Automatización IA', items: [
    { q: '¿Qué hace un chatbot de WhatsApp?',  a: 'Responde preguntas frecuentes 24/7, agenda visitas, califica leads y deriva al humano cuando hace falta.' },
    { q: '¿Usan OpenAI / GPT?',                a: 'Sí, según el plan. El bot puede responder con tu propio contenido como base de conocimiento.' },
    { q: '¿Cuánto tarda en estar listo?',      a: 'Básico 7 días, Estándar 12 días, Premium se acuerda en cotización.' },
    { q: '¿Funciona con WhatsApp Business?',   a: 'Sí. Configuramos la cuenta y la API oficial de Meta.' },
  ]},
  { id: 'maintenance', label: 'Mantención', items: [
    { q: '¿Es obligatorio tomar mantención?',  a: 'No. Te entregamos el sitio listo para que renueves dominio y hosting tú mismo. La mantención es opcional para quienes quieren delegar.' },
    { q: '¿Qué pasa si no uso todas las horas de cambios?', a: 'Acumulan hasta 3 meses, después se reinician. No las cobramos si no las usas.' },
    { q: '¿Pueden tomar mantención de un sitio que no hicieron ustedes?', a: 'Sí, previa revisión técnica. Te decimos si el stack es mantenible o si conviene migrar.' },
  ]},
]

// ===== Wizard options (Cotizador) =====
export const WIZARD_OPTIONS: WizardOptions = {
  servicio:    SERVICES.map((s) => ({ id: s.id, label: s.name })),
  presupuesto: [
    { id: 'under-300', label: 'Hasta $300.000 CLP' },
    { id: '300-700',   label: '$300.000 – $700.000 CLP' },
    { id: '700-1500',  label: '$700.000 – $1.500.000 CLP' },
    { id: 'over-1500', label: 'Más de $1.500.000 CLP' },
    { id: 'not-sure',  label: 'Aún no estoy seguro' },
  ],
  cuando: [
    { id: 'urgente',   label: 'Lo necesito esta semana' },
    { id: '1-mes',     label: 'Este mes' },
    { id: '3-meses',   label: 'En los próximos 3 meses' },
    { id: 'exploring', label: 'Solo estoy explorando opciones' },
  ],
}

// ===== Socials =====
export const SOCIALS: Social[] = [
  { id: 'linkedin',  label: 'LinkedIn',  href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'tiktok',    label: 'TikTok',    href: '#' },
]
