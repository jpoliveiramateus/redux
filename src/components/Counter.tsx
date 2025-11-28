type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export const Counter: React.FC<Props> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  const handleKeyDownIncrement = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onIncrement();
    }
  };

  const handleKeyDownDecrement = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onDecrement();
    }
  };

  const handleKeyDownReset = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onReset();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-105">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg mb-2">Contador Atual</p>
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {count}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={onDecrement}
            onKeyDown={handleKeyDownDecrement}
            tabIndex={0}
            aria-label="Decrementar contador"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            - Diminuir
          </button>
          <button
            onClick={onIncrement}
            onKeyDown={handleKeyDownIncrement}
            tabIndex={0}
            aria-label="Incrementar contador"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            + Aumentar
          </button>
        </div>

        <button
          onClick={onReset}
          onKeyDown={handleKeyDownReset}
          tabIndex={0}
          aria-label="Resetar contador"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Resetar
        </button>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Status:</span>
            <span className="font-semibold">
              {count > 0
                ? "✨ Positivo"
                : count < 0
                ? "❄️ Negativo"
                : "🎯 Zero"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
