export default function Home() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="prose lg:prose-xl dark:prose-invert">
        <h1>Niedziela zwykła czy pojebana?</h1>
        <h2>Niedziela handlowa API</h2>
        <p>Supported years: 2024, 2025</p>
        <pre>
          GET /api/2024-12-15
          <br />
          {`{\n\t"jaka": "zwykla"\n}`}
        </pre>
        <pre>
          GET /api/2024-12-22
          <br />
          {`{\n\t"jaka": "pojebana"\n}`}
        </pre>
      </div>
    </div>
  );
}
