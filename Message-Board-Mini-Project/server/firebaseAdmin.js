import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const credentials = JSON.parse(fs.readFileSync(new URL('./serviceAccount.json', import.meta.url)));

initializeApp({ credential: cert(credentials) });
export const db = getFirestore();