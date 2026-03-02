import { ShieldCheck } from "lucide-react";

export default function Warranty() {
  return (
    <section id="warranty" className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Warranty</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">Warranty Policy</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 glass-card-strong rounded-2xl p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl glass-chip flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-widest font-semibold mb-1">
                Coverage Period
              </p>
              <p className="text-[var(--color-text-main)] text-4xl font-bold">1 Year</p>
              <p className="text-[var(--color-text-muted)] text-sm mt-2">from date of purchase</p>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card rounded-2xl p-8 space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              WARRANTIES: Goods manufactured and/or supplied by MarketAir, Inc.
              are warranted to be free from defects in materials and workmanship
              for a period of one (1) year from the date of purchase, when properly
              installed and maintained and the installation complies with all
              written specifications made by MarketAir, Inc. at the time of sale.
            </p>
            <p>
              The warranty stated above is in lieu of all other warranties, express
              or implied, including, but not limited to: the implied warranties of
              merchantability and fitness for a particular purpose. Although
              MarketAir, Inc. may have suggested the product, or provided written
              or oral advice to the Purchaser, it is the Purchaser&apos;s responsibility
              to test and determine the suitability of the Product for its intended
              use and purpose. Purchaser and/or Purchaser&apos;s customer assume all risk
              and liability whatsoever regarding such suitability.
            </p>
            <p>
              In the event of a breach of the above warranty, MarketAir, Inc.&apos;s
              sole obligation, and Purchaser&apos;s sole and exclusive remedy, shall be,
              at MarketAir, Inc.&apos;s option, repair or replacement of any defective
              products, or refund of an applicable portion of the purchase price.
              MarketAir, Inc. shall have no liability for costs of removal or
              reinstallation of the product. The Purchaser agrees that no other
              remedy, including, but not limited to: loss of profits, lost sales,
              injury to person or property, or any other special, incidental or
              consequential damages, shall be available to the Purchaser for any
              claim arising out of this agreement, regardless of whether such claim
              is made in contract or in tort, including strict liability in tort. In
              no event will MarketAir, Inc. be obligated to pay damages to the
              Purchaser in any amount exceeding the purchase price that the
              Purchaser paid to MarketAir, Inc. for the allegedly defective product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
