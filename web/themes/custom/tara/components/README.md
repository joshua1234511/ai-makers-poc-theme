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

### 3. Cards (`cards`)

A flexible cards component for displaying content in a card layout with images, titles, text, and links.

**Usage:**
```twig
{{ include('tara:cards', {
  columns: 3,
  gap: '1.5rem',
  layout: 'auto-fit',
  min_card_width: '300px',
  card_style: 'elevated',
  show_image: true,
  show_title: true,
  show_content: true,
  show_link: true,
  image_position: 'top',
  class: 'my-cards-class'
}) }}
  {# Card items content here #}
{{ endinclude }}
```

**Props:**
- `columns` (integer, default: 3): Number of columns for fixed layout
- `gap` (string, default: '1rem'): Spacing between cards
- `layout` (string, default: 'auto-fit'): Layout type - 'auto-fit', 'auto-fill', or 'fixed'
- `min_card_width` (string, default: '300px'): Minimum width for cards
- `card_style` (string, default: 'default'): Card style - 'default', 'elevated', 'outlined', or 'flat'
- `show_image` (boolean, default: true): Display card images
- `show_title` (boolean, default: true): Display card titles
- `show_content` (boolean, default: true): Display card content
- `show_link` (boolean, default: true): Display card links/buttons
- `image_position` (string, default: 'top'): Image position - 'top', 'bottom', 'left', or 'right'
- `class` (string): Additional CSS classes

**Slot:**
- `default`: Card items content

**Individual Card Component (`card`):**

You can also use individual cards standalone:

```twig
{{ include('tara:card', {
  image: '/path/to/image.jpg',
  image_alt: 'Card image',
  title: 'Card Title',
  content: 'Card content text',
  link_url: '/path/to/page',
  link_text: 'Read More',
  card_style: 'elevated',
  image_position: 'top'
}) }}
```

### 4. Social Icons (`social-icons`)

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

### 4. Footer (`footer`)

Site footer component with multiple footer regions, copyright, social icons, and scroll-to-top button.

**Usage:**
```twig
{{ include('tara:footer', {
  show_footer_top: true,
  show_footer_blocks: true,
  show_copyright: true,
  show_social_icons: true,
  show_footer_bottom: true,
  show_scroll_to_top: true,
  site_name: 'My Site',
  copyright_text: 'Custom copyright text',
  facebook_url: 'https://facebook.com/mysite',
  twitter_url: 'https://twitter.com/mysite',
  fontawesome_six: true,
}) }}
  {% slot footer_top %}
    {# Footer top content #}
  {% endslot %}
  {% slot footer_first %}
    {# First footer block #}
  {% endslot %}
  {% slot footer_second %}
    {# Second footer block #}
  {% endslot %}
  {% slot footer_third %}
    {# Third footer block #}
  {% endslot %}
  {% slot footer_fourth %}
    {# Fourth footer block #}
  {% endslot %}
  {% slot footer_bottom %}
    {# Footer bottom content #}
  {% endslot %}
{{ endinclude }}
```

**Props:**
- `show_footer_top` (boolean, default: true): Display footer top section
- `show_footer_blocks` (boolean, default: true): Display footer blocks
- `show_copyright` (boolean, default: true): Display copyright text
- `show_social_icons` (boolean, default: true): Display social icons
- `show_footer_bottom` (boolean, default: true): Display footer bottom section
- `show_scroll_to_top` (boolean, default: true): Display scroll to top button
- `site_name` (string): Site name for copyright
- `copyright_text` (string): Custom copyright text (if empty, uses default format)
- Social media URLs: `facebook_url`, `twitter_url`, `instagram_url`, `linkedin_url`, `youtube_url`, `vimeo_url`, `vk_url`, `whatsapp_url`, `github_url`, `telegram_url`
- Icon library toggles: `fontawesome_four`, `fontawesome_five`, `fontawesome_six`, `bootstrapicons`
- `class` (string): Additional CSS classes

**Slots:**
- `footer_top`: Footer top region content
- `footer_first`: First footer block content
- `footer_second`: Second footer block content
- `footer_third`: Third footer block content
- `footer_fourth`: Fourth footer block content
- `footer_bottom`: Footer bottom region content

### 5. Call to Action (`call-to-action`)

Highlighted section with heading, text, and one or two CTA buttons.

**Usage:**
```twig
{{ include('tara:call-to-action', {
  heading: 'Get Started Today',
  text: 'Join thousands of satisfied customers and transform your business.',
  primary_button_text: 'Sign Up Now',
  primary_button_url: '/signup',
  secondary_button_text: 'Learn More',
  secondary_button_url: '/about',
  alignment: 'center',
  background_color: '#0073e6',
  text_color: '#ffffff',
  class: 'my-custom-class'
}) }}
```

