import type { FaqItem, PricingTab, Project, Service, Step } from '@/types'

export const WHATSAPP_NUMBER = '56900000000'
export const WHATSAPP_DISPLAY = '+56 9 0000 0000'
export const SITE_URL = 'https://holysolutions.cl'

export const LAUNCH_OFFER = {
  active: true,
  discount: 0.25,
  spotsTotal: 5,
  validUntil: '31 de julio 2026',
  label: 'Oferta de lanzamiento',
}

export function getDiscountedPrice(priceNumeric: number): string {
  const discounted = Math.round(priceNumeric * (1 - LAUNCH_OFFER.discount))
  return formatCLP(discounted)
}

export function formatCLP(amount: number): string {
  return '$' + amount.toLocaleString('es-CL')
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
  const message = `Hola, me interesa el ${planName} de ${serviceType} por ${priceText}. ¿Podemos coordinar?`
  return buildWhatsAppUrl(message)
}

export const SERVICES: Service[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Páginas diseñadas para convertir visitantes en clientes',
    startingPrice: '$150.000 CLP',
    iconName: 'LayoutTemplate',
  },
  {
    id: 'corporate',
    name: 'Sitio Corporativo',
    description: 'Presencia web profesional para tu empresa o negocio',
    startingPrice: '$280.000 CLP',
    iconName: 'Building2',
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online',
    description: 'E-commerce con carrito, pagos WebPay y gestión de productos',
    startingPrice: '$550.000 CLP',
    iconName: 'ShoppingBag',
  },
  {
    id: 'software',
    name: 'Software a Medida',
    description: 'Aplicaciones web personalizadas para resolver problemas reales',
    startingPrice: '$800.000 CLP',
    iconName: 'Code2',
  },
  {
    id: 'automation',
    name: 'Automatización con IA',
    description: 'Chatbots, flujos automáticos e inteligencia artificial para tu negocio',
    startingPrice: '$400.000 CLP',
    iconName: 'Bot',
  },
]

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Contáctanos por WhatsApp o completa el cotizador',
  },
  {
    number: '02',
    title: 'Recibe tu propuesta',
    description: 'En menos de 24 horas tienes una cotización detallada sin costo',
  },
  {
    number: '03',
    title: 'Lanzamos tu proyecto',
    description: 'Desarrollo ágil, revisiones incluidas y entrega en los plazos acordados',
  },
]

