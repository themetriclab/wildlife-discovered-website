# Polar Bear Tour Page — Competitor Content Gap Fix

## What the other two pages have that yours doesn't

Your Churchill page already covers: ground-level shooting, group of 5, lodge with private baths, gear and clothing lists, prices in CAD + USD, deposit/payment terms, FAQ. It is **missing** these items that appear on wildoutdoors.ca and churchillpolarbearphotographytours.com:

1. **Per-trip breakdown of what's included in each trip length** — e.g. "6 Day Trip = 5 nights accommodation, 5 days of photography (4 full days + 2 half days)". Each competitor lists this for every trip length; your page shows only dates and prices.
2. **Day-by-day itinerary** — Arrival day (fly Winnipeg → Churchill, airport pickup, safety orientation, first shoot, group dinner), full shoot days (early breakfast, first-light departures, lunch in the field, evening review), departure day (morning shoot, midday flight back).
3. **Fitness & physical requirements** — low-to-medium fitness, short walks in snow under a foot deep, possible icy conditions, bathroom breaks available throughout the day.
4. **Safety details** — guides carry firearms (never yet needed in Churchill), years spent learning from Inuit guides in northern Hudson Bay.
5. **Flight logistics** — Calm Air is the airline from Winnipeg to Churchill, seats reserved for guests at a discounted rate, flight booking assistance offered so travel is seamless.
6. **Lodge quiet hours** — quiet time 9pm–5:30am for restful sleep (rare private bathrooms in Churchill).
7. **Exact single-occupancy supplement per trip length** — competitors list $900 / $1,000 / $1,200 / $1,400 CAD for 5/6/7/8-day trips; yours only says "$950–$1,400 depending on trip length".
8. **2028 note** — "Contact us if you're interested in 2028 dates" line to capture early demand.
9. **Refund policy detail** — if balance isn't paid, spot is offered to the waiting list; if filled, guest receives credit toward another trip.

## Proposed changes (src/data/tours.ts, polar bear entry)

- Add a new "Sample Day-by-Day Itinerary" section (arrival / shoot days / departure).
- Add a "Fitness & Safety" section covering physical requirements, firearms policy, and guide experience.
- Add the per-trip lodging/photography-day breakdown to the pricing area (e.g. under each trip label or in a small note).
- Expand flight info in `priceExcludes`/logistics: Calm Air, reserved seats at discounted rate, booking assistance.
- Update single-occupancy supplements to exact per-trip amounts.
- Add the "2028 dates — contact us" note and the waiting-list credit refund policy to `paymentPolicy`.
- Add one or two new FAQ entries (fitness level, flights to Churchill).

## Technical notes

- All edits confined to the polar bear object in `src/data/tours.ts` (plus, if needed, an itinerary rendering block in `src/pages/TourDetail.tsx` following the existing section pattern).
- No testimonials, phone numbers, or addresses added — per brand constraints.
- Content rewritten in Silver Bear's own voice, not copied verbatim, to avoid duplicate-content SEO issues between the related sites.
