# Padmas Technologies - Animation Documentation

## Overview

This document outlines all animation patterns, utilities, and components used across the Padmas Technologies website. We use **Framer Motion** for component-level animations and **GSAP** for scroll-triggered, performance-heavy animations.

---

## Libraries

### Framer Motion
- **Purpose**: Declarative component animations, transitions, and layout animations
- **Version**: 12.40.0
- **Use Cases**: 
  - Component entrance/exit animations
  - Interactive UI elements (buttons, forms, accordions)
  - Gesture-driven animations
  - Staggered children animations

### GSAP (GreenSock Animation Platform)
- **Purpose**: High-performance scroll animations and complex timelines
- **Version**: 3.15.0
- **Plugins**: ScrollTrigger for scroll-based animations
- **Use Cases**:
  - Number counters
  - Scroll-triggered reveals
  - Complex multi-element sequences
  - Performance-critical animations

---

## Animation Variants

Located in `/lib/animation-variants.ts`, these are reusable Framer Motion variants:

### Fade Animations
- **fadeInUp**: Fade in with upward slide (30px)
- **fadeInDown**: Fade in with downward slide
- **fadeInLeft**: Fade in from left side
- **fadeInRight**: Fade in from right side

### Scale Animations
- **scaleIn**: Scale from 0.95 to 1 with fade

### Slide Animations
- **slideInLeft**: Large horizontal slide from left (100px)
- **slideInRight**: Large horizontal slide from right

### Container Animations
- **staggerContainer**: Container with staggered children (0.1s delay between items)
- **staggerItem**: Individual item in staggered sequence

### Other
- **rotateIn**: Rotation with fade (for special elements)

**Usage Example:**
```tsx
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.div variants={fadeInUp}>Content</motion.div>
</motion.div>
```

---

## Custom Hooks

Located in `/lib/use-gsap-animation.ts`:

### useGsapAnimation()
Base hook for creating GSAP contexts and managing cleanup.

```tsx
const ref = useGsapAnimation((ctx) => {
  // GSAP animations here
}, { trigger: ".element" })
```

### useScrollReveal()
Automatic scroll-triggered reveals for elements with `data-scroll-reveal` attribute.

```tsx
const ref = useScrollReveal()
return <div ref={ref}><div data-scroll-reveal>Content</div></div>
```

### useCounterAnimation()
Animate numbers from 0 to a target value on scroll.

```tsx
const ref = useCounterAnimation(100, 2) // Count to 100 over 2 seconds
return <div ref={ref} />
```

### useParallaxAnimation()
Parallax scrolling effect based on scroll velocity.

```tsx
const ref = useParallaxAnimation(0.5) // Speed multiplier
```

---

## Components

### CounterAnimation Component
Reusable component for animated number counters triggered on scroll.

**Location**: `/components/counter-animation.tsx`

**Props:**
- `value` (number): Target number to count to
- `className` (string): Tailwind CSS classes
- `duration` (number): Animation duration in seconds (default: 2)

**Usage:**
```tsx
import { CounterAnimation } from "@/components/counter-animation"

<CounterAnimation value={18} className="text-4xl font-bold" />
```

### ContactForm Component
Animated contact form with staggered field reveals.

**Location**: `/components/contact-form.tsx`

**Features:**
- Staggered field animations on mount
- Success message animation
- Loading state with spinner
- Form validation

**Usage:**
```tsx
import { ContactForm } from "@/components/contact-form"

<ContactForm />
```

### ContactFaq Component
Accordion with smooth expand/collapse animations.

**Location**: `/components/contact-faq.tsx`

**Features:**
- Smooth height transition
- Rotating chevron icon
- Initial expanded state for first item
- Framer Motion AnimatePresence

**Usage:**
```tsx
import { ContactFaq } from "@/components/contact-faq"

<ContactFaq />
```

---

## Pages with Animations

### Home Page (`/app/page.tsx`)
- **Hero Section**: DeviceShowcase with fade-in and entrance animations
- **Companies**: Carousel animation
- **Services**: Card hover effects with Reveal animations
- **Stats**: Display with Reveal component
- **Process**: Horizontal step animation
- **Testimonials**: Grid with staggered reveals
- **CTA Band**: Animated call-to-action

