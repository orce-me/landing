export function useTheme() {
  const dark = ref(false)
  let running = false
  let systemTheme

  function applyTheme(theme, persist = false) {
    document.documentElement.dataset.theme = theme
    dark.value = theme === 'dark'
    document.querySelector('meta[name="theme-color"]').content = dark.value
      ? '#101c17'
      : '#174c3c'
    if (persist) {
      try {
        localStorage.setItem('orce-theme', theme)
      } catch {}
    }
  }

  function onSystemChange(event) {
    try {
      if (localStorage.getItem('orce-theme')) return
    } catch {}
    applyTheme(event.matches ? 'dark' : 'light')
  }

  onMounted(() => {
    applyTheme(document.documentElement.dataset.theme || 'light')
    systemTheme = matchMedia('(prefers-color-scheme: dark)')
    systemTheme.addEventListener('change', onSystemChange)
  })
  onBeforeUnmount(() =>
    systemTheme?.removeEventListener('change', onSystemChange),
  )

  async function toggle(event) {
    if (running) return
    const theme = dark.value ? 'light' : 'dark'
    if (
      !document.startViewTransition ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme(theme, true)
      return
    }
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.detail ? event.clientX : rect.left + rect.width / 2
    const y = event.detail ? event.clientY : rect.top + rect.height / 2
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    running = true
    try {
      const transition = document.startViewTransition(() =>
        applyTheme(theme, true),
      )
      await transition.ready
      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 520,
          easing: 'cubic-bezier(.2,.7,.2,1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
      await Promise.all([animation.finished, transition.finished])
    } catch {
      applyTheme(theme, true)
    } finally {
      running = false
    }
  }

  return { dark, toggle }
}
