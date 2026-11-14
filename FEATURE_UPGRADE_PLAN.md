# RapidAid-Network — Feature Upgrade Plan

**Snapshot:** 2026-11-13

## Objective

A small simulation that chooses a nearby available response resource based on an incident location and a severity label.

## P0 — correctness, scope and safety

- [ ] Validate coordinates, severity values, availability states and resource identifiers; test missing and impossible inputs.
- [ ] Display straight-line distance as an approximation and document why it is not road/travel time.

## P1 — complete user workflow

- [ ] Add a deterministic simulation harness and compare dispatch rules across fixed scenarios.
- [ ] Add audit output showing selected resource, rejected candidates and reasons.

## P2 — evaluation and scale

- [ ] Integrate route-network estimates only with licensed, sourced map data and explicit limitations.
- [ ] Evaluate coverage gaps and failure behavior across generated scenarios.

## Contributor work packages

1. Input contracts and validation with fixture-based tests.
2. Deterministic core workflow and auditable outputs.
3. User-facing explanations, accessibility and error handling.
4. Reproducible evaluation with a baseline and documented limitations.

## Definition of done

- [ ] Setup works from a clean environment.
- [ ] Tests cover normal, missing, malformed and boundary inputs.
- [ ] Demo/sample data and real external data are clearly distinguished.
- [ ] README, tests and activity log agree on actual behavior.
