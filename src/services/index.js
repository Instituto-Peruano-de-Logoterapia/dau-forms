
export class DauService {
    static async callAPI(payload, url) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            return response.json()

        } catch (error) {

            if (error instanceof Error) {
                console.log(`${error.name}: ${error.message}`)
            }

            return null

        }
    }
}