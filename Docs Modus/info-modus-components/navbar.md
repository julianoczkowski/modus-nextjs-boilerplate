# Modus Web Components: Navbar (`modus-wc-navbar`)

The `modus-wc-navbar` component is a customizable top-level navigation bar for applications. It supports various interactive elements like menus, search, and user profile display, and can be adapted for condensed layouts.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-navbar`:

| Property                | Attribute                 | Description                                                                                     | Type                                | Default                                                                                                                            |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `appsMenuOpen`          | `apps-menu-open`          | The open state of the apps menu.                                                                | `boolean \| undefined`              | `false`                                                                                                                            |
| `condensed`             | `condensed`               | Applies condensed layout and styling.                                                           | `boolean \| undefined`              | `false`                                                                                                                            |
| `condensedMenuOpen`     | `condensed-menu-open`     | The open state of the condensed menu.                                                           | `boolean \| undefined`              | `false`                                                                                                                            |
| `customClass`           | `custom-class`            | Custom CSS class to apply to the host element.                                                  | `string \| undefined`               | `''`                                                                                                                               |
| `mainMenuOpen`          | `main-menu-open`          | The open state of the main menu.                                                                | `boolean \| undefined`              | `false`                                                                                                                            |
| `notificationsMenuOpen` | `notifications-menu-open` | The open state of the notifications menu.                                                       | `boolean \| undefined`              | `false`                                                                                                                            |
| `searchDebounceMs`      | `search-debounce-ms`      | Debounce time in milliseconds for search input changes. Default is 300ms.                       | `number \| undefined`               | `300`                                                                                                                              |
| `searchInputOpen`       | `search-input-open`       | The open state of the search input.                                                             | `boolean \| undefined`              | `false`                                                                                                                            |
| `textOverrides`         | `text-overrides`          | Text replacements for the navbar. (See `INavbarTextOverrides` details below)                    | `INavbarTextOverrides \| undefined` | `undefined`                                                                                                                        |
| `userCard`              | `user-card`               | User information used to render the user card. (Required) (See `INavbarUserCard` details below) | `INavbarUserCard`                   | `undefined`                                                                                                                        |
| `userMenuOpen`          | `user-menu-open`          | The open state of the user menu.                                                                | `boolean \| undefined`              | `false`                                                                                                                            |
| `visibility`            | `visibility`              | The visibility of individual navbar buttons. (See `INavbarVisibility` details below)            | `INavbarVisibility \| undefined`    | `{ ai: false, apps: false, help: false, mainMenu: false, notifications: false, search: false, searchInput: false, user: true,   }` |

### `INavbarTextOverrides` Interface

Used by the `textOverrides` property:

- `apps` (string, optional): Replaces the text for "Apps" in the condensed menu.
- `help` (string, optional): Replaces the text for "Help" in the condensed menu.
- `notifications` (string, optional): Replaces the text for "Notifications" in the condensed menu.
- `search` (string, optional): Replaces the text for "Search" in the condensed menu.

### `INavbarUserCard` Interface

Used by the `userCard` property (this property is required):

- `avatarAlt` (string, optional): The alt value to set on the avatar.
- `avatarSrc` (string, optional): The avatar image source value.
- `email` (string): The email address of the user.
- `myTrimbleButton` (string, optional): Text override for the "Access MyTrimble" button, allows for translation.
- `name` (string): The name of the user.
- `signOutButton` (string, optional): Text override for the "Sign out" button, allows for translation.

### `INavbarVisibility` Interface

Used by the `visibility` property:

- `ai` (boolean, optional): Controls visibility of the AI button.
- `apps` (boolean, optional): Controls visibility of the apps button.
- `help` (boolean, optional): Controls visibility of the help button.
- `mainMenu` (boolean, optional): Controls visibility of the main menu button.
- `notifications` (boolean, optional): Controls visibility of the notifications button.
- `search` (boolean, optional): Controls visibility of the search button.
- `searchInput` (boolean, optional): Controls visibility of the search input.
- `user` (boolean, optional): Controls visibility of the user button.

## Events

| Event                         | Description                                                                                       | Type                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `aiClick`                     | Event emitted when the AI button is clicked or activated via keyboard.                            | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `appsClick`                   | Event emitted when the apps button is clicked or activated via keyboard.                          | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `appsMenuOpenChange`          | Event emitted when the apps menu open state changes.                                              | `CustomEvent<boolean>`                     |
| `condensedMenuOpenChange`     | Event emitted when the condensed menu open state changes.                                         | `CustomEvent<boolean>`                     |
| `helpClick`                   | Event emitted when the help button is clicked or activated via keyboard.                          | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `mainMenuOpenChange`          | Event emitted when the main menu open state changes.                                              | `CustomEvent<boolean>`                     |
| `myTrimbleClick`              | Event emitted when the user profile Access MyTrimble button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `notificationsClick`          | Event emitted when the notifications button is clicked or activated via keyboard.                 | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `notificationsMenuOpenChange` | Event emitted when the notifications menu open state changes.                                     | `CustomEvent<boolean>`                     |
| `searchChange`                | Event emitted when the search input value is changed.                                             | `CustomEvent<{ value: string; }>`          |
| `searchClick`                 | Event emitted when the search button is clicked or activated via keyboard.                        | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `searchInputOpenChange`       | Event emitted when the search input open state changes.                                           | `CustomEvent<boolean>`                     |
| `signOutClick`                | Event emitted when the user profile sign out button is clicked or activated via keyboard.         | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `trimbleLogoClick`            | Event emitted when the Trimble logo is clicked or activated via keyboard.                         | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `userMenuOpenChange`          | Event emitted when the user menu open state changes.                                              | `CustomEvent<boolean>`                     |

## Slots

The `modus-wc-navbar` component uses `modus-wc-toolbar` internally and supports several named slots for customization:

- **`main-menu`**: For custom content of the main menu, displayed when the main menu button is clicked.
- **`notifications`**: For custom content of the notifications menu.
- **`apps`**: For custom content of the apps menu (app drawer).
- **`start`**: Allows injecting custom HTML elements at the start section of the toolbar (after the logo/main menu button).
- **`center`**: Allows injecting custom HTML elements in the center section of the toolbar.
- **`end`**: Allows injecting custom HTML elements at the end section of the toolbar (before the standard right-aligned icons like search, apps, user).

## Usage Examples

Here's an example based on the `modus-wc-navbar.stories.ts` file:

**Default Navbar Configuration:**

This shows a navbar with all standard features enabled via the `visibility` prop and user information provided through `userCard`.

```html
<style>
  /* Example styling for slotted content and to give context in Storybook */
  div[id^='story--components-navbar--default'] {
    border: 1px dashed black; /* For visual boundary in Storybook */
    height: 365px; /* To allow dropdowns to show without being cut off */
  }
  [slot="main-menu"], [slot="notifications"], [slot="apps"] {
    background-color: #f0f0f0; /* Light gray for visibility */
    padding: 1rem;
    border: 1px solid #ccc;
    min-width: 200px; /* Ensure dropdowns have some width */
  }
  [slot="main-menu"] {
    background-color: #0063a3; /* Modus blue for main menu example */
    color: white;
    height: 305px; /* Fill available space in story */
  }
