var key = 'sessionStorage';
var data = { data: [{ age: 1 }, { age: '2' }] };
var a = new SecureLS({ encodingType: '', isCompression: false, storage: sessionStorage });
ae = a.AES.encrypt(JSON.stringify(data), 's3cr3t@123');
bde = a.AES.decrypt(ae.toString(), 's3cr3t@123');
de = bde.toString(a.enc._Utf8);

a.set(key, data);
console.log('____________________________________');
console.log('sessionStorage Case: no compression, no encryption / encoding, storage set to sessionStorage');
console.log(sessionStorage.getItem(key));
console.log(a.get(key));
console.log('____________________________________');
