import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Aurelle — Cardápio Digital" },
      {
        name: "description",
        content:
          "Cardápio digital da Maison Aurelle: entradas, pratos principais, hambúrgueres, porções, sobremesas e bebidas. Jardins, São Paulo.",
      },
      { property: "og:title", content: "Maison Aurelle — Cardápio Digital" },
      {
        property: "og:description",
        content:
          "Cozinha contemporânea no Jardins. Veja o cardápio servido hoje no salão.",
      },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/cardapio/index.html"
      title="Cardápio Maison Aurelle"
      className="h-screen w-full border-0"
    />
  );
}
