React
=====

## Wifi

**itenium-guest: Wifi4Ufree**


## Run

```bash
# Fork https://github.com/itenium-be/React-New-Features on Github

git clone https://github.com/your-user-name/React-New-Features
cd React-New-Features/react-socks
npm install
npm start
```


## Cheat Sheet

Voor tijdens de oefeningen misschien handig :)  
[devhints.io/react](https://devhints.io/react)


## Today's Menu

- Create-React-App v2: TypeScript & SASS support!
- Quick Tutorial: What is this React thing again?
- Fragments: Avoid superfluous `<div>`s in the resulting DOM.
- Error Boundaries: Recover from `render()` crashes (not event handlers). NOT for normal flow!
- Suspense & lazy: Code-Splitting. Data Fetching will arrive later!
- Memo: Component and PureComponent (no `shouldComponentUpdate`) + FunctionComponent and Memo.
- Context: Global variables: Current locale, UI theme, current user, ...
- Hooks: Use class Component features in FunctionComponents!
    - Extract cross cutting concerns in separate hooks instead of littering Component Lifecycle methods
    - Convention: Hook names start with `use`. (Linting rule)
    - Limitation: Branching is not allowed before any hook call. (no `if () { useHook() }`)
    - Builtin hooks:
        - [State Hook](https://reactjs.org/docs/hooks-state.html): `useState`
        - [Effect Hook](https://reactjs.org/docs/hooks-effect.html): `useEffect`
        - [Context Hook](https://reactjs.org/docs/hooks-reference.html#usecontext): `useContext`
        - [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)
        - [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) and [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo): Memoize result
        - ... and more or [create your own](https://reactjs.org/docs/hooks-custom.html)



## create-react-app

```bash
npx create-react-app react-socks --typescript

cd react-socks
npm install react-router-dom --save
npm install node-sass --save
```


## Not Covered

The new profiler.

- create-react-app: analyse build
- https://reactjs.org/docs/strict-mode.html
- https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab
