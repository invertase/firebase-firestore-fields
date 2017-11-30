const assert = require('assert');
const pkg = require('../index');


describe('firebase-firestore-fields', function () {

    describe('timestampValue', function () {
        it('should return a string value', function () {
            const fields = { foo: { 'timestampValue': '2017-11-22T00:00:00Z' } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: '2017-11-22T00:00:00Z',
            });
        });
    });

    describe('booleanValue', function () {
        it('should return a boolean value', function () {
            const fields = { foo: { 'booleanValue': false } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: false,
            });
        });
    });

    describe('geoPointValue', function () {
        it('should return a array value', function () {
            const fields = {
                foo: {
                    'geoPointValue': {
                        'latitude': 1,
                        'longitude': -1.2,
                    }
                }
            };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: [1, -1.2],
            });
        });
    });

    describe('stringValue', function () {
        it('should return a string value', function () {
            const fields = { foo: { 'stringValue': 'bar' } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: 'bar',
            });
        });
    });

    describe('referenceValue', function () {
        it('should return a string value', function () {
            const ref = 'projects/foobar/databases/(default)/documents';
            const fields = { foo: { 'referenceValue': ref } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: ref,
            });
        });
    });

    describe('arrayValue', function () {
        it('should return a array of correct values', function () {
            const fields = {
                foo: {
                    arrayValue: {
                        values: [
                            {
                                "stringValue": "234"
                            },
                            {
                                "geoPointValue": {
                                    "latitude": 1.111,
                                    "longitude": 1.112,
                                }
                            }
                        ]
                    }
                }
            };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: ['234', [1.111, 1.112]],
            });
        });
    });

    describe('nullValue', function () {
        it('should return a null value', function () {
            const fields = { foo: { 'nullValue': null } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: null,
            });
        });
    });

    describe('integerValue', function () {
        it('should return a number value', function () {
            const fields = { foo: { 'integerValue': '123' } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: 123,
            });
        });
    });

    describe('doubleValue', function () {
        it('should return a number value', function () {
            const fields = { foo: { doubleValue: 13.37000 } };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: 13.37000,
            });
        });
    });

    describe('mapValue', function () {
        it('should return a object value', function () {
            const fields = {
                foo: {
                    mapValue: {
                        fields: {
                            string: {
                                stringValue: 'foobar'
                            },
                            nested: {
                                mapValue: {
                                    fields: {
                                        number: {
                                            integerValue: '234'
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            };
            const res = pkg(fields);
            assert.deepEqual(res, {
                foo: {
                    string: 'foobar',
                    nested: {
                      number: 234,
                    },
                },
            });
        });
    });
});
