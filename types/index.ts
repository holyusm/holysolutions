export type ServiceType =
  | 'landing'
  | 'corporate'
  | 'ecommerce'
  | 'software'
  | 'automation'

export interface Service {
  id: ServiceType
  name: string
  description: string
  startingPrice: string
  iconName: string
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

export interface Project {
  id: number
  name: string
  client: string
  type: ServiceType
  typeLabel: string
  description: string
  technologies: string[]
  bgColor: string
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

export interface QuoteFormData {
  serviceType: ServiceType | 'unsure'
  businessName: string
  businessDescription: string
  deadline: 'asap' | '1month' | '2-3months' | 'noRush'
  reference?: string
  contactName: string
  contactPhone: string
}
