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
