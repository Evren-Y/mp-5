import ShortenForm from "@/components/ShortenForm";

export default function Home() {
  return (
    <>
      <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <h1>URL Shortener</h1>
        <p>Enter a URL and a custom alias to create your shortened link.</p>
        <ShortenForm />
      </main>
    </>
  );
}