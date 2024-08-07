
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const VerifyPhrases = dynamic(() => import('../components/VerifyPhrases/page.js'), {
  ssr: true, // Disable server-side rendering for this component
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPhrases />
    </Suspense>
  );
}
