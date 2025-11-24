import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          {siteConfig.title || "Billing API — Documentation"}
        </Heading>
        <p className={styles.subtitle}>
          Subscriptions, invoices, payments & webhooks — robust and idempotent.
        </p>

        <div className={styles.ctaRow}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get started in 5 minutes ⏱️
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/overview"
          >
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title ?? "Billing API — Documentation"}
      description="Subscriptions, invoices, payments & webhooks — robust and idempotent."
    >
      <HomepageHeader />

      {/* OVERVIEW BLOCK */}
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--7">
            <Heading as="h2">Overview</Heading>
            <p>
              <strong>Billing API</strong> is a complete billing platform to
              create and manage subscriptions, issue invoices, process payments,
              and react to events through secure webhooks. It is designed for{" "}
              <strong>reliability</strong> (end-to-end idempotency),
              <strong> security</strong>, and <strong>observability</strong>.
            </p>
            <p>
              This front page focuses on product context and capabilities.
              <strong> Technical details</strong>—endpoints, models, error
              codes, retries, webhook signatures, SDKs, and examples—are
              available in the technical sections of the sidebar.
            </p>

            <Heading as="h3" className="margin-top--lg">
              What you can build
            </Heading>
            <ul>
              <li>
                Subscription products with monthly, yearly, or custom billing
                cycles.
              </li>
              <li>
                Automated invoicing, taxes, and compliant invoice artifacts.
              </li>
              <li>
                Synchronous and asynchronous payments with{" "}
                <code>Idempotency-Key</code>.
              </li>
              <li>
                Signed webhooks with exponential retries and replay safety.
              </li>
              <li>
                Audit-friendly event streams and built-in metrics for finance
                and ops.
              </li>
              <li>Versioned API, Sandbox/Production environments.</li>
            </ul>

            <div className={styles.inlineCtas}>
              <Link className="button button--primary" to="/docs/intro">
                Quickstart
              </Link>
              <Link
                className="button button--secondary"
                to="/docs/guides/idempotency"
              >
                Idempotency Guide
              </Link>
            </div>
          </div>

          <div className="col col--5">
            <div className={styles.sideCard}>
              <div className="card">
                <div className="card__header">
                  <h3>Technical documentation</h3>
                </div>
                <div className="card__body">
                  <ul className={styles.linkList}>
                    <li>
                      <Link to="/docs/intro">Technical Overview</Link>
                    </li>
                    <li>
                      <Link to="/docs/api/overview">API Reference</Link>
                    </li>
                    <li>
                      <Link to="/docs/webhooks/overview">Webhooks</Link>
                    </li>
                    <li>
                      <Link to="/docs/sdk/javascript">SDKs & Examples</Link>
                    </li>
                    <li>
                      <Link to="/docs/operations/observability">
                        Observability
                      </Link>
                    </li>
                    <li>
                      <Link to="/docs/guides/security">Security</Link>
                    </li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/api/overview"
                  >
                    Explore API
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid with Unsplash images */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
