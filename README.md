# RapidAid Network

**A small JavaScript prototype for severity-based emergency resource dispatch.**

[![License](https://img.shields.io/badge/license-see%20LICENSE-lightgrey)](LICENSE)

RapidAid Network explores how a dispatch layer could identify nearby available responders, support points, and ambulances based on an emergency's coordinates and severity.

## Features

- Calculate straight-line distance with the Haversine formula.
- Select the nearest available resource from a supplied list.
- Apply different dispatch rules for minor, moderate, and critical incidents.
- Return a structured response object for downstream systems.

## Tech Stack

JavaScript · Node.js built-in modules · JSON

## Quick Start

```bash
git clone https://github.com/Gitcoder12/RapidAid-Network.git
cd RapidAid-Network
node -e "const data=require('./responders.json'); const {dispatch,SEVERITY}=require('./dispatch_logic'); console.log(dispatch(data,{lat:17.43,lng:78.40,severity:SEVERITY.CRITICAL}));"
```

## Project Structure

```text
RapidAid-Network/
├── dispatch_logic.js # Distance and dispatch selection logic
└── responders.json   # Sample responders, support points, and ambulances
```

## Scope and Limitations

This repository currently contains dispatch logic and sample data only. It is not an emergency service, does not contact responders or ambulance operators, and does not provide medical triage. The returned nearest resource is only as accurate as the supplied coordinates and availability flags. In a real emergency, contact local emergency services directly.

## License

See [LICENSE](LICENSE).

---

## Project handbook

- [Activity log](ACTIVITY_LOG.md)
- [Feature upgrade plan](FEATURE_UPGRADE_PLAN.md)
- [Company and team fit](COMPANY_FIT.md)
- [Beginner and technical README draft](README_ADDENDUM_DRAFT.md)
- [README quality checklist](README_QUALITY_CHECKLIST.md)
- [Contributing](CONTRIBUTING.md)
- [Agent instructions](AGENTS.md) · [Agent skills](SKILLS.md)

## Understanding the project

### In plain language

A small simulation that chooses a nearby available response resource based on an incident location and a severity label.

### Technical and research view

JavaScript/Node.js prototype using Haversine distance and rule-based selection from supplied responder, support-point and ambulance records. It is not connected to emergency services and must not be used to dispatch real responders or determine medical priority.

See [FEATURE_UPGRADE_PLAN.md](FEATURE_UPGRADE_PLAN.md), [ACTIVITY_LOG.md](ACTIVITY_LOG.md), [COMPANY_FIT.md](COMPANY_FIT.md) and [CONTRIBUTING.md](CONTRIBUTING.md) for the roadmap and collaboration workflow.
