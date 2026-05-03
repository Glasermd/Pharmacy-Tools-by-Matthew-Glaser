# Pharmacy-Tools-by-Matthew-Glaser
Pharmacy tools designed to standardize and simplify workflow including dispense date and days of supply calculators

## Overview
This repository contains a suite of standalone web applications designed to standardize dispense date calculations and documentation. These tools were developed to enforce strict compliance rules, improve operational workflows, and prevent transcription errors in fast-paced pharmacy environments. 

All tools are built as single-file HTML applications. They run entirely within a standard web browser without requiring external servers or IT deployment. 

## Available Tools

### 1. Dispense Date Calculator
A precise target-date calculator that automates early refill limits and standardizes chart annotations.
* **Dynamic Calculations:** Automatically calculates next fill dates based on a 30, 60, 90, or custom day supply, while accounting for allowed early refill limits (1-4 days).
* **Standardized Verbiage:** Generates exact, copy-paste ready documentation strings, toggling seamlessly between "ok to dispense" and "updated DND before to" phrasing.
* **Days Since Tracker:** Includes a built-in calculator to determine the exact number of days elapsed between the last dispensed date and today (counting day dispensed).

### 2. Days of Supply Calculator
A robust billing calculator that automates complex days-of-supply logic for insulins, eye drops, and topicals.
* **Strict Compliance Rules:** Enforces strict rounding logic (rounding down partial days) to ensure billing accuracy.
* **Manufacturer Specifics:** Integrates specific drops-per-mL conversions (e.g., Lumigan at 25 drops/mL, Travatan-Z at 28 drops/mL) and specific insulin priming rules.
* **In-Use Expiration Guardrails:** Automatically caps the days of supply based on strict manufacturer in-use limits once a product is opened (e.g., 42-day cap per vial for Latanoprost).
* **Audit Trails:** Outputs the full calculation formula alongside the result to create a clear audit trail for clinical notes.

## Technical Features
* **Instant Recalculation:** The UI updates outputs instantly upon any keystroke or selection change, clearing old data to prevent accidental copying of outdated calculations.
* **One-Click Documentation:** Dedicated "Copy for Documentation" buttons generate clean, plain-text strings formatted perfectly for Electronic Health Record (EHR) systems.
* **Legacy Support:** Written with fallback JavaScript to ensure flawless execution on older, restricted enterprise pharmacy workstations.

## License & Disclaimer
This project is licensed under the MIT License.

The software is provided "as is", without warranty of any kind. These tools are intended to assist in workflow calculations, but the dispensing pharmacist remains entirely responsible for verifying all math, data entry, and final dispensing decisions. 
