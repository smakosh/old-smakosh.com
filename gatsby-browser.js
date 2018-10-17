export const onServiceWorkerUpdateFound = () => {
	const showNotification = () => {
		Notification.requestPermission(result => {
			if (result === 'granted') {
				navigator.serviceWorker.ready.then(registration => {
					registration.showNotification('Update', {
						body: 'New content is available! Reload to see it!',
						icon: '/favicon/logo-192x192.png',
						vibrate: [200, 100, 200, 100, 200, 100, 400],
						tag: 'request'
					})
				})
			}
		})
	}

	showNotification()
}
