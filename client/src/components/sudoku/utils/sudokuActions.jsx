export function toggleNote(
  row,
  col,
  value,
  originalSudokuState,
  sudokuState,
  setNotes
) {
  if (
    originalSudokuState[row][col] !== 0 ||
    sudokuState[row][col] !== 0 ||
    !value
  )
    return;

  setNotes((prev) => {
    const newNotes = { ...prev };
    if (!newNotes[row * 10 + col]) {
      newNotes[row * 10 + col] = new Set();
    }
    if (newNotes[row * 10 + col].has(value)) {
      newNotes[row * 10 + col].delete(value);
      if (newNotes[row * 10 + col].size === 0) {
        delete newNotes[row * 10 + col];
      }
      return newNotes;
    }
    newNotes[row * 10 + col].add(value);
    return newNotes;
  });
}

export function clearCell(
  row,
  col,
  originalSudokuState,
  sudokuState,
  setSudokuState,
  setNotes,
  addMessage
) {
  if (originalSudokuState[row][col] !== 0 || sudokuState[row][col] == 0) {
    addMessage({
      heading: 'Invalid Erase Move',
      message: 'Cannot erase original or empty cell',
      type: 'error',
    });
    return;
  }

  setSudokuState((prev) => {
    const newState = [...prev];
    newState[row][col] = 0;
    return newState;
  });

  setNotes((prev) => {
    const newNotes = { ...prev };
    delete newNotes[row * 10 + col];
    return newNotes;
  });
}

export function inputValue(
  row,
  col,
  value,
  originalSudokuState,
  sudokuState,
  setSudokuState,
  setNotes,
  options
) {
  if (
    originalSudokuState[row][col] !== 0 ||
    sudokuState[row][col] !== 0 ||
    !value ||
    options[value] <= 0
  )
    return;

  setSudokuState((prev) => {
    const newState = [...prev];
    newState[row][col] = value;
    return newState;
  });

  setNotes((prev) => {
    const newNotes = { ...prev };
    delete newNotes[row * 10 + col];
    return newNotes;
  });
}

export function handleKeyDown(
  e,
  burstMode,
  selectedCell,
  setSelectedCell,
  handleOptionClick,
  originalSudokuState,
  sudokuState,
  setSudokuState,
  setNotes,
  addMessage
) {
  if (e.key >= '1' && e.key <= '9') {
    handleOptionClick(Number(e.key));
  }
  if (e.key == 'Delete' || e.key == 'Backspace') {
    clearCell(
      selectedCell[0],
      selectedCell[1],
      originalSudokuState,
      sudokuState,
      setSudokuState,
      setNotes,
      addMessage
    );
  }
  if (e.key == 'Escape') {
    setSelectedCell([-1, -1]);
  }
  if (burstMode) return;

  if (e.key == 'ArrowUp') {
    setSelectedCell((prev) => {
      if (prev[0] <= 0) return prev;
      return [prev[0] - 1, prev[1]];
    });
  }
  if (e.key == 'ArrowDown') {
    setSelectedCell((prev) => {
      if (prev[0] >= 8) return prev;
      return [prev[0] + 1, prev[1]];
    });
  }
  if (e.key == 'ArrowLeft') {
    setSelectedCell((prev) => {
      if (prev[1] <= 0) return prev;
      return [prev[0], prev[1] - 1];
    });
  }
  if (e.key == 'ArrowRight') {
    setSelectedCell((prev) => {
      if (prev[1] >= 8) return prev;
      return [prev[0], prev[1] + 1];
    });
  }
}
