
"use strict";

// Testes do Geo-Explorer.
// Execute no console do navegador com index.html aberto.

(function runGeoExplorerTests() {
  const app = window.GeoExplorer;

  if (!app) {
    throw new Error(
      "Geo-Explorer não encontrado. Abra index.html antes de executar os testes."
    );
  }

  const tests = [];
  function test(name, assertion) {
    try {
      assertion();
      tests.push({ name, status: "PASSOU" });
    } catch (error) {
      tests.push({ name, status: "FALHOU", error: error.message });
    }
  }

  test("A base contém seis trilhas", () => {
    if (app.getTracks().length !== 6) {
      throw new Error("Quantidade de trilhas diferente de 6.");
    }
  });

  test("Todas as trilhas possuem os campos principais", () => {
    const tracks = app.getTracks();
    const valid = tracks.every((track) =>
      track.id &&
      track.title &&
      track.category &&
      track.level &&
      Number.isFinite(track.hours) &&
      Array.isArray(track.contents) &&
      track.contents.length > 0
    );

    if (!valid) throw new Error("Há trilhas com campos ausentes ou inválidos.");
  });

  test("A pesquisa encontra trilhas de dados", () => {
    const results = app.searchTracks("dados");
    if (!results.some((track) => track.category === "Dados")) {
      throw new Error("A pesquisa não encontrou a categoria Dados.");
    }
  });

  test("A pesquisa retorna uma lista vazia para termo inexistente", () => {
    if (app.searchTracks("termo-que-nao-existe-xyz").length !== 0) {
      throw new Error("A pesquisa retornou resultados inesperados.");
    }
  });

  test("As estatísticas iniciais são coerentes", () => {
    const stats = app.getStats();
    if (
      stats.totalTracks !== 6 ||
      stats.completedTracks !== 0 ||
      stats.challengeCount !== 0
    ) {
      throw new Error("As estatísticas iniciais estão incorretas.");
    }
  });

  test("O comando de ajuda apresenta instruções", () => {
    app.runCommand("ajuda");
    const output = document.getElementById("commandOutput").textContent;
    if (!output.includes("COMANDOS DISPONÍVEIS")) {
      throw new Error("A resposta de ajuda não foi apresentada.");
    }
  });

  test("O comando listar trilhas apresenta o catálogo", () => {
    app.runCommand("listar trilhas");
    const output = document.getElementById("commandOutput").textContent;
    if (!output.includes("Fundamentos de Python")) {
      throw new Error("O catálogo não foi apresentado.");
    }
  });

  console.table(tests);

  const failures = tests.filter((item) => item.status === "FALHOU");
  console.log(
    `${tests.length - failures.length}/${tests.length} testes passaram.`
  );

  if (failures.length) {
    console.error("Revise os testes que falharam antes de publicar.");
  }
})();
