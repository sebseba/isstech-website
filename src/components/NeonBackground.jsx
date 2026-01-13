const NeonBackground = () => {
  
  return (
    
    <div className="absolute inset-0">
      <div className="absolute -top-56 left-1/2 h-[700px] w-[1050px] -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-[160px]" />
      <div className="absolute top-16 left-[-160px] h-[420px] w-[420px] rounded-full bg-purple-500/25 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-160px] h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[140px]" />
      <div className="absolute bottom-[-380px] left-[10%] h-[700px] w-[900px] rounded-full bg-fuchsia-500/12 blur-[190px]" />
    </div>
  );
};

export default NeonBackground;
