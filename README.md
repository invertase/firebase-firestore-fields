<p align="center">
  <a href="https://invertase.io">
    <img src="https://static.invertase.io/assets/invertase-logo-small.png"><br/>
  </a>
  <h2 align="center">Firebase Firestore Fields</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/firebase-firestore-fields"><img src="https://img.shields.io/npm/dm/firebase-firestore-fields.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/firebase-firestore-fields"><img src="https://img.shields.io/npm/v/firebase-firestore-fields.svg?style=flat-square" alt="NPM version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/firebase-firestore-fields.svg?style=flat-square" alt="License"></a>
  <a href="https://discord.gg/C9aK28N"><img src="https://img.shields.io/discord/295953187817521152.svg?logo=discord&style=flat-square&colorA=7289da&label=discord" alt="Chat"></a>
  <a href="https://twitter.com/invertaseio"><img src="https://img.shields.io/twitter/follow/invertaseio.svg?style=social&label=Follow" alt="Follow on Twitter"></a>
</p>


Converts [Cloud Firestore REST field values](https://firebase.google.com/docs/firestore/reference/rest/v1beta1/Value) into a usable format. Handles nested objects and arrays.

## Usage

```
npm install --save firebase-firestore-fields
```

```js
const convert = require('firebase-firestore-fields');

// typical response from a Cloud Firestore REST endpoint
const response = {
  name: 'projects/testproject/databases/(default)/documents/config/2L3sczWg8vZhIZDVgLh5',
  fields: {
    title: {
      stringValue: 'Super cool app!',
    },
    theme: {
      mapValue: {
        fields: {
          backgroundColor: {
            stringValue: '#000000',
          },
        },
      },
    },
    appEnabled: {
      booleanValue: true,
    },
  },
  createTime: '2017-11-24T10:00:12.419673Z',
  updateTime: '2017-11-24T10:58:15.600296Z',
};

// convert the response fields into a usable format
const converted = convert(response.fields);

console.dir(converted);
// OUTPUT:
// {
//   title: "Super cool app!",
//   theme: {
//     backgroundColor: "#000000"
//   },
//   appEnabled: true,
// }
```

### Differences

#### integerValue

Returns a type `Number` (Cloud Firestore returns it as a `string`).

#### geoPointValue

Returns the latitude & longitude points as an array pair: `[latitude, longitude]`.

## License

- See [LICENSE](/LICENSE)

---

Built and maintained with 💛 by [Invertase](https://invertase.io).

- [💼 Hire Us](https://invertase.io/hire-us)
- [☕️ Sponsor Us](https://opencollective.com/react-native-firebase)
- [👩‍💻 Work With Us](https://invertase.io/jobs)

