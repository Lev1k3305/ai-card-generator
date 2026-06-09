## 2026-06-08 - Accessibility Foundations for Canvas-heavy Apps
**Learning:** In applications that rely heavily on `<canvas>` for core features (like an AI card generator), adding `role="img"` and `aria-label` provides essential context for screen readers. Furthermore, an `aria-live` announcer is crucial for notifying users of asynchronous state changes (like card generation) when visual cues might be missed.
**Action:** Always include an `aria-live="polite"` region and descriptive ARIA labels for non-interactive visual elements in future UX enhancements.

## 2026-06-08 - Prevent Empty Actions and Provide Feedback
**Learning:** In interactive web apps (like canvas generators), enabling action buttons (e.g., Download) before the content is ready leads to a broken user experience. Providing immediate, state-based visual feedback (text change) on the button itself after a successful action is a high-impact, low-effort way to delight users.
**Action:** Always disable "output" buttons until "input" or "generation" is complete, and use temporary button text changes for success confirmation.

## 2026-06-08 - Specificity in Global Component Selectors
**Learning:** Broad CSS selectors like `canvas` can cause unexpected layout issues in apps using multiple canvases for different purposes (e.g., background effects vs. dynamic content). Scoping positioning rules to specific IDs or classes is safer and prevents document flow breakage.
**Action:** Use specific selectors for layout-altering CSS (like `position: absolute`) instead of tag-based selectors when multiple instances of the tag exist.

## 2026-06-09 - Dynamic Content Focus & Visibility
**Learning:** When generating dynamic content (like a canvas) in a long-scroll interface, the user may not see the result or know what to do next. Combining smooth scrolling with programmatic focus shifts to the next action button (e.g., 'Download') provides a seamless transition from creation to consumption.
**Action:** Always use  and  on the primary next-step element after successful content generation.

## 2026-06-09 - Dynamic Content Focus & Visibility
**Learning:** When generating dynamic content (like a canvas) in a long-scroll interface, the user may not see the result or know what to do next. Combining smooth scrolling with programmatic focus shifts to the next action button (e.g., 'Download') provides a seamless transition from creation to consumption.
**Action:** Always use scrollIntoView with smooth behavior and focus() on the primary next-step element after successful content generation.
