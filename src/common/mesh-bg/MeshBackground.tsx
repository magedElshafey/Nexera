export default function MeshBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
    </div>
  );
}
