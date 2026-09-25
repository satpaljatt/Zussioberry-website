'use client';

import { useEffect } from 'react';

/**
 * Bulletproof Smooth Momentum Scroller
 * - Velocity-based damping (never locks or overshoots)
 * - Auto-syncs with native scrollbar drags & anchor jumps
 * - Safe boundary handling (no edge sticking)
 * - Ignores nested scrollable elements & horizontal scrolls
 */
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only apply on desktop non-touch screens with pointer precision
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;

    if (isTouch) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isScrolling = false;
    let animId = null;

    // Responsive easing factor (0.13 gives snappy luxury glide without delay)
    const DAMPING = 0.13;
    const MAX_STEP = 120; // limits extreme jumps from hyper-scroll wheels

    const getMaxScroll = () =>
      Math.max(
        0,
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
          window.innerHeight
      );

    const onWheel = (e) => {
      // Allow native horizontal scrolling
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Allow native scrolling inside nested scrollable elements
      let element = e.target;
      while (element && element !== document.body && element !== document.documentElement) {
        const overflowY = window.getComputedStyle(element).overflowY;
        const isScrollable =
          (overflowY === 'auto' || overflowY === 'scroll') &&
          element.scrollHeight > element.clientHeight;

        if (isScrollable) {
          const atTop = element.scrollTop <= 0 && e.deltaY < 0;
          const atBottom =
            element.scrollTop + element.clientHeight >= element.scrollHeight - 1 &&
            e.deltaY > 0;

          if (!atTop && !atBottom) {
            // Nested element has room to scroll, let native behavior handle it
            return;
          }
        }
        element = element.parentElement;
      }

      e.preventDefault();

      // Normalize delta across browsers (Firefox lines vs Chrome pixels)
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 33;
      else if (e.deltaMode === 2) delta *= window.innerHeight;

      // Clamp delta to prevent massive sudden jumps
      const clampedDelta = Math.max(-MAX_STEP, Math.min(MAX_STEP, delta));

      // Always anchor target from actual current position to prevent desync
      const actualScroll = window.scrollY;
      if (Math.abs(actualScroll - currentY) > 2) {
        currentY = actualScroll;
        targetY = actualScroll;
      }

      const maxScroll = getMaxScroll();
      targetY = Math.max(0, Math.min(targetY + clampedDelta * 1.35, maxScroll));

      if (!isScrolling) {
        isScrolling = true;
        animId = requestAnimationFrame(render);
      }
    };

    const render = () => {
      const maxScroll = getMaxScroll();
      // Ensure target stays within live document bounds (dynamic images/resize)
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      // Smooth lerp interpolation
      currentY += (targetY - currentY) * DAMPING;

      // Snap and stop loop when close to target
      if (Math.abs(targetY - currentY) < 0.6) {
        currentY = targetY;
        window.scrollTo(0, Math.round(currentY));
        isScrolling = false;
        return;
      }

      window.scrollTo(0, Math.round(currentY));
      animId = requestAnimationFrame(render);
    };

    // Keep state perfectly in sync if user drags native scrollbar
    const onScroll = () => {
      if (!isScrolling) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    // Immediate sync on resize
    const onResize = () => {
      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <>{children}</>;
}
