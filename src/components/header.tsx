type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="bg-primary/10 py-12 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

import Header from "@/components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Header title="About Us" subtitle="Learn more about our team and mission" />
      {/* Page content... */}
    </>
  );
}
