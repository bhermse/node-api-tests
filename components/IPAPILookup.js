export default function IPAPILookup(apiData) {
  return (
    <div className="api-response code">
      <pre>{JSON.stringify(apiData, null, 3)}</pre>
    </div>
  );
}
