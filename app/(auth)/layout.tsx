export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="overflow-hidden w-screen h-svh flex justify-center items-center">
        <section className="mx-auto relative w-min auth">{children}</section>
      </main>
    </>
  );
}
