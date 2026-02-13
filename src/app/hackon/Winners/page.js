// app/page.js or pages/index.js
"use client"
import dynamic from 'next/dynamic';

// Use dynamic import with ssr:false for components that use browser APIs
const Winners = dynamic(() => import('@/components/Hackthon/winners'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="fixed left-0 top-0 w-[100%] z-50">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Hackathon Timer</h1> */}
      
      <Winners />
      
     
    </main>
  );
}