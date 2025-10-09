export default function Page() {
  return (
    <div
      className="bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-fixed min-h-screen"
    >
      <div className=" bg-black/80 min-h-screen">
        <div className="max-w-3xl mx-auto p-8  text-white ">
          <h1 className="text-4xl font-bold">Fixed Background Example</h1>
          <p>
            This is content that scrolls while the background stays fixed.
            Add more paragraphs below to see the effect.
          </p>
          {[...Array(20)].map((_, i) => (
            <p key={i}>More scrolling content {i + 1}</p>
          ))}
        </div>
      </div>
    </div>
  );
}