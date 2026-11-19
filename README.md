# RapidAid Network

RapidAid Network is a multi-layer emergency response system designed to reduce response time during emergencies by combining fast responders, temporary support locations, and ambulance coordination.

---

## Overview

RapidAid Network provides a structured approach to emergency response by integrating three key components:

1. Fast responders using bikes, scooters, or cars
2. Temporary support points such as hotels or local facilities
3. Ambulance services for full medical care

The system ensures that immediate assistance is available within minutes, even before professional medical services arrive.

---

## Core Features

* Real-time emergency reporting
* Nearest responder dispatch system
* Location-based support point identification
* Ambulance coordination
* Multi-layer response handling
* Simple and intuitive interface

---

## System Components

### 1. Fast Responders

Nearby trained individuals equipped with basic first aid kits who can reach the location quickly.

### 2. Support Points

Temporary locations (e.g., hotels, lodges, small clinics) used for stabilization and safe waiting.

### 3. Ambulance Services

Professional medical units responsible for advanced treatment and transport.

---

## How It Works

1. User reports an emergency

2. System captures location

3. Dispatches:

   * Nearest responder
   * Nearest support point (if required)
   * Ambulance

4. Responder arrives first and provides basic aid

5. Patient is stabilized or moved to support point

6. Ambulance completes medical care

---

## Decision Logic

* Critical cases → Responder + Ambulance
* Moderate cases → Responder + Support Point + Ambulance
* Minor cases → Responder + Support Point

---

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend (planned): Node.js / Python
* APIs (planned): Maps and geolocation services

---

## Future Enhancements

* Real-time tracking of responders and ambulances
* Smart routing and traffic-based optimization
* Integration with hospitals and emergency networks
* Mobile application support
* Data-driven response optimization

---

## Research Potential

This project can be extended into research areas such as:

* Emergency response optimization
* Resource allocation systems
* Smart city infrastructure
* Distributed response networks

---

## Installation

```bash id="e9kgmw"
git clone https://github.com/your-username/rapidaid-network.git
cd rapidaid-network
```

Open `index.html` in your browser.

---

## Author

Dharavath Satvik

---

## License

MIT License


---

## AI-maintained project notes (secondary — 2026-11-13)

This section supplements the maintainer-authored README above. The original text has been restored verbatim from Git-history baseline `2a2c59dcc43d74a1731825807d274c3cfe6341d5`; this addendum does not replace or certify the original claims.

- The source tree, runtime data and tests are the implementation source of truth. Roadmap items, draft PRs and AI-generated descriptions are not shipped features by themselves.
- Preserve existing maintainer-provided data. Never replace real data with synthetic or placeholder records. Clearly label and isolate test fixtures.
- Mark unverified sources, IDs, records, metrics and external claims as unknown/unverified instead of guessing.
- Verify setup, execution, test commands and public claims against the exact current commit before using this project in a job, research or academic application.
- See [MODEL_AUDIT_ROUTER.md](MODEL_AUDIT_ROUTER.md) for the independent model review and merge gate.

---

## Engineering Audit & Handover — 2026-11-17

**Review scope:** default branch `main`; static inspection of `dispatch_logic.js`. Runtime tests were not executed.

### Confirmed findings
- `dispatch()` destructures emergency coordinates and severity and immediately searches `data.responders`, `data.support_points`, and `data.ambulances`; the inspected function does not validate the input object, arrays, coordinate ranges, or severity before use.
- The nearest-resource calculation assumes resource coordinates are valid numbers and that `available` is meaningful.
- If no eligible resource exists, the corresponding response field is `null`. A production caller must handle this explicitly.
- This module is a selection/decision helper; it does not itself provide live responder tracking, ambulance integration, or guaranteed emergency response.

### Next actions
1. Validate and normalize emergency/resource coordinates, severity, and resource-list schemas.
2. Define explicit no-resource and partial-dispatch outcomes, with safe escalation behavior.
3. Add tests for each severity, invalid input, unavailable resources, ties, and geographic edge cases.

**Verification status:** dispatch module inspection only; integration, safety behavior, and tests remain unverified. This prototype must not be relied on as an operational emergency-dispatch service.

---

## Examples Used
- Dispatching the nearest responder to a road accident
- Coordinating a support point and ambulance
- Handling a case when no responder is available


---

## Comparison with Existing Open-Source Projects

RapidAid Network is described as a layered emergency-response coordination concept involving nearby responders, temporary support points and ambulance services. These projects are adjacent emergency-management references, not direct equivalents or proof of operational readiness.

| Project | Established focus | Relationship to RapidAid Network |
|---|---|---|
| [Sahana Eden](https://github.com/sahana/eden) | Humanitarian response and disaster-management information systems | A broad, mature emergency-management platform; RapidAid's proposed focus is the last-mile coordination of nearby first responders, support points and ambulance escalation. |
| [OpenMRS](https://github.com/openmrs/openmrs-core) | Open-source medical-record platform | Healthcare information infrastructure rather than emergency dispatch; useful as a reference for structured patient and care data boundaries. |
| [OpenStreetMap](https://github.com/openstreetmap/openstreetmap-website) | Collaborative geographic data and mapping | A possible mapping/data foundation, not a responder-dispatch or clinical-response system. |

### Where RapidAid is different
- **Layered response model:** the concept coordinates a nearby responder, an interim support location and professional ambulance care as distinct resources.
- **Early-arrival objective:** it is framed around reducing the gap before professional medical transport arrives.
- **Explicit escalation logic:** the README describes severity-dependent combinations of resources, which can be developed into a transparent dispatch policy.

### Where established projects are stronger
Sahana Eden and established emergency-service systems have far greater operational scope and maturity. RapidAid's README describes planned backend and mapping integrations; it does not demonstrate live dispatch, trained responder availability, ambulance integration or clinical effectiveness.

### Safety and evidence requirements
This project must remain a prototype until reviewed with emergency-care professionals and relevant authorities. Never imply that an app replaces emergency services or guarantees assistance. Define responder credentials, consent, location privacy, dispatch liability, escalation and fail-safe behavior before any live pilot. Any response-time improvement must be measured in an approved, controlled evaluation.
