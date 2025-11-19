# Guide to Separating Landing Pages into 4 Projects

## Overview
This guide will help you copy each landing page into its own Lovable project.

---

## Project 1: Awareness Landing Page

### Files to Copy:
1. **Main Page File:**
   - `src/pages/Awareness.tsx`

2. **Shared Components:**
   - `src/components/landing/StatsSection.tsx`
   - `src/components/landing/Footer.tsx`

3. **Assets:**
   - `src/assets/brands/easemytrip.svg`
   - `src/assets/brands/makemytrip.svg`
   - `src/assets/brands/pickyourtrail.svg`
   - `src/assets/brands/travclan.svg`

4. **Design System:**
   - `src/index.css`
   - `tailwind.config.ts`

5. **UI Components Used:**
   - `src/components/ui/button.tsx`
   - `src/components/ui/card.tsx`

### Setup in New Project:
1. In `src/App.tsx`, replace the Index route with:
   ```tsx
   import Awareness from "./pages/Awareness";
   
   <Route path="/" element={<Awareness />} />
   ```

---

## Project 2: Consideration Landing Page

### Files to Copy:
1. **Main Page File:**
   - `src/pages/Consideration.tsx`

2. **Shared Components:**
   - `src/components/landing/StatsSection.tsx`
   - `src/components/landing/Footer.tsx`

3. **Assets:**
   - `src/assets/brands/easemytrip.svg`
   - `src/assets/brands/makemytrip.svg`
   - `src/assets/brands/pickyourtrail.svg`
   - `src/assets/brands/travclan.svg`

4. **Design System:**
   - `src/index.css`
   - `tailwind.config.ts`

5. **UI Components Used:**
   - `src/components/ui/button.tsx`
   - `src/components/ui/card.tsx`
   - `src/components/ui/badge.tsx`

### Setup in New Project:
1. In `src/App.tsx`, replace the Index route with:
   ```tsx
   import Consideration from "./pages/Consideration";
   
   <Route path="/" element={<Consideration />} />
   ```

---

## Project 3: Conversion Landing Page

### Files to Copy:
1. **Main Page File:**
   - `src/pages/Conversion.tsx`

2. **Shared Components:**
   - `src/components/landing/StatsSection.tsx`
   - `src/components/landing/Footer.tsx`

3. **Assets:**
   - `src/assets/brands/easemytrip.svg`
   - `src/assets/brands/makemytrip.svg`
   - `src/assets/brands/pickyourtrail.svg`
   - `src/assets/brands/travclan.svg`

4. **Design System:**
   - `src/index.css`
   - `tailwind.config.ts`

5. **UI Components Used:**
   - `src/components/ui/button.tsx`
   - `src/components/ui/card.tsx`
   - `src/components/ui/badge.tsx`

### Setup in New Project:
1. In `src/App.tsx`, replace the Index route with:
   ```tsx
   import Conversion from "./pages/Conversion";
   
   <Route path="/" element={<Conversion />} />
   ```

---

## Project 4: Main Landing Page (ChatLanding)

### Files to Copy:
1. **Main Page File:**
   - `src/components/ChatLanding.tsx`

2. **Shared Components:**
   - `src/components/landing/StatsSection.tsx`
   - `src/components/landing/HowItWorks.tsx`
   - `src/components/landing/FeaturesGrid.tsx`
   - `src/components/landing/TestimonialsSection.tsx`
   - `src/components/landing/FAQSection.tsx`
   - `src/components/landing/Footer.tsx`
   - `src/components/landing/FloatingCTA.tsx`
   - `src/components/landing/PromotionalAds.tsx`

3. **Assets:**
   - `src/assets/brands/easemytrip.svg`
   - `src/assets/brands/makemytrip.svg`
   - `src/assets/brands/pickyourtrail.svg`
   - `src/assets/brands/travclan.svg`

4. **Design System:**
   - `src/index.css`
   - `tailwind.config.ts`

5. **UI Components Used:**
   - `src/components/ui/button.tsx`
   - `src/components/ui/card.tsx`
   - `src/components/ui/accordion.tsx`
   - All other UI components referenced by the landing components

### Setup in New Project:
1. In `src/pages/Index.tsx`:
   ```tsx
   import ChatLanding from "@/components/ChatLanding";
   
   const Index = () => {
     return <ChatLanding />;
   };
   
   export default Index;
   ```

---

## Common Steps for All Projects

### 1. Create New Project
Go to [lovable.dev](https://lovable.dev) and create 4 new blank projects.

### 2. Copy Files
For each project, copy the files listed above using Dev Mode or by pasting the code directly into Lovable chat.

### 3. Install Dependencies
All required dependencies should already be included in new Lovable projects. If any are missing:
- `framer-motion` for animations
- `lucide-react` for icons

### 4. Update Routing
Each project should have its main landing page at the root route (`/`).

### 5. Test
- Verify all assets load correctly
- Check that the design system (colors, fonts) renders properly
- Test all buttons and links
- Ensure animations work smoothly

---

## Notes

- All pages now have standalone headers without cross-page navigation
- Each page is self-contained and ready to be the main page of its own project
- The design system (`index.css` and `tailwind.config.ts`) must be copied to maintain consistent styling
- Brand logos are shared across all projects for the StatsSection component

---

## Deployment

After setting up each project:
1. Click "Publish" to deploy each landing page
2. Consider connecting custom domains for each (requires paid plan)
3. Each project can be managed, updated, and deployed independently

---

## Questions?

If you need help with any step, just ask in the Lovable chat for each project!
