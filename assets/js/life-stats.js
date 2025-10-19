// Life Stats Calculator
// Birthdate is stored only in this file and never displayed
const BIRTHDATE = new Date('1996-10-07');
const AVERAGE_LIFESPAN_YEARS = 90;
const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;
const TOTAL_WEEKS = AVERAGE_LIFESPAN_YEARS * WEEKS_PER_YEAR; // 4,680 weeks
const TOTAL_MONTHS = AVERAGE_LIFESPAN_YEARS * MONTHS_PER_YEAR; // 1,080 months
const TOTAL_YEARS = AVERAGE_LIFESPAN_YEARS; // 90 years

// Historical S&P 500 value on birthdate (approximate)
const SP500_AT_BIRTH = 687.31; // S&P 500

// Calculate age and time-based stats
function calculateLifeStats() {
    const now = new Date();
    const ageInMs = now - BIRTHDATE;
    const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.44); // Average days per month
    const ageInYears = ageInDays / 365.25;

    return {
        ageInDays,
        ageInWeeks,
        ageInMonths,
        ageInYears,
        weeksRemaining: TOTAL_WEEKS - ageInWeeks,
        monthsRemaining: TOTAL_MONTHS - ageInMonths
    };
}

// Format large numbers with commas
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// Calculate breaths taken (~20,000 per day)
function calculateBreaths(days) {
    const breathsPerDay = 20000;
    return Math.floor(days * breathsPerDay);
}

// Calculate hours slept (~8 hours per day)
function calculateHoursSlept(days) {
    const hoursPerDay = 8;
    return Math.floor(days * hoursPerDay);
}

// Calculate miles traveled on Earth (rotation)
// Earth rotates at ~1,000 mph at equator, but varies by latitude
// Using average of ~700 mph for mid-latitudes
function calculateMilesTraveled(days) {
    const hoursPerDay = 24;
    const avgSpeedMph = 700; // Average for mid-latitudes
    return Math.floor(days * hoursPerDay * avgSpeedMph);
}

// Fetch current S&P 500 value and calculate growth
// Using a simplified calculation - in production, you'd fetch real-time data
async function calculateSP500Growth() {
    // Approximate current S&P 500 value (you can replace with API call)
    // As of 2025, S&P 500 is around 5000-5500
    const currentSP500 = 5200; // Approximate - replace with real API if desired

    const growth = ((currentSP500 - SP500_AT_BIRTH) / SP500_AT_BIRTH) * 100;
    return growth.toFixed(0);
}

// Generate years grid visualization (smallest and clearest)
function generateYearsGrid(yearsLived) {
    const grid = document.getElementById('years-grid');
    if (!grid) return;

    // Create a grid of 90 squares (90 years)
    // Display in rows of 10 years (decade per row)
    for (let i = 0; i < TOTAL_YEARS; i++) {
        const year = document.createElement('div');
        year.className = 'year-square';

        const currentYear = Math.floor(yearsLived);

        if (i < currentYear) {
            year.classList.add('lived');
        } else if (i === currentYear) {
            year.classList.add('current');
        } else {
            year.classList.add('remaining');
        }

        // Add tooltip with year info
        year.title = `Year ${i + 1} (Age ${i})`;

        grid.appendChild(year);
    }
}

// Initialize and update all stats
async function initializeLifeStats() {
    const stats = calculateLifeStats();

    // Update weeks lived/remaining
    const weeksLivedEl = document.getElementById('weeks-lived');
    const weeksRemainingEl = document.getElementById('weeks-remaining');
    if (weeksLivedEl) {
        weeksLivedEl.textContent = formatNumber(stats.ageInWeeks);
        // Animate the number
        animateNumber(weeksLivedEl, 0, stats.ageInWeeks, 1500);
    }
    if (weeksRemainingEl) {
        weeksRemainingEl.textContent = `~${formatNumber(stats.weeksRemaining)} weeks remaining (avg lifespan)`;
    }

    // Update breaths taken
    const breathsEl = document.getElementById('breaths-taken');
    if (breathsEl) {
        const breaths = calculateBreaths(stats.ageInDays);
        breathsEl.textContent = formatNumber(breaths);
        animateNumber(breathsEl, 0, breaths, 2000);
    }

    // Update hours slept
    const hoursSleptEl = document.getElementById('hours-slept');
    if (hoursSleptEl) {
        const hours = calculateHoursSlept(stats.ageInDays);
        hoursSleptEl.textContent = formatNumber(hours);
        animateNumber(hoursSleptEl, 0, hours, 1800);
    }

    // Update miles traveled
    const milesTraveledEl = document.getElementById('miles-traveled');
    if (milesTraveledEl) {
        const miles = calculateMilesTraveled(stats.ageInDays);
        milesTraveledEl.textContent = formatNumber(miles);
        animateNumber(milesTraveledEl, 0, miles, 2200);
    }

    // Update S&P 500 growth
    const sp500El = document.getElementById('sp500-growth');
    if (sp500El) {
        const growth = await calculateSP500Growth();
        sp500El.textContent = `+${growth}%`;
    }

    // Update sunrises
    const sunrisesEl = document.getElementById('sunrises-seen');
    if (sunrisesEl) {
        sunrisesEl.textContent = formatNumber(stats.ageInDays);
        animateNumber(sunrisesEl, 0, stats.ageInDays, 1600);
    }

    // Generate years visualization
    generateYearsGrid(stats.ageInYears);
}

// Animate number counting up
function animateNumber(element, start, end, duration) {
    const startTime = Date.now();
    const range = end - start;

    function update() {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(start + range * easeOutQuad);

        element.textContent = formatNumber(current);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = formatNumber(end);
        }
    }

    requestAnimationFrame(update);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.life-stats-section')) {
        initializeLifeStats();
    }
});
