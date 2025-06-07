type SectionProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="w-full py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-primary">{title}</h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
