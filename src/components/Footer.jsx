import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-1/12 text-center bg-slate-200 flex flex-col justify-center items-center">
      <div>
        <p className="text-xs text-gray-500">
          请勿上传违反中国法律的图片，违者后果自负。
        </p>
        <p className="text-xs text-gray-500 mt-1">
          <Link 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            陇ICP备2025022782号-2
          </Link>
        </p>
      </div>
    </footer>
  );
}
