import { runDES } from './src/services/desAlgorithm.js';

const plaintext = '0123456789ABCDEF';
const key = '133457799BBCDFF1';
const expectedCiphertext = '85E813540F0AB405';

console.log('--- TESTING DES ALGORITHM ---');
console.log('Plaintext:', plaintext);
console.log('Key:', key);
console.log('Expected Ciphertext:', expectedCiphertext);

try {
  const result = runDES(plaintext, key, 'encrypt', false);
  console.log('Actual Ciphertext:  ', result.ciphertextHex);
  
  if (result.ciphertextHex === expectedCiphertext) {
    console.log('SUCCESS: Encryption matches test vector!');
  } else {
    console.error('FAILURE: Encryption result mismatch!');
  }

  // Round trip test
  console.log('\n--- TESTING DECRYPTION ---');
  const decrypted = runDES(result.ciphertextHex, key, 'decrypt', false);
  console.log('Decrypted Plaintext:', decrypted.ciphertextHex);
  
  if (decrypted.ciphertextHex === plaintext) {
    console.log('SUCCESS: Decryption round-trip matches original plaintext!');
  } else {
    console.error('FAILURE: Decryption round-trip mismatch!');
  }
} catch (err) {
  console.error('ERROR running DES:', err);
}