**Props:**
- `heading` (string): Main heading text for the call to action
- `text` (string): Descriptive text content
- `primary_button_text` (string): Text for the primary CTA button
- `primary_button_url` (string): URL for the primary CTA button
- `secondary_button_text` (string, optional): Text for the secondary CTA button
- `secondary_button_url` (string, optional): URL for the secondary CTA button
- `alignment` (string, default: 'center'): Text alignment - 'left', 'center', or 'right'
- `background_color` (string, optional): Custom background color (CSS color value)
- `text_color` (string, optional): Custom text color (CSS color value)
- `class` (string): Additional CSS classes

### 6. Accordion (`accordion`)

Expand/collapse component for FAQs or grouped content.

**Usage:**
```twig
{{ include('tara:accordion', {
  allow_multiple: false,
  first_item_open: true,
  icon_position: 'right',
  class: 'my-custom-class'
}) }}
  {% slot items %}
    <div class="accordion-item">
      <button class="accordion-header" type="button">
        <span class="accordion-title">Question 1</span>
        <span class="accordion-icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <p>Answer to question 1 goes here.</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header" type="button">
        <span class="accordion-title">Question 2</span>
        <span class="accordion-icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <p>Answer to question 2 goes here.</p>
        </div>
      </div>
    </div>
  {% endslot %}
{{ endinclude }}
```

**Props:**
- `allow_multiple` (boolean, default: false): Allow multiple accordion items to be open at the same time
- `first_item_open` (boolean, default: false): Open the first accordion item by default
- `icon_position` (string, default: 'right'): Position of the expand/collapse icon - 'left' or 'right'
- `class` (string): Additional CSS classes

**Slot:**
- `items`: Accordion items with proper structure (see usage example above)

**Accordion Item Structure:**
Each accordion item should follow this structure:
```html
<div class="accordion-item">
  <button class="accordion-header" type="button">
    <span class="accordion-title">Item Title</span>
    <span class="accordion-icon" aria-hidden="true"></span>
  </button>
  <div class="accordion-content">
    <div class="accordion-content-inner">
      <!-- Item content here -->
    </div>
  </div>
</div>
```

### 7. Hero Banner (`hero-banner`)

A hero banner component with background image, heading, text, and call-to-action buttons.

**Usage:**
```twig
{{ include('tara:hero-banner', {
  background_image: '/path/to/hero-image.jpg',
  background_color: '#0073e6',
  overlay: true,
  overlay_opacity: 0.5,
  heading: 'Welcome to Our Site',
  subheading: 'Discover amazing products and services that will transform your business.',
  primary_button_text: 'Get Started',
  primary_button_url: '/signup',
  secondary_button_text: 'Learn More',
  secondary_button_url: '/about',
  text_alignment: 'center',
  height: '600px',
  min_height: '400px',
  content_width: 'container',
  class: 'my-hero-class'
}) }}
```

**Props:**
- `background_image` (string): URL path to the background image
- `background_color` (string): Background color (CSS color value). Used if no background image is provided
- `overlay` (boolean, default: false): Display a dark overlay over the background image
- `overlay_opacity` (number, default: 0.5): Opacity of the overlay (0.0 to 1.0)
- `heading` (string): Main heading text
- `subheading` (string): Subheading or description text
- `primary_button_text` (string): Text for the primary call-to-action button
- `primary_button_url` (string): URL for the primary button
- `secondary_button_text` (string, optional): Text for the secondary button
- `secondary_button_url` (string, optional): URL for the secondary button
- `text_alignment` (string, default: 'center'): Alignment of text content - 'left', 'center', or 'right'
- `height` (string, default: '600px'): Height of the hero banner (e.g., 600px, 80vh, 100vh)
- `min_height` (string, default: '400px'): Minimum height of the hero banner
- `content_width` (string, default: 'container'): Width constraint for content - 'container', 'full', or 'narrow'
- `class` (string): Additional CSS classes

**Slot:**
- `default`: Custom content to display in the hero banner (optional, overrides heading/subheading)

**Note:** The hero-banner component reuses the `button` component for its CTA buttons, ensuring consistent button styling across the theme.

### 8. Button (`button`)

A reusable button component with primary and secondary variants.

**Usage:**
```twig
{{ include('tara:button', {
  text: 'Click Me',
  url: '/path/to/page',
  variant: 'primary',
  size: 'medium',
  full_width: false,
  class: 'my-button-class'
}) }}
```

**Props:**
- `text` (string): Text displayed on the button
- `url` (string): URL the button links to
- `variant` (string, default: 'primary'): Button style variant - 'primary' or 'secondary'
- `size` (string, default: 'medium'): Button size - 'small', 'medium', or 'large'
- `full_width` (boolean, default: false): Make button full width
- `class` (string): Additional CSS classes

**Note:** This component is used internally by `hero-banner` and `call-to-action` components, but can also be used standalone.
  
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
- `tara/footer`
- `tara/call-to-action`
- `tara/accordion`
- `tara/hero-banner`
- `tara/button`

These libraries are automatically loaded when the components are used.
