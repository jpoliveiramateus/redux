type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        aria-label="Close cart"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            onClose();
          }
        }}
      />

      <div className="fixed top-0 right-0 h-full w-[500px] bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-6">{/* Empty state for now */}</div>

          <div className="border-t border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-green-500">R$ 0,00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
