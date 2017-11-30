# firebase-firestore-fields

<a href="https://www.npmjs.com/package/firebase-firestore-fields"><img src="https://img.shields.io/npm/v/firebase-firestore-fields.svg?style=flat-square" alt="NPM version"></a>
<a href="/LICENSE"><img src="https://img.shields.io/npm/l/firebase-firestore-fields.svg?style=flat-square" alt="License"></a>
<a href="https://discord.gg/t6bdqMs"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?style=flat-square" alt="Chat"></a>

Convert the [Cloud Firestore REST field values](https://firebase.google.com/docs/firestore/reference/rest/v1beta1/Value) into a usable format. Handles nested objects and arrays.

## Usage

```
npm install --save firebase-firestore-fields
```

```js
const convert = require('firebase-firestore-fields');

// typical response from a Cloud Firestore REST endpoint
const response = {
    name: "projects/testproject/databases/(default)/documents/config/2L3sczWg8vZhIZDVgLh5",
    fields: {
        title: {
            stringValue: "Super cool app!"
        },
        theme: {
            mapValue: {
                fields: {
                    backgroundColor: {
                        stringValue: "#000000"
                    }
                }
            }
        },
        appEnabled: {
            booleanValue: true,
        },
    },
    createTime: "2017-11-24T10:00:12.419673Z",
    updateTime: "2017-11-24T10:58:15.600296Z"
}

// convert the response fields into a usable format
const converted = convert(response.fields);

{
    title: "Super cool app!",
    theme: {
        backgroundColor: "#000000"
    },
    appEnabled: true,
}
```

### Differences

#### integerValue

Returns a type `Number` (Cloud Firestore returns it as a `string`).

#### geoPointValue

Returns the latitude & longitude points as an array: `[latitude, longitude]`.

## License

- See [LICENSE](/LICENSE)
