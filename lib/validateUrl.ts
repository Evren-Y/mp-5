export async function isValidUrl(url: string): Promise<boolean> {
    try {
      const parsed = new URL(url);
      const res = await fetch(parsed.toString(), {
        method: "HEAD",
        redirect: "follow",
      });
  
      return res.status < 500;
    } catch {
      return false;
    }
  }
  