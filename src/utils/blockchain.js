export function computeHash(block) {
  const base = `${block.id}|${block.instituicao}|${block.valor}|${block.timestamp}|${block.previousHash}`;
  let hash = 0;
  for (let i = 0; i < base.length; i++) {
    hash = (hash << 5) - hash + base.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).toUpperCase();
}

export function createBlock({ id, instituicao, valor, previousHash }) {
  const timestamp = new Date().toISOString();
  const block = { id, instituicao, valor, timestamp, previousHash };
  const hash = computeHash(block);
  return { ...block, hash };
}
