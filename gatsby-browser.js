export const onServiceWorkerUpdateFound = () => {
	const showNotification = () => {
		Notification.requestPermission(result => {
			if (result === 'granted') {
				navigator.serviceWorker.ready.then(registration => {
					registration.showNotification('Update', {
						body: 'New content is available!',
						icon: '/favicon/logo-192x192.png',
						vibrate: [100, 50, 100],
						tag: 'request'
					})
				})
			}
		})
	}

	showNotification()
	setTimeout(() => {
		window.location.reload()
	}, 1000)
}
