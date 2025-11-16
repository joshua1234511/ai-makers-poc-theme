# Tara Theme SDC Components

This directory contains Single Directory Components (SDC) for the Tara theme, compatible with Drupal Canvas.

## Components

### 1. Grid Section (`grid-section`)

A flexible grid layout component with configurable columns, spacing, and responsive behavior.

**Usage:**
```twig
{{ include('tara:grid-section', {
  columns: 3,
  gap: '1rem',
  layout: 'auto-fit',
  min_item_width: '265px',
  class: 'my-custom-class'
}) }}
  {# Grid items content here #}
{{ endinclude }}
```

**Props:**
- `columns` (integer, default: 3): Number of columns for fixed layout
- `gap` (string, default: '1rem'): Spacing between grid items
- `layout` (string, default: 'auto-fit'): Layout type - 'auto-fit', 'auto-fill', or 'fixed'
- `min_item_width` (string, default: '265px'): Minimum width for grid items
- `class` (string): Additional CSS classes

**Slot:**
- `default`: Content items to display in the grid

### 2. Header (`header`)

Site header component with logo, navigation menu, search, and social icons.

**Usage:**
```twig
{{ include('tara:header', {
  show_header_top: true,
  show_site_branding: true,
  show_primary_menu: true,
  show_search: true,
  show_social_icons: true,
  site_logo: '/path/to/logo.png',
  site_name: 'My Site',
  site_slogan: 'My Site Slogan',
  facebook_url: 'https://facebook.com/mysite',
  twitter_url: 'https://twitter.com/mysite',
}) }}
  {% slot site_branding %}
    {# Site branding content #}
  {% endslot %}
  {% slot primary_menu %}
    {# Primary menu content #}
  {% endslot %}
  {% slot search_box %}
    {# Search form content #}
  {% endslot %}
{{ endinclude }}
```

**Props:**
- `show_header_top` (boolean, default: true): Display header top section
- `show_site_branding` (boolean, default: true): Display site branding
- `show_primary_menu` (boolean, default: true): Display primary menu
- `show_search` (boolean, default: true): Display search
- `show_social_icons` (boolean, default: true): Display social icons
- `site_logo` (string): Site logo URL
- `site_name` (string): Site name
- `site_slogan` (string): Site slogan
- Social media URLs: `facebook_url`, `twitter_url`, `instagram_url`, `linkedin_url`, `youtube_url`, `vimeo_url`, `vk_url`, `whatsapp_url`, `github_url`, `telegram_url`
- `class` (string): Additional CSS classes

**Slots:**
- `header_top`: Header top region content
- `site_branding`: Site branding block content
- `primary_menu`: Primary navigation menu content
- `search_box`: Search form block content

### 3. Social Icons (`social-icons`)

Social media icons component for header and footer.

**Usage:**
```twig
{{ include('tara:social-icons', {
  facebook_url: 'https://facebook.com/mysite',
  twitter_url: 'https://twitter.com/mysite',
  instagram_url: 'https://instagram.com/mysite',
  class: 'my-custom-class'
}) }}
```

**Props:**
- Social media URLs: `facebook_url`, `twitter_url`, `instagram_url`, `linkedin_url`, `youtube_url`, `vimeo_url`, `vk_url`, `whatsapp_url`, `github_url`, `telegram_url`
- `class` (string): Additional CSS classes

## Integration with Drupal Canvas

These components are designed to work with Drupal Canvas. You can:

1. Use them in Layout Builder
2. Reference them in other templates
3. Use them in Drupal Canvas page builder

## Component Structure

Each component follows the SDC structure:
```
component-name/
  ├── component-name.component.yml  # Component metadata and props
  ├── component-name.twig            # Twig template
  ├── component-name.css             # Component styles
  └── component-name.js              # Component JavaScript (if needed)
```

## Libraries

Component libraries are defined in `tara.libraries.yml`:
- `tara/grid-section`
- `tara/header`
- `tara/social-icons`

These libraries are automatically loaded when the components are used.
