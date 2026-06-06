# Animation Quick Start Guide

## 🚀 Quick Overview

The Padmas Technologies website uses **GSAP** and **Framer Motion** for animations:
- **GSAP**: Scroll-triggered, performance-heavy animations (counters, reveals)
- **Framer Motion**: Interactive, component-based animations (forms, accordions)

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `/lib/animation-variants.ts` | Reusable Framer Motion variants |
| `/lib/use-gsap-animation.ts` | Custom GSAP hooks |
| `/components/counter-animation.tsx` | Animated number counter |
| `/components/contact-form.tsx` | Form with staggered animations |
| `/components/contact-faq.tsx` | Accordion with smooth transitions |
| `/docs/ANIMATIONS.md` | Complete documentation |

---

## 🎬 Common Animation Patterns

### Pattern 1: Fade In on Scroll
```tsx
import { Reveal, RevealItem } from "@/components/reveal"

<RevealItem>
  <div>Content that fades in</div>
</RevealItem>
```

### Pattern 2: Staggered List
```tsx
import { RevealGroup, RevealItem } from "@/components/reveal"

<RevealGroup>
  {items.map(item => (
    <RevealItem key={item.id}>
      <div>{item.name}</div>
    </RevealItem>
  ))}
</RevealGroup>
```

### Pattern 3: Number Counter
```tsx
import { CounterAnimation } from "@/components/counter-animation"

<CounterAnimation value={100} className="text-4xl font-bold" />
```

### Pattern 4: Form Field Animation
```tsx
import { motion } from "framer-motion"
import { fieldVariants } from "@/lib/animation-variants"

{fields.map((field, i) => (
  <motion.div custom={i} variants={fieldVariants} initial="hidden" whileInView="visible">
    <input {...field} />
  </motion.div>
))}
```

### Pattern 5: Accordion Animation
```tsx
import { motion, AnimatePresence } from "framer-motion"

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

## 🎨 Animation Variants

All variants are in `/lib/animation-variants.ts`:

```tsx
import {
  fadeInUp,      // Fade in with up motion
  fadeInDown,    // Fade in with down motion
  fadeInLeft,    // Fade in from left
  fadeInRight,   // Fade in from right
  scaleIn,       // Scale from small to normal
  slideInLeft,   // Large horizontal slide
  slideInRight,  // Large horizontal slide
  staggerContainer, // Container for staggered children
  staggerItem,   // Individual staggered item
  rotateIn       // Rotation with fade
} from "@/lib/animation-variants"
```

---

## 🎣 Custom Hooks

### useCounterAnimation()
Animate numbers from 0 to target on scroll.

```tsx
const ref = useCounterAnimation(100, 2) // Count to 100 over 2 seconds
return <div ref={ref} />
```

### useScrollReveal()
Auto-animate elements with `data-scroll-reveal` attribute.

```tsx
const ref = useScrollReveal()
return (
  <div ref={ref}>
    <div data-scroll-reveal>Fades in on scroll</div>
  </div>
)
```

### useGsapAnimation()
Create custom GSAP animations.

```tsx
const ref = useGsapAnimation((ctx) => {
  gsap.to(".element", { duration: 1, opacity: 1 })
})

return <div ref={ref}><div className="element">Content</div></div>
```

---

## 📄 Page Examples

### Contact Page
- **Staggered card reveals** for contact methods
- **Form field animations** with sequential timing
- **FAQ accordion** with smooth expand/collapse

### Careers Page
- **Benefit cards** with Reveal animations
- **Job listings** with hover effects
- **5-step process** with numbered indicators

### About Page
- **Counter animations** on stats section
- **Team cards** with reveals
- **Timeline** with staggered entries

---

## ⚡ Performance Tips

1. **Use `once: true`** for animations that trigger once
```tsx
<motion.div whileInView={{ opacity: 1 }} viewport={{ once: true }} />
```

2. **Only animate `transform` and `opacity`**
```tsx
// ✅ Good - Hardware accelerated
<motion.div animate={{ x: 100, opacity: 1 }} />

// ❌ Avoid - Blocks layout
<motion.div animate={{ width: 100 }} />
```

3. **Clean up GSAP contexts**
```tsx
useEffect(() => {
  const ctx = gsap.context(() => { /* ... */ })
  return () => ctx.revert() // Always cleanup!
}, [])
```

4. **Stagger for large lists**
```tsx
// Instead of animating 100 items simultaneously
<RevealGroup stagger={0.05}> {/* 0.05s between items */}
```

---

## 🔧 Adding a New Animation

### Step 1: Create Variant
Add to `/lib/animation-variants.ts`:
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

### Step 2: Use in Component
```tsx
import { myAnimation } from "@/lib/animation-variants"

export function MyComponent() {
  return (
    <motion.div variants={myAnimation} initial="hidden" animate="visible">
      Content
    </motion.div>
  )
}
```

### Step 3: Test Performance
- Check DevTools Performance tab
- Verify 60fps on throttled devices
- Test on mobile

---

## 🐛 Debugging

### Animations not triggering?
- Check `initial` and `animate` states differ
- Verify `whileInView` element is in viewport
- Check browser console for errors

### Performance issues?
- Reduce number of animated elements
- Use GSAP for heavy animations
- Profile with DevTools Performance tab

### GSAP not working?
```tsx
// Make sure to register plugins!
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
```

---

## 📚 Full Documentation

See `/docs/ANIMATIONS.md` for:
- Complete library overview
- All component APIs
- Animation patterns in detail
- Browser support
- Troubleshooting guide

---

## 🎯 Next Steps

1. **Review** `/docs/ANIMATIONS.md` for deep dive
2. **Explore** `/components/` for component examples
3. **Check** individual pages (`/app/*/page.tsx`) for usage
4. **Add** new animations using patterns above

---

## ✅ Checklist for New Features

- [ ] Use existing Reveal components when possible
- [ ] Use GSAP for scroll-based animations
- [ ] Use Framer Motion for interactive animations
- [ ] Clean up GSAP contexts on unmount
- [ ] Test on mobile devices
- [ ] Verify 60fps performance
- [ ] Document in code comments
