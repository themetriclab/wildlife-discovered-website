You are absolutely right: a guided photography tour is a service/experience, not a physical product, so merchant return policies and shipping details make no sense. Those fields were added because the page is currently using `Product` structured data, and Google's Product rich-result validator flags `Offer` blocks that lack `hasMerchantReturnPolicy` and `shippingDetails`. The real fix is not to force e-commerce fields onto a tour, but to use a schema type that actually describes a tour.

## Proposed change

Replace the `Product` JSON-LD on each tour detail page with a `TouristAttraction` schema (schema.org's type for places/experiences people visit). This keeps the rich-result benefits for tours while removing the irrelevant return/shipping requirements.

## What will be updated

1. **File: `src/pages/TourDetail.tsx`**
   - Remove the `Product` object and its `Offer` array.
   - Remove `hasMerchantReturnPolicy` and `shippingDetails` entirely.
   - Add a `TouristAttraction` JSON-LD object containing:
     - `name` (tour title)
     - `description` (SEO description)
     - `image` (tour hero image)
     - `url` (canonical tour URL)
     - `address` / `addressCountry` (derived from the tour's `location` field)
     - `touristType` (e.g., "Wildlife photography enthusiasts")
   - Keep the existing `BreadcrumbList` and `FAQPage` schemas unchanged.

2. **Validation**
   - Confirm the rendered JSON-LD is valid schema.org markup and that no return-policy or shipping fields remain anywhere in `src/`.

## Result

Google's Product/Shopping warnings will disappear because the page will no longer claim to be a shippable product. The tour pages will still expose structured data that helps search engines understand the experience, location, and FAQs.