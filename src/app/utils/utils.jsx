import * as bip39 from 'bip39';
import { randomBytes } from 'crypto';

export function generateMnemonicPhrase() {
  const entropy = randomBytes(16); // 128-bit entropy
  return bip39.entropyToMnemonic(entropy); // Use entropyToMnemonic and pass the buffer directly
}

export function validateMnemonicPhrase(phrase) {
  return bip39.validateMnemonic(phrase);
}
