export default defineNuxtPlugin(() => {
  document.addEventListener(
    'click',
    (e) => {
      try {
        const target = e.target as HTMLElement
        const anchor = target.closest('a')
        $fetch('/api/events', {
          method: 'POST',
          body: {
            type: 'click',
            tag: target.tagName,
            text: (anchor ?? target).textContent?.trim().slice(0, 100) ?? '',
            href: anchor?.getAttribute('href') ?? '',
            path: window.location.pathname,
            x: e.clientX,
            y: e.clientY,
            timestamp: new Date().toISOString(),
          },
        }).catch(() => {})
      } catch {
        // never affect UX
      }
    },
    { capture: true },
  )
})
