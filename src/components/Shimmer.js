const Shimmer = () => {
     return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="w-50 h-100 bg-[#f6f7f8] border border-[#e0e0e0] m-2.5"
          />
        ))}
    </div>
  );
};
export default Shimmer;