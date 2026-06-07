## 2026-06-07 - Accessibility Foundations for Canvas-heavy Apps
**Learning:** In applications that rely heavily on `<canvas>` for core features (like an AI card generator), adding `role="img"` and `aria-label` provides essential context for screen readers. Furthermore, an `aria-live` announcer is crucial for notifying users of asynchronous state changes (like card generation) when visual cues might be missed.
**Action:** Always include an `aria-live="polite"` region and descriptive ARIA labels for non-interactive visual elements in future UX enhancements.
