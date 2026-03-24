import Link from "next/link";

type CardProps = {
  badge?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
};

export function InfoCard({ badge, title, text, children }: CardProps) {
  return (
    <div className="card glass">
      {badge ? <div className="badge">{badge}</div> : null}
      <h3 className="card-title">{title}</h3>
      {text ? <p className="card-text">{text}</p> : null}
      {children}
    </div>
  );
}

type CTAProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTAButtons({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTAProps) {
  return (
    <div className="button-row">
      <Link href={primaryHref} className="btn btn-primary">
        {primaryLabel}
      </Link>
      {secondaryHref && secondaryLabel ? (
        <Link href={secondaryHref} className="btn btn-secondary">
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}