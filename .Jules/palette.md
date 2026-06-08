## 2026-06-07 - Accessibility Foundations for Canvas-heavy Apps
**Learning:** In applications that rely heavily on `<canvas>` for core features (like an AI card generator), adding `role="img"` and `aria-label` provides essential context for screen readers. Furthermore, an `aria-live` announcer is crucial for notifying users of asynchronous state changes (like card generation) when visual cues might be missed.
**Action:** Always include an `aria-live="polite"` region and descriptive ARIA labels for non-interactive visual elements in future UX enhancements.

## 2025-05-14 - Prevent Empty Actions and Provide Feedback
**Learning:** In interactive web apps (like canvas generators), enabling action buttons (e.g., Download) before the content is ready leads to a broken user experience. Providing immediate, state-based visual feedback (text change) on the button itself after a successful action is a high-impact, low-effort way to delight users.
**Action:** Always disable "output" buttons until "input" or "generation" is complete, and use temporary button text changes for success confirmation.
