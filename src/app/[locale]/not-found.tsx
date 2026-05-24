'use client';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404 - الصفحة غير موجودة</h1>
      <p>عذراً، الصفحة التي تبحث عنها غير متوفرة.</p>
      <a href="/" style={{ marginTop: '1rem', color: 'blue', textDecoration: 'underline' }}>العودة للصفحة الرئيسية</a>
    </div>
  );
}
