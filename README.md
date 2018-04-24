[Click here to view app](https://higher-order-practice.herokuapp.com/)

How to use:
- The Resources tab displays a "secret" that you need to be logged in to see
- Click the "sign in button" to log in
- Once logged in, click resources again to see the secret appear on the page
- If you click "Sign Out" and then try to click on Resources, it will push you back to the home page where you will need to log in again

--------
Quick Overview of app

**Purpose**
- To practice working with higher order higher order components

**Things I learned**
- How to compose and work with higher order components
- A better understanding of "why" behind them
- connecting higher order components to redux state
- I ran into a couple of snags with react router as well, specifically:
        - you cant pass children into Route,
        you must add Route inside child component
        - instead of using context, wrap component in "withRouter" to push.
