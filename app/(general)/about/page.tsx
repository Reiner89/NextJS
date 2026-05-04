import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Page description",
  keywords: ["about page", "reiner", "information"],
};

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
