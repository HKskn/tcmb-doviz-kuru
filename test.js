/*!
 * tcmb-doviz-kuru <https://github.com/gdoslu/tcmb-doviz-kuru.git>
 *
 * Copyright (c) 2016, Gokhan Doslu.
 * Licensed under the MIT License.
 */

'use strict';

var tcbmDovizKuru = require('./');

function cb(error, data) {
    if (error) {
        console.log('error', error)
    }
    console.log(JSON.stringify(data));
}

tcbmDovizKuru(cb, 'http://www.tcmb.gov.tr/kurlar/200501/17012005.xml');

// FIXME
// describe('tcbmDovizKuru', function () {
//     it('should no errors:', function () {
//
//         assert.deepEqual(errors, []);
//     });
// });