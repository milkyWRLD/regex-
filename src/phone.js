export default function cleanPhoneNumber(phoneNumber) {
	const cleaned = phoneNumber.replace(/\D/g, '')
	if (cleaned.length === 11 && cleaned.startsWith('8')) {
		return `+7${cleaned.slice(1)}`
	}
	return `+${cleaned}`
}
