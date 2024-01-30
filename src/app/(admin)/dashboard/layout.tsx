export default function layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      {children}
      <div className="mt-5 flex justify-between items-center">
        {products} {analytics}
      </div>
      {payments}
    </div>
  );
}
