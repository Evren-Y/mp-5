/* eslint-disable @typescript-eslint/no-explicit-any */

import { redirect } from "next/navigation";
import { getUrlByAlias } from "@/lib/getUrlByAlias";

export const dynamic = "force-dynamic";

export default async function RedirectPage({ params }: any) {
  const alias = params?.alias;

  if (!alias || typeof alias !== "string") {
    redirect("/");
  }

  const url = await getUrlByAlias(alias);

  if (!url) {
    redirect("/");
  }

  redirect(url);
}
