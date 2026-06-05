const CACHE_NAME = 'stronger-app-v1'
const scopeUrl = new URL(self.registration.scope)
const scopePath = scopeUrl.pathname.endsWith('/') ? scopeUrl.pathname : `${scopeUrl.pathname}/`
const appShellFiles = [
  scopePath,
  `${scopePath}favicon.svg`,
  `${scopePath}manifest.webmanifest`,
  `${scopePath}pwa-icon-192.png`,
  `${scopePath}pwa-icon-512.png`,
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(appShellFiles))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }

  const requestUrl = new URL(request.url)

  if (requestUrl.origin !== self.location.origin || !requestUrl.pathname.startsWith(scopePath)) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseCopy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(scopePath, responseCopy))
          return response
        })
        .catch(() => caches.match(scopePath)),
    )
    return
  }

  if (!['script', 'style', 'image', 'font', 'manifest'].includes(request.destination)) {
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }

      return fetch(request).then((response) => {
        if (response.ok) {
          const responseCopy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseCopy))
        }

        return response
      })
    }),
  )
})
