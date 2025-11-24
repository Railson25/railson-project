import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
  to: string;
  alt: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Plans & Subscriptions",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Pricing lists and plans on a desk",
    to: "/docs/intro",
    description: (
      <>
        Define products, plans, and recurring cycles (monthly, yearly, custom).
        Manage upgrades, downgrades, and cancellations without breaking history.
      </>
    ),
  },
  {
    title: "Invoices & Taxes",
    imageUrl:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Printed invoice with calculator and pen",
    to: "/docs/api/overview",
    description: (
      <>
        Generate invoices programmatically, attach metadata, and expose clear
        line items. Bring-your-own tax logic or integrate a tax service later.
      </>
    ),
  },
  {
    title: "Payments & Receipts",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Payment terminal and credit card on counter",
    to: "/docs/api/overview",
    description: (
      <>
        Charge customers safely and record outcomes. Idempotent requests help
        avoid double-charges when clients retry due to timeouts or network
        hiccups.
      </>
    ),
  },
  {
    title: "Webhooks that Don’t Break",
    imageUrl:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Developer viewing code showing request and response flow",
    to: "/docs/webhooks/overview",
    description: (
      <>
        Receive signed events, retry with backoff, and verify payload integrity.
        Keep downstream systems in sync without polling.
      </>
    ),
  },
  {
    title: "Observability & Audit Trail",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-7d2c1c31f7b2?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Dashboard with charts on a large display",
    to: "/docs/operations/observability",
    description: (
      <>
        Track requests, failures, and state changes. Export logs/metrics to your
        stack to speed up incident response and financial reconciliation.
      </>
    ),
  },
  {
    title: "SDKs & Tooling",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Engineer coding on a laptop",
    to: "/docs/sdk/javascript",
    description: (
      <>
        Use starter SDKs and copy-pasteable examples. Works well with CI and
        load testing tools so you can validate behavior before launch.
      </>
    ),
  },
];

function Feature({ title, imageUrl, description, to, alt }: FeatureItem) {
  return (
    <div className={clsx("col col--6", styles.featureCol)}>
      <Link to={to} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <img src={imageUrl} alt={alt} loading="lazy" />
        </div>
        <div className={styles.cardBody}>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>
          <p className={styles.cardText}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.grid)}>
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
