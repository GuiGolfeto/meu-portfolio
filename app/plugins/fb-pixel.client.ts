// plugins/fb-pixel.client.ts
export default defineNuxtPlugin(() => {
    const PIXEL_ID = '700882859115530'

    // Carrega o fbq uma única vez no cliente
    if (import.meta.client && !(window as any).fbq) {
        (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
            if (f.fbq) return
            n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }
            if (!f._fbq) f._fbq = n
            n.push = n
            n.loaded = !0
            n.version = '2.0'
            n.queue = []
            t = b.createElement(e)
            t.async = !0
            t.src = v
            s = b.getElementsByTagName(e)[0]
            s.parentNode.insertBefore(t, s)
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

            ; (window as any).fbq('init', PIXEL_ID)
    }

    // Dispara PageView sempre que a rota mudar (SPA)
    const router = useRouter()
    router.afterEach(() => {
        if (import.meta.client && (window as any).fbq) {
            (window as any).fbq('track', 'PageView')
        }
    })
})
