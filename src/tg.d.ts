interface TelegramWebApp {
	expand: () => void
	viewportHeight: number
	onEvent: (event: string, callback: () => void) => void
	offEvent: (event: string, callback: () => void) => void
}

interface Window {
	Telegram: {
		WebApp: TelegramWebApp
	}
}