### About Page (`/app/about/page.tsx`)
- **Story/Mission/Vision**: Staggered fade-in reveals
- **Values**: Grid with RevealItem animations
- **Team**: Leader cards with reveal animations
- **Stats**: Counter animations using CounterAnimation component
- **Timeline**: Vertical timeline with numbered reveals

### Contact Page (`/app/contact/page.tsx`)
- **Contact Methods**: Staggered card reveals
- **Contact Form**: Animated form fields with staggered entrance
- **FAQ**: Animated accordion with smooth expand/collapse

### Careers Page (`/app/careers/page.tsx`)
- **Benefits**: Grid of benefit cards with reveal animations
- **Job Listings**: Card reveals with hover effects
- **Hiring Process**: 5-step numbered process with horizontal layout

### Portfolio Page (`/app/portfolio/page.tsx`)
- **Stats**: Counter animations with ScrollTrigger
- **Portfolio Grid**: Case study cards with reveals

### Services Pages
- **Service Detail**: Offering cards with reveals
- **Challenges/Solutions**: Side-by-side reveal animations

---

## Animation Patterns

### Pattern 1: Scroll-Triggered Reveals
Elements animate in as they come into view.

```tsx
<RevealItem>
  <div>Content that fades in on scroll</div>
</RevealItem>
```

### Pattern 2: Staggered Lists
Multiple items animate in sequence with delay.

```tsx
<RevealGroup className="space-y-4">
  {items.map(item => (
    <RevealItem key={item.id}>
      <div>{item.name}</div>
    </RevealItem>
  ))}
</RevealGroup>
```

### Pattern 3: Counter Animation
Numbers animate from 0 to target value.

```tsx
<CounterAnimation value={18} className="text-4xl font-bold" />
```

### Pattern 4: Form Field Animation
Form fields animate in with staggered timing.

```tsx
{fields.map((field, i) => (
  <motion.div
    custom={i}
    variants={fieldVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <input {...field} />
  </motion.div>
))}
```

### Pattern 5: Accordion Animation
Smooth height transitions with content reveal.

```tsx
<AnimatePresence>
  {expanded && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

---

## Performance Considerations

### GSAP ScrollTrigger
- Used for heavy animations tied to scroll position
- Registers cleanup on component unmount
- Use `once: true` for single-trigger animations
- Kills ScrollTrigger instances to prevent memory leaks

### Framer Motion
- Use `viewport={{ once: true }}` for one-time animations
- Avoid animating too many elements simultaneously
- Use `willChange` CSS property for frequently animated elements
- Layout animations should be used sparingly

### Best Practices
1. **Reduce Motion**: Respect `prefers-reduced-motion` media query (can be added to variants)
2. **Hardware Acceleration**: Animate `transform` and `opacity` only
3. **Lazy Loading**: Use `whileInView` instead of immediate animations
4. **Cleanup**: Always clean up GSAP contexts and ScrollTrigger listeners
5. **Testing**: Verify animations work on mobile and low-end devices

---

## Adding New Animations

### Step 1: Choose the Right Library
- **Framer Motion**: Component-specific, interactive animations
- **GSAP**: Scroll-based, performance-critical animations

### Step 2: Create Reusable Variants (if using Framer Motion)
Add to `/lib/animation-variants.ts`

```tsx
export const myAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}
```

### Step 3: Implement in Component
```tsx
import { myAnimation } from "@/lib/animation-variants"
import { motion } from "framer-motion"

export function MyComponent() {
  return (
    <motion.div variants={myAnimation} initial="hidden" animate="visible">
      Content
    </motion.div>
  )
}
```

### Step 4: Test Performance
- Use browser DevTools to monitor FPS
- Test on throttled network/CPU
- Verify scroll performance with multiple animations

---

## Browser Support

Both Framer Motion and GSAP support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Troubleshooting

### Animations not triggering
- Check if `whileInView` element is actually in viewport
- Verify `initial` and `animate` states are different
- Check browser console for errors

### Performance issues
- Reduce number of animated elements
- Switch to GSAP for heavy animations
- Use `layout={false}` if layout animation isn't needed
- Profile with DevTools Performance tab

### GSAP conflicts
- Ensure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Kill triggers on cleanup: `trigger.kill()`
- Check z-index and pointer-events if clicks don't work

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Web Animation Best Practices](https://web.dev/animations-guide/)
