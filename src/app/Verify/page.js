// app/Verify/page.js
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Verify component to ensure it is only rendered on the client side
const Verify = dynamic(() => import('../components/Verify/page.js'), {
  ssr: true, // Disable server-side rendering for this component
});

const VerifyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Verify />
    </Suspense>
  );
};

export default VerifyPage;
