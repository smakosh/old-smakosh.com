export const onServiceWorkerUpdateFound = () => {
	const showNotification = () => {
		Notification.requestPermission(result => {
			if (result === 'granted') {
				navigator.serviceWorker.ready.then(registration => {
					/* this.addEventListener('notificationclick', e => {
						e.notification.close()

						if (e.action === 'reload') {
							clients.openWindow('https://smakosh.com/')
						} else {
							clients.openWindow('https://smakosh.com/')
						}
					}, false) */

					registration.showNotification('Update', {
						body: 'New content is available!',
						icon: '/favicon/logo-192x192.png',
						vibrate: [100, 50, 100],
						tag: 'request',
						actions: [
							{
								action: e => {
									e.notification.close()

									if (e.action === 'reload') {
										clients.openWindow('https://smakosh.com/')
									} else {
										clients.openWindow('https://smakosh.com/')
									}
								},
								title: 'reload'
							}
						]
					})
				})
			}
		})
	}

	showNotification()
}
