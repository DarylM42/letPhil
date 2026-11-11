function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 overflow-hidden">
      <div className="bg-gray-300 dark:bg-slate-600 h-48 w-full animate-pulse"></div>
      <div className="p-4">
        <div className="bg-gray-300 dark:bg-slate-600 h-4 w-3/4 mb-2 rounded animate-pulse"></div>
        <div className="bg-gray-300 dark:bg-slate-600 h-4 w-1/2 mb-4 rounded animate-pulse"></div>
        <div className="bg-gray-300 dark:bg-slate-600 h-8 w-1/3 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
