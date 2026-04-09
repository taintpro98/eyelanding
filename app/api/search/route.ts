import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, {
  language: "english",
  // Orama tokenizer has no Vietnamese stemmer; use English indexing for `vi` content.
  localeMap: {
    vi: "english",
  },
});
