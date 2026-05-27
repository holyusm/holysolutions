export type ServiceType =
  | 'landing'
  | 'corporate'
  | 'ecommerce'
  | 'software'
  | 'automation'
  | 'maintenance'
  | 'seo'
  | 'migration'
  | 'consulting'

export interface NavLink {
  label: string
  href: string
}

export interface Social {
  id: string
  label: string
  href: string
}

export interface Service {
  id: string
  name: string
  description: string
  startingPrice: string
  iconName: string
}

export interface PorQueItem {
  iconName: string
  title: string
  body: string
}

export interface PricingFeature {
  text: string
}

export interface PricingPlan {
  name: string
  price: string
  priceNumeric?: number
  features: string[]
  popular?: boolean
  customQuote?: boolean
}

export interface PricingTab {
  id: ServiceType
  label: string
  plans: PricingPlan[]
}

export interface MaintPlan {
  name: string
  priceNumeric: number
  features: string[]
  popular?: boolean
}

export interface Addon {
  id: string
  label: string
  sub: string
  priceNumeric: number
  recurring: boolean
}

export interface Project {
  id: string
  name: string
  client: string
  type: ServiceType
  description: string
  technologies: string[]
  bgColor: string
  url?: string
  accent?: string
  featured?: boolean
  visible?: boolean
}

export interface FaqTabItem {
  q: string
  a: string
}

export interface FaqTab {
  id: string
  label: string
  items: FaqTabItem[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface WizardOption {
  id: string
  label: string
}

export interface WizardOptions {
  servicio: WizardOption[]
  presupuesto: WizardOption[]
  cuando: WizardOption[]
}

export interface QuoteFormData {
  serviceType: ServiceType | 'unsure'
  businessName: string
  businessDescription: string
  deadline: 'asap' | '1month' | '2-3months' | 'noRush'
  reference?: string
  contactName: string
  contactPhone: string
}
