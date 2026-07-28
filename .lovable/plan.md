## Fix Google Search Console "Improve item appearance" warnings

Search Console flagged two missing fields on the Product/Offer structured data emitted by tour detail pages:

- `hasMerchantReturnPolicy` (in `offers`)
- `shippingDetails` (in `offers`)

These come from the JSON-LD in `src/pages/TourDetail.tsx` where each pricing entry is serialized as a `schema.org/Offer`.

### Change

In `src/pages/TourDetail.tsx`, extend each generated `Offer` object with the two required sub-objects. Since guided photo tours are experiences (no physical shipping, no returns), we declare that explicitly using schema.org values Google accepts:

```ts
hasMerchantReturnPolicy: {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "CA",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
},
shippingDetails: {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0",
    currency: "CAD"
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "CA"
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" }
  }
}
```

No visible UI changes; only the embedded JSON-LD. After deploy, Google will re-crawl and the two "Not started" issues in the Merchant listings report will clear.
