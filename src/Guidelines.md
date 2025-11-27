# Resonance Music & Community - Design System Guidelines

## Overview
Resonance Music & Community adopts a "Pitchfork-inspired" editorial aesthetic. The focus is on content density, readability, and a strict grid system, abandoning the previous cinematic/parallax heavy design for a cleaner, information-first approach.

## Core Design Principles

### 1. Editorial First
- **Content Density**: Layouts are designed to show more content at once.
- **Hierarchy**: Clear distinction between Features, Reviews, and News.
- **Readability**: High contrast text, refined typography.

### 2. Minimalist Structure
- **Grid Layout**: Strict 12-column grid system.
- **Border & Dividers**: Use subtle 1px borders (`border-white/10` or `border-liquid-gold/20`) to separate content instead of heavy whitespace or shadows.
- **Flat Design**: Removed glassmorphism and heavy shadows in favor of solid backgrounds or subtle transparencies (`bg-white/5`).

## Color System

### Primary Palette
- **Midnight Black** (`#0a0a0a`): Primary background.
- **Liquid Gold** (`#d4af37`): Accent color for active states, tags, and highlights.
- **Platinum** (`#e5e5e5`): Primary text.
- **Obsidian** (`#1c1c1e`): Secondary backgrounds (cards, sidebars).

## Typography System

### Font Families
- **Display Font**: `Space Grotesk` (Headlines, Tags)
- **Body Font**: `Inter` (Body text, Metadata)

### Component Guidelines

#### Editorial Cards
- **Image**: 16:9 or 4:3 aspect ratio.
- **Tags**: Uppercase, small font size (`text-[10px]`), tracking widest.
- **Hover Effects**: Subtle opacity change or text color shift (Gold/White). No massive scaling or movements.

#### Navigation
- **Sticky Top Bar**: Height 64px (`h-16`).
- **Links**: Uppercase, bold, tracking widest.

#### Sidebar
- **Sticky Positioning**: Stays visible while scrolling feed.
- **Widgets**: Compact lists for events, newsletter, etc.

## Layout Structure
- **Container**: Max width `7xl` (1280px).
- **Main Grid**: 2/3 Feed (Left) + 1/3 Sidebar (Right) on Desktop.
- **Mobile**: Stacked layout.

---
*This design system focuses on the "Underground Luxury" aesthetic applied to a functional, high-volume editorial platform.*
