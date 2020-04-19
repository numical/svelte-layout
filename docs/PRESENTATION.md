# The Return of Templates ..?

## What does a Web UI do?

- add / remove / change DOM elements
- fetch / send data

## History

1. static HTML pages
   - DOM vs CSS vs JS
1. server-generated pages - server-side includes
   - CGI / Perl etc.
1. server-generated pages - frameworks
   - architectures - MVC / MVP etc.
   - technologies - Java / JSP / ASP etc.
   - separation of concerns == separation of technologies
   - **templates**
1. AJAX! (XHR revolution)
1. client-generated pages - DOM / JQuery
   - equivalent to server-side includes
1. client-generated pages - frameworks
   - same architectures
   - two-way bindings
   - **templates**
   - apotheosis: Angular
1. client-generated pages - components
   - React
   - "rethinking best practice"
   - separation of concerns != separation of technologies
1. and now..?

## What is React?

- components
- javascript All The Things
- uni-directional data flow
- model single state at a time
  - use diff'ing virtual DOM
- huge success
  - architecturally
  - (though IMHO state management such as redux not so much)

## What is Svelte?

- **templates** ... with a twist:
  > Traditional frameworks allow you to write declarative state-driven code, but there's a penalty: the browser must do extra work to convert those declarative structures into DOM operations ... Svelte runs at build time, converting your components into highly efficient imperative code that surgically updates the DOM.
  > (https://svelte.dev/blog/svelte-3-rethinking-reactivity)

## React vs Svelte

|               React                |                 Svelte                  |
| :--------------------------------: | :-------------------------------------: |
|             components             |               components                |
|            single state            |                 **not**                 |
|            virtual DOM             |       architecture compiled away        |
| uni-directional data flow: `props` | uni-directional data flow: `export let` |
|             `Context`              |                 `Store`                 |
|              `useXXX`              | 'reactive declarations' - weird syntax  |
|      composition: `children`       |          composition: `slots`           |

## Links

format

- demo: https://svelte-layout.now.sh/
- repo: https://github.com/numical/svelte-layout

## Constraints

- only template components are reactive
- 'transition' gotchas

## Outstanding Questions

1. rollup build - images / deferred load
