export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.75)]">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-purple-500" />
    </div>
  );
};
