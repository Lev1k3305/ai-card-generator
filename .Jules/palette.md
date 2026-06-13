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

## 2026-06-10 - Discoverability of Keyword-Triggered Features
**Learning:** Using `<datalist>` for input fields that trigger specific "hidden" visual features (like specialized pixel art or animations) significantly improves discoverability and user delight. It transitions the interaction from "Recall" (requiring the user to remember or guess exact strings) to "Recognition" (providing visible suggestions).
**Action:** For any application that uses keyword matching for unique UI states or logic, provide a `<datalist>` or similar suggestion mechanism to expose these features to the user.

## 2026-06-11 - Native Form Submission for Keyboard Accessibility
**Learning:** For interactive applications with multiple input fields, wrapping the inputs and primary action button in a semantic <form> element is the most robust way to enable "Enter to submit" behavior. This leverages native browser functionality, improving keyboard accessibility and meeting user intuition without writing custom keydown listeners.
**Action:** Always wrap input-heavy interactive sections in a <form> and set the primary action button to type="submit" to ensure seamless keyboard interactions.

## 2026-06-12 - Immersive Live Theme Previews
**Learning:** Centralizing aesthetic constants (like theme color pairs) into a shared JavaScript object enables real-time synchronization between the global page background and local component states (like canvas generation). This "Live Preview" pattern reduces cognitive load by showing users the environment of their content before they commit to "generating" it.
**Action:** When a component has multiple aesthetic states, use shared constants and event listeners to update the surrounding environment, creating a more immersive and responsive UI.
