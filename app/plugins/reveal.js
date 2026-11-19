// v-reveal: fades and lifts an element into place the first time it enters the viewport.
// The server renders the attribute only. The client hides elements only when motion is allowed,
// so content stays visible without JavaScript or with reduced motion.
export default defineNuxtPlugin((nuxtApp) => {
  let observer = null

  function getObserver() {
    if (observer) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    return observer
  }

  function motionAllowed() {
    return (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }

  if (import.meta.client && motionAllowed()) {
    document.documentElement.classList.add('reveal-ready')
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding) {
      return {
        'data-reveal': '',
        style:
          binding.value !== undefined ? `--reveal-delay: ${binding.value}` : '',
      }
    },
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value !== undefined)
        el.style.setProperty('--reveal-delay', binding.value)
      if (!motionAllowed()) {
        el.classList.add('is-revealed')
        return
      }
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        requestAnimationFrame(() => el.classList.add('is-revealed'))
        return
      }
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
