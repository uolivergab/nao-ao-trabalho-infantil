import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-[var(--color-ink)] px-6">
      <div className="text-center">
        <p className="text-caption text-[var(--color-amber)]">Erro 404</p>
        <h1 className="text-h1 mt-6 font-display text-[var(--color-text-light)]">
          Página não encontrada.
        </h1>
        <p className="text-body-large mt-6 max-w-[44ch] mx-auto text-[var(--color-text-muted-light)]">
          O endereço acessado não existe ou foi removido. Volte para a página
          principal e siga conhecendo a campanha.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-7 py-3.5 text-[0.9375rem] font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-green-hover)]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