export const PRICING_TABS: PricingTab[] = [
  {
    id: 'landing',
    label: 'Landing Page',
    plans: [
      {
        name: 'Plan Básico',
        price: '$150.000',
        priceNumeric: 150000,
        features: [
          '1 página completa y responsiva',
          'Formulario de contacto integrado',
          'Dominio y hosting primer año incluido',
          'Entrega en 5 días hábiles',
          '1 ronda de revisiones',
        ],
      },
      {
        name: 'Plan Estándar',
        price: '$220.000',
        priceNumeric: 220000,
        popular: true,
        features: [
          'Todo lo del plan básico',
          'Hasta 3 secciones personalizadas',
          'Animaciones y efectos visuales',
          'Integración Google Analytics',
          'SEO básico optimizado',
          'Entrega en 7 días hábiles',
          '2 rondas de revisiones',
        ],
      },
      {
        name: 'Plan Premium',
        price: '$320.000',
        priceNumeric: 320000,
        features: [
          'Todo lo del plan estándar',
          'Blog integrado',
          'Optimización avanzada de velocidad',
          'Integración con redes sociales',
          'Soporte técnico 30 días post-entrega',
          '3 rondas de revisiones',
        ],
      },
    ],
  },
  {
    id: 'corporate',
    label: 'Sitio Corporativo',
    plans: [
      {
        name: 'Plan Básico',
        price: '$280.000',
        priceNumeric: 280000,
        features: [
          'Hasta 5 páginas',
          'Diseño responsivo profesional',
          'Formulario de contacto',
          'SEO básico',
          'Entrega en 10 días hábiles',
        ],
      },
      {
        name: 'Plan Estándar',
        price: '$420.000',
        priceNumeric: 420000,
        popular: true,
        features: [
          'Hasta 8 páginas',
          'Panel para editar contenido (sin código)',
          'Blog integrado',
          'Integración Google Maps y redes sociales',
          'Google Analytics',
          'Entrega en 14 días hábiles',
        ],
      },
      {
        name: 'Plan Premium',
        price: '$620.000',
        priceNumeric: 620000,
        features: [
          'Páginas ilimitadas',
          'Todo lo del plan estándar',
          'Chat en vivo integrado',
          'Diseño 100% a medida',
          'Soporte técnico 60 días post-entrega',
        ],
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'Tienda Online',
    plans: [
      {
        name: 'Plan Básico',
        price: '$550.000',
        priceNumeric: 550000,
        features: [
          'Hasta 50 productos',
          'Carrito de compras',
          'Pago con WebPay Plus (Transbank)',
          'Panel de administración de inventario',
          'Entrega en 15 días hábiles',
        ],
      },
      {
        name: 'Plan Estándar',
        price: '$850.000',
        priceNumeric: 850000,
        popular: true,
        features: [
          'Hasta 200 productos',
          'Todo lo del plan básico',
          'Cupones y descuentos',
          'Seguimiento de pedidos para clientes',
          'Integración con redes sociales',
          'Reportes de ventas básicos',
          'Entrega en 20 días hábiles',
        ],
      },
      {
        name: 'Plan Premium',
        price: '$1.300.000',
        priceNumeric: 1300000,
        features: [
          'Productos ilimitados',
          'Todo lo del plan estándar',
          'Múltiples métodos de pago',
          'Sistema de reseñas de productos',
          'Dashboard de analytics avanzado',
          'Soporte técnico 90 días post-entrega',
        ],
      },
    ],
  },
  {
    id: 'software',
    label: 'Software a Medida',
    plans: [
      {
        name: 'Plan Básico',
        price: '$800.000',
        priceNumeric: 800000,
        features: [
          'Sistema web con hasta 3 módulos',
          'Autenticación de usuarios',
          'Base de datos incluida',
          'Panel de administración básico',
          'Documentación de uso',
        ],
      },
      {
        name: 'Plan Estándar',
        price: '$1.400.000',
        priceNumeric: 1400000,
        popular: true,
        features: [
          'Hasta 6 módulos',
          'Roles y permisos avanzados',
          'Reportes y estadísticas',
          'API propia documentada',
          'Integración con servicios externos',
          'Soporte técnico 60 días',
        ],
      },
      {
        name: 'Plan Premium',
        price: 'Cotización personalizada',
        customQuote: true,
        features: [
          'Proyectos de alta complejidad',
          'Arquitectura escalable',
          'Integraciones empresariales',
          'Soporte dedicado',
        ],
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automatización IA',
    plans: [
      {
        name: 'Plan Básico',
        price: '$400.000',
        priceNumeric: 400000,
        features: [
          'Chatbot para WhatsApp Business',
          'Respuestas automáticas a preguntas frecuentes',
          'Configuración con la información de tu negocio',
          'Entrega en 7 días hábiles',
        ],
      },
      {
        name: 'Plan Estándar',
        price: '$700.000',
        priceNumeric: 700000,
        popular: true,
        features: [
          'Chatbot avanzado con IA',
          'Integración con tu sistema o CRM',
          'Flujos de conversación personalizados',
          'Panel de seguimiento de conversaciones',
          'Entrega en 12 días hábiles',
        ],
      },
      {
        name: 'Plan Premium',
        price: '$1.200.000',
        priceNumeric: 1200000,
        features: [
          'Sistema completo de automatización',
          'Múltiples canales (WhatsApp + email + web)',
          'Flujos de trabajo automáticos',
          'Reportes y métricas de atención',
          'Soporte técnico 60 días',
        ],
      },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'La Trattoria',
    client: 'Restaurante en Santiago',
    type: 'landing',
    typeLabel: 'Landing Page',
    description: 'Página de reservas y menú para restaurante italiano en Providencia',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    bgColor: '#FEF3C7',
  },
  {
    id: 2,
    name: 'Ferretería Los Andes',
    client: 'Ferretería en Concepción',
    type: 'ecommerce',
    typeLabel: 'Tienda Online',
    description: 'Tienda con más de 500 productos y pago integrado con WebPay',
    technologies: ['Next.js', 'Supabase', 'WebPay', 'Tailwind CSS'],
    bgColor: '#DBEAFE',
  },
  {
    id: 3,
    name: 'Talento RH',
    client: 'Consultora de RRHH',
    type: 'corporate',
    typeLabel: 'Sitio Corporativo',
    description: 'Presencia digital profesional para consultora de recursos humanos',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    bgColor: '#F3E8FF',
  },
  {
    id: 4,
    name: 'ClínicaFlow',
    client: 'Sistema de reservas para clínica',
    type: 'software',
    typeLabel: 'Software a Medida',
    description: 'Sistema de agendamiento y gestión de horas médicas en línea',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    bgColor: '#DCFCE7',
  },
  {
    id: 5,
    name: 'Moda Urbana',
    client: 'Tienda de ropa online',
    type: 'ecommerce',
    typeLabel: 'Tienda Online',
    description: 'E-commerce de moda con catálogo, tallas y sistema de descuentos',
    technologies: ['Next.js', 'Stripe', 'Supabase', 'Cloudinary'],
    bgColor: '#FFE4E6',
  },
  {
    id: 6,
    name: 'InmoBot',
    client: 'Chatbot para inmobiliaria',
    type: 'automation',
    typeLabel: 'Automatización IA',
    description: 'Asistente virtual que responde consultas y agenda visitas automáticamente',
    technologies: ['OpenAI', 'WhatsApp API', 'Next.js', 'Supabase'],
    bgColor: '#FEF9C3',
  },
  {
    id: 7,
    name: 'Panadería Don Pedro',
    client: 'Panadería artesanal en Valparaíso',
    type: 'landing',
    typeLabel: 'Landing Page',
    description: 'Página de presentación con pedidos por WhatsApp integrado',
    technologies: ['Next.js', 'Tailwind CSS'],
    bgColor: '#FFEDD5',
  },
  {
    id: 8,
    name: 'Constructora Vega',
    client: 'Constructora en La Serena',
    type: 'corporate',
    typeLabel: 'Sitio Corporativo',
    description: 'Sitio con portafolio de proyectos y formulario de contacto',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    bgColor: '#E0F2FE',
  },
  {
    id: 9,
    name: 'MediStock',
    client: 'Farmacia en Puerto Montt',
    type: 'ecommerce',
    typeLabel: 'Tienda Online',
    description: 'Tienda online de productos farmacéuticos con receta digital',
    technologies: ['Next.js', 'Supabase', 'WebPay', 'Tailwind CSS'],
    bgColor: '#D1FAE5',
  },
  {
    id: 10,
    name: 'LegalTrack',
    client: 'Estudio jurídico en Santiago',
    type: 'software',
    typeLabel: 'Software a Medida',
    description: 'Sistema de gestión de casos y documentos para abogados',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'PDF.js'],
    bgColor: '#EDE9FE',
  },
  {
    id: 11,
    name: 'TurBoost',
    client: 'Agencia de turismo en Pucón',
    type: 'landing',
    typeLabel: 'Landing Page',
    description: 'Landing con catálogo de tours y cotización por WhatsApp',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    bgColor: '#CFFAFE',
  },
  {
    id: 12,
    name: 'AutoRespuesta',
    client: 'Concesionaria en Temuco',
    type: 'automation',
    typeLabel: 'Automatización IA',
    description: 'Bot de atención al cliente para consultas sobre vehículos en stock',
    technologies: ['OpenAI', 'WhatsApp API', 'Supabase'],
    bgColor: '#FEE2E2',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cuánto demora mi proyecto?',
    answer:
      'Depende del tipo. Una landing page toma 5-7 días hábiles, un sitio corporativo 10-14 días, y proyectos más complejos se acuerdan en la cotización.',
  },
  {
    question: '¿Cómo son los pagos?',
    answer:
      'Trabajamos con 50% al inicio del proyecto y 50% contra entrega. Aceptamos transferencia bancaria.',
  },
  {
    question: '¿El sitio web me pertenece a mí?',
    answer:
      'Sí, 100%. Una vez entregado, todos los archivos, código y dominio son completamente tuyos.',
  },
  {
    question: '¿Puedo pedir cambios después de la entrega?',
    answer:
      'Cada plan incluye rondas de revisiones durante el desarrollo. Cambios post-entrega se pueden coordinar con un valor adicional.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo contáctarnos con tu idea. Nosotros te guiamos en cada paso, desde el dominio hasta el lanzamiento.',
  },
  {
    question: '¿Trabajan con empresas de todo Chile?',
    answer:
      'Sí, trabajamos de forma 100% remota con clientes en todo el país.',
  },
  {
    question: '¿Mi sitio va a funcionar bien en celulares?',
    answer:
      'Todos nuestros proyectos son mobile-first, es decir, diseñados primero para celular y luego para escritorio.',
  },
  {
    question: '¿Qué pasa si tengo un problema después de la entrega?',
    answer:
      'Los planes con soporte post-entrega incluyen atención directa por WhatsApp para resolver cualquier problema técnico.',
  },
]
