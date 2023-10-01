import axios from 'axios';

const API_KEY = "NDUwYWI3YTktMjM2ZC0000000000000tZTRmNWJjMDcyYjFk";
const ONESIGNAL_APP_ID = "607db1e6-0000-0000-0000-5afa26bdb3b3";
const BASE_URL = "https://onesignal.com/api/v1";

const optionsBuilder = (method, path, body) => {
    return {
        method,
        'url': `${BASE_URL}/${path}`,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${API_KEY}`,
            'accept': 'application/json',
            "Accept-Encoding": "gzip,deflate,compress",
        },
        data: body ? JSON.stringify(body) : null
    };
}

const createNotication = async (data) => {
    const options = optionsBuilder("post", "notifications", data);
    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const body = {
    app_id: ONESIGNAL_APP_ID,
    //included_segments: ['Subscribed Users'],
    include_player_ids: ['68dc9c04-3c13-4a94-9a0f-125458f2defc', '8e022acb-41b3-4f33-9cf2-c8d76260e307'],
    data: {
        foo: 'bar',
    },
    contents: {
        en: 'Sample Push Message',
    },
};
const {id} = await createNotication(body);
console.log(id);