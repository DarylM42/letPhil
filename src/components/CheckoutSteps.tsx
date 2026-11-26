type CheckoutStepsProps = {
    current: number;
};

const STEPS = ["Shipping", "Payment", "Review"];

function CheckoutSteps({ current }: CheckoutStepsProps) {
    return (
        <ol className="flex items-center mb-8">
            {STEPS.map((label, index) => {
                const stepNumber = index + 1;
                const isComplete = stepNumber < current;
                const isCurrent = stepNumber === current;
                const isLast = stepNumber === STEPS.length;

                return (
                    <li
                        key={label}
                        aria-current={isCurrent ? "step" : undefined}
                        className={`flex items-center ${isLast ? "" : "flex-1"}`}
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    isComplete
                                        ? "bg-green-700 text-white"
                                        : isCurrent
                                        ? "border-2 border-green-700 text-green-700 dark:border-green-400 dark:text-green-400"
                                        : "border-2 border-gray-300 text-gray-400 dark:border-slate-600"
                                }`}
                            >
                                {isComplete ? "✓" : stepNumber}
                            </span>
                            <span className={`font-semibold ${isComplete || isCurrent ? "" : "text-gray-400"}`}>
                                {label}
                            </span>
                        </div>

                        {!isLast && (
                            <div
                                className={`flex-1 h-0.5 mx-4 ${
                                    isComplete ? "bg-green-700" : "bg-gray-300 dark:bg-slate-600"
                                }`}
                            />
                        )}
                    </li>
                );
            })}
        </ol>
    );
}

export default CheckoutSteps;