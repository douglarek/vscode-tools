import * as request from "request-promise";

export async function yandexTranslate(text: string): Promise<string> {
    const options = {
        method: 'POST',
        uri: 'https://translate.yandex.net/api/v1/tr.json/translate?id=8370abbc.598d2213.91e9961c-14-0&srv=tr-text&lang=en-zh&reason=auto',
        headers: {
            Pragma: 'no-cache'
        },
        formData: {
            text: text,
            options: 4
        },
        json: true
    };
    try {
        const response = await request(options);
        return Promise.resolve(response['text'][0]);
    }
    catch (error) {
        console.log(error)
    }
}
