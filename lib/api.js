export const sendContactForm = async (data) => {
    try {
        const response = await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                Accept: "application/json",

            }
        })

        if (response.status === 200) {
            return { status: 1, resp: response }
        }
        return { status: 2, resp: response }
    }
    catch (error) {
        return { status: 3, resp: response }
    }


}