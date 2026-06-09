import { useEffect, useMemo, useState } from "react";
import { createBlock } from "../utils/blockchain";

const STORAGE_KEY = "doachain-blocks";

export function useBlockchain() {
  const [blocks, setBlocks] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  }, [blocks]);

  function pushBlock(inst, valor) {
    const previousHash = blocks[0]?.hash || "GENESIS";
    const block = createBlock({
      id: blocks.length + 1,
      instituicao: inst.name,
      valor,
      previousHash,
    });
    setBlocks([block, ...blocks]);
  }

  function popBlock() {
    setBlocks((current) => current.slice(1));
  }

  const totals = useMemo(() => {
    const totalValue = blocks.reduce(
      (sum, block) => sum + Number(block.valor || 0),
      0,
    );
    return { totalDonations: blocks.length, totalValue };
  }, [blocks]);

  return { blocks, pushBlock, popBlock, totals };
}