</style>

<modus-wc-navbar
  .userCard=${{
    name: 'Sonic the Hedgehog',
    email: 'sonic@trimble.com',
    avatarSrc: '[https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg](https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg)',
    avatarAlt: 'Sonic Avatar',
    myTrimbleButton: 'Access MyTrimble Account',
    signOutButton: 'Log Out'
  }}
  .visibility=${{
    ai: true,
    apps: true,
    help: true,
    mainMenu: true,
    notifications: true,
    search: true,
    searchInput: true, /* This controls initial visibility of the input itself, not the icon */
    user: true
  }}
  .textOverrides=${{
    apps: 'Applications',
    help: 'Support',
    notifications: 'Alerts',
    search: 'Find...'
  }}
  @aiClick=${() => console.log('AI Clicked')}
  @appsClick=${() => console.log('Apps Clicked')}
  @appsMenuOpenChange=${(e) => console.log('Apps Menu Open:', e.detail)}
  @mainMenuOpenChange=${(e) => console.log('Main Menu Open:', e.detail)}
  @notificationsClick=${() => console.log('Notifications Clicked')}
  @notificationsMenuOpenChange=${(e) => console.log('Notifications Menu Open:', e.detail)}
  @searchChange=${(e) => console.log('Search Value:', e.detail.value)}
  @searchInputOpenChange=${(e) => console.log('Search Input Open:', e.detail)}
  @userMenuOpenChange=${(e) => console.log('User Menu Open:', e.detail)}
  @signOutClick=${() => console.log('Sign Out Clicked')}
  @myTrimbleClick=${() => console.log('MyTrimble Clicked')}
  @trimbleLogoClick=${() => console.log('Trimble Logo Clicked')}>
  <div slot="main-menu">
    <h4>Main Menu</h4>
    <p>Custom content for the main application menu.</p>
    <modus-wc-menu-item label="Dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects"></modus-wc-menu-item>
  </div>
  <div slot="notifications">
    <h5>Notifications Panel</h5>
    <p>You have 3 new messages.</p>
  </div>
  <div slot="apps">
    <h6>Apps Drawer</h6>
    <p>Links to other applications.</p>
  </div>
  <span slot="center" style="font-weight: bold; margin-left: 1rem;">Application Title</span>
</modus-wc-navbar>

<script>
  // Example for programmatic control of menu open states
  // const navbar = document.querySelector('modus-wc-navbar');
  // navbar.mainMenuOpen = true; // To open main menu
</script>
```

**Condensed Navbar:**

Set `condensed="true"` for a more compact layout, which typically moves less critical icons into a "more options" (three-dot) menu.

```html
<modus-wc-navbar
  condensed="true"
  .userCard=${{ name: 'Condensed User', email: 'condensed@example.com' }}
  .visibility=${{ user: true, apps: true, help: true, search: true }}>
  </modus-wc-navbar>
```

_In condensed mode, features like Apps, Help, Notifications, and Search are typically accessed through a "more options" (three-dot) menu. The `textOverrides` prop can be used to customize the labels for these items within the condensed menu._

**Handling Search:**

The search icon toggles the visibility of a `modus-wc-text-input`. The `searchChange` event is emitted after a debounce period (configurable with `search-debounce-ms`) when the user types in the search input.

```html
<modus-wc-navbar
  .userCard=${{ name: 'Search User', email: 'search@example.com' }}
  .visibility=${{ search: true, searchInput: false, user: true }}
  @searchChange=${(e) => document.getElementById('searchResults').textContent = `Searching for: ${e.detail.value}`}>
</modus-wc-navbar>
<div id="searchResults"></div>
```

_Clicking the search icon will make the search input visible. Typing in it will trigger the `searchChange` event._

**Customizing User Profile Display:**
If `userCard.avatarSrc` is not provided, the user's initials (derived from `userCard.name`) will be displayed as the avatar.

```html
<modus-wc-navbar
  .userCard=${{ name: 'John Doe', email: 'jd@example.com' }}
  .visibility=${{ user: true }}>
</modus-wc-navbar>
```

This will display "JD" as the avatar.
