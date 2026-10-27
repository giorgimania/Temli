declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const PHONE_DISPLAY = '(289) 633-7648'
export const PHONE_HREF = 'tel:289-633-7648'

export function trackCallConversion() {
  window.gtag?.('event', 'conversion', { send_to: 'AW-18240008778/DacDCLmgqs0cEMrkwflD' })
}

export function trackQuoteConversion() {
  window.gtag?.('event', 'conversion', { send_to: 'AW-18240008778/Xe57CLagqs0cEMrkwflD' })
}
