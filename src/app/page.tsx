export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Easy Cover
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          쉽게 표지 시안을 만들어 보세요
        </p>
      </main>
    </div>
  );
}
