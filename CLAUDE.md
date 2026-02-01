# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Professional portfolio website for fintech consultant Meaghan Johnson (https://www.meaghanjohnson.io/). Static single-page site deployed on Vercel.

## Commands

- **Local dev server:** `npx vercel dev` (or open `public/index.html` directly in a browser)
- **No test suite, linter, or build step configured**

## Architecture

**Static site** served from `public/` directory via Vercel. No server-side code.

- `public/index.html` — Single-page HTML (assembled from former Handlebars templates)
- `vercel.json` — Vercel config, sets `public/` as the output directory

**Frontend JS (`public/js/`):**
- `script.js` — Hamburger menu modal, scroll-based header hide/show, principles carousel (15s auto-rotate with dot navigation)
- `3d.js` — Three.js animated line-segment sphere, only renders on viewports >= 1200px wide. Uses Three.js r85 from CDN.

**CSS (`public/styles/`):** Mobile-first responsive design using separate stylesheets per breakpoint (320px, 600px, 900px, 1200px) loaded via media queries.

**Contact form** submits to Formspree (third-party service).
