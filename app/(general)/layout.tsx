import { Navbar } from "@/components";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="relative w-full flex flex-col items-center">
        <p className="">Hola mundo</p>
        {children}
      </div>
    </>
  );
}
