import { cacheLife } from "next/cache";

async function UniqueContent() {
  "use cache";

  cacheLife({
    stale: 5,
    revalidate: 10,
  });

  const uuid = crypto.randomUUID();
  return <p>Request ID: {uuid}</p>;
}

export default function RandomPage() {
  return <UniqueContent />;
}
