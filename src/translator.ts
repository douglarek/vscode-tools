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

export async function youdaoTranslate(text: string): Promise<string> {
    const options = {
        uri: 'http://fanyi.youdao.com/openapi.do',
        qs: {
            keyfrom: 'YouDaoCV',
            key: '659600698',
            type: 'data',
            doctype: 'json',
            version: '1.1',
            q: text
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return request(options).then(function (response) {
        return response.basic.explains.join(" ;");
    }).catch(function (error) {
        console.log(error)
    });
}