/**
 * Pharmacy DOS Clinical Database
 * Centralized repository for all product calculations and default metrics.
 */

const PHARMACY_DB = {
    insulinPens: [
        { label: "Novolog FlexPen (U-100, 3mL) - 2U Prime / 28 Days", prime: 2, inUse: 28, unitsPerML: 100, vol: 3 },
        { label: "Humalog KwikPen (U-100, 3mL) - 2U Prime / 28 Days", prime: 2, inUse: 28, unitsPerML: 100, vol: 3 },
        { label: "Humalog KwikPen (U-200, 3mL) - 2U Prime / 28 Days", prime: 2, inUse: 28, unitsPerML: 200, vol: 3 },
        { label: "Humulin 70/30 KwikPen (U-100, 3mL) - 2U Prime / 10 Days", prime: 2, inUse: 10, unitsPerML: 100, vol: 3 },
        { label: "Lantus Solostar (U-100, 3mL) - 2U Prime / 28 Days", prime: 2, inUse: 28, unitsPerML: 100, vol: 3 },
        { label: "Toujeo Solostar (U-300, 1.5mL) - 3U Prime / 56 Days", prime: 3, inUse: 56, unitsPerML: 300, vol: 1.5 },
        { label: "Toujeo Max Solostar (U-300, 3mL) - 4U Prime / 56 Days", prime: 4, inUse: 56, unitsPerML: 300, vol: 3 },
        { label: "Tresiba FlexTouch (U-100, 3mL) - 2U Prime / 56 Days", prime: 2, inUse: 56, unitsPerML: 100, vol: 3 },
        { label: "Tresiba FlexTouch (U-200, 3mL) - 2U Prime / 56 Days", prime: 2, inUse: 56, unitsPerML: 200, vol: 3 }
    ],
    
    insulinVials: [
        { label: "Humalog / Novolog (U-100, 10mL) - 28 Days in-use", prime: 0, inUse: 28, unitsPerML: 100, vol: 10 },
        { label: "Humulin N / R / 70/30 (U-100, 10mL) - 31 Days in-use", prime: 0, inUse: 31, unitsPerML: 100, vol: 10 },
        { label: "Lantus (U-100, 10mL) - 28 Days in-use", prime: 0, inUse: 28, unitsPerML: 100, vol: 10 }
    ],
    
    inhalerSizes: [
        { value: "200", label: "200 doses (e.g., standard albuterol)" },
        { value: "165", label: "165 doses" },
        { value: "120", label: "120 doses (e.g., standard fluticasone)" },
        { value: "60", label: "60 doses" },
        { value: "30", label: "30 doses" },
        { value: "custom", label: "Custom size..." }
    ],

        eyeDrops: [
        { label: "Standard Drops (20 drops/mL) - Default 5mL", dropsPerML: 20, inUse: 999, defaultVol: 5, isDefault: true },
        { label: "Alrex 0.2% (32 drops/mL) - Default 5mL", dropsPerML: 32, inUse: 999, defaultVol: 5, defaultFreq: 4 },
        { label: "Atropine Sulf 1% (31 drops/mL) - Default 5mL", dropsPerML: 31, inUse: 999, defaultVol: 5 },
        { label: "Bepotastine / Bepreve 1.5% (33 drops/mL) - Default 10mL", dropsPerML: 33, inUse: 999, defaultVol: 10, defaultFreq: 2 },
        { label: "Besivance 0.6% (31 drops/mL) - Default 5mL", dropsPerML: 31, inUse: 999, defaultVol: 5, defaultFreq: 3 },
        { label: "Brimonidine 0.2% (30 drops/mL) - Default 5mL", dropsPerML: 30, inUse: 999, defaultVol: 5, defaultFreq: 3 },
        { label: "Bromfenac 0.07% (21 drops/mL) - Default 1.7mL", dropsPerML: 21, inUse: 999, defaultVol: 1.7, defaultFreq: 1 },
        { label: "Cyclopentolate 1% (31 drops/mL) - Default 5mL", dropsPerML: 31, inUse: 999, defaultVol: 5 },
        { label: "Dexamethasone 0.1% (31 drops/mL) - Default 5mL", dropsPerML: 31, inUse: 999, defaultVol: 5, defaultFreq: 4 },
        { label: "Diclofenac Sod 0.1% (28 drops/mL) - Default 5mL", dropsPerML: 28, inUse: 999, defaultVol: 5, defaultFreq: 4 },
        { label: "Dorzolamide 2% / Dorzolamide-Timolol (28 drops/mL) - Default 10mL", dropsPerML: 28, inUse: 999, defaultVol: 10, defaultFreq: 2 },
        { label: "Istalol 0.5% (32 drops/mL) - Default 5mL", dropsPerML: 32, inUse: 999, defaultVol: 5, defaultFreq: 1 },
        { label: "Latanoprost (Bausch/Sandoz) (36 drops/mL) - Default 2.5mL", dropsPerML: 36, inUse: 42, defaultVol: 2.5, defaultFreq: 1 },
        { label: "Latanoprost (Greenstone) (20 drops/mL) - Default 2.5mL", dropsPerML: 20, inUse: 42, defaultVol: 2.5, defaultFreq: 1 },
        { label: "Levobunolol 0.5% (32 drops/mL) - Default 5mL", dropsPerML: 32, inUse: 999, defaultVol: 5, defaultFreq: 2 },
        { label: "Lotemax 0.5% Susp / Loteprednol 0.2% Susp (31 drops/mL) - Default 5mL", dropsPerML: 31, inUse: 999, defaultVol: 5, defaultFreq: 4 },
        { label: "Lotemax 0.5% Gel / Loteprednol 0.5% Gel (25 drops/mL) - Default 5mL", dropsPerML: 25, inUse: 999, defaultVol: 5, defaultFreq: 4 },
        { label: "Lotemax SM 0.38% Gel (26.2 drops/mL) - Default 5mL", dropsPerML: 26.2, inUse: 999, defaultVol: 5, defaultFreq: 3 },
        { label: "Lumigan 0.01% (24 drops/mL) - Default 2.5mL", dropsPerML: 24, inUse: 999, defaultVol: 2.5, defaultFreq: 1 },
        { label: "Miebo (90 drops/mL) - Default 3mL", dropsPerML: 90, inUse: 999, defaultVol: 3, defaultFreq: 4 },
        { label: "Prolensa 0.07% (19 drops/mL) - Default 3mL", dropsPerML: 19, inUse: 999, defaultVol: 3, defaultFreq: 1 },
        { label: "Timolol 0.25% / 0.5% GF / Timoptic-XE (29 drops/mL) - Default 5mL", dropsPerML: 29, inUse: 999, defaultVol: 5, defaultFreq: 1 },
        { label: "Timolol Maleate 0.5% / Timoptic (32 drops/mL) - Default 5mL", dropsPerML: 32, inUse: 999, defaultVol: 5, defaultFreq: 2 },
        { label: "Vevye 0.1% (100 drops/mL) - Default 2mL", dropsPerML: 100, inUse: 999, defaultVol: 2, defaultFreq: 2 },
        { label: "Vyzulta 0.024% (32 drops/mL) - Default 2.5mL", dropsPerML: 32, inUse: 56, defaultVol: 2.5, defaultFreq: 1 },
        { label: "Xalatan 0.005% (33 drops/mL) - Default 2.5mL", dropsPerML: 33, inUse: 42, defaultVol: 2.5, defaultFreq: 1 },
        { label: "Zirgan 0.15% Gel (27 drops/mL) - Default 5mL", dropsPerML: 27, inUse: 999, defaultVol: 5 },
        { label: "Zylet (32 drops/mL) - Default 5mL", dropsPerML: 32, inUse: 999, defaultVol: 5, defaultFreq: 4 }
    ],

    earDrops: [
        { label: "Standard Drops (20 drops/mL) - Default 10mL", dropsPerML: 20, inUse: 999, defaultVol: 10 }
    ],

    topicals: {
        standard: [
            { value: "cream", label: "Standard: Creams, Ointments, Gels, Powders, Foams" },
            { value: "lotion", label: "Standard: Lotions, Solutions, Shampoos" }
        ],
        exceptions: [
            { value: "exc_cabtreo", label: "Cabtreo Gel (50g) - 70 Days" },
            { value: "exc_carac", label: "Carac 0.5% Cream (30g) - 30 Days" },
            { value: "exc_estrace", label: "Estrace Cream (42.5g) - 90 Days" },
            { value: "exc_jublia", label: "Jublia (4mL = 30 Days / 8mL = 60 Days)" },
            { value: "exc_lice", label: "Kwell / Ovide (60mL) - 7 Days" },
            { value: "exc_penlac", label: "Penlac Lacquer (6.6mL) - 30 Days" },
            { value: "exc_premarin", label: "Premarin Cream (30g) - 90 Days" },
            { value: "exc_soolantra", label: "Soolantra 1% Cream (45g) - 45 Days" },
            { value: "exc_voltaren", label: "Voltaren Gel (100g) - 7 Days" },
            { value: "exc_santyl", label: "Santyl 250U/GM Ointment" }
        ]
    }
};


