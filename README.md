In this project, let's build a **Coin Toss Game** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif" alt="coin toss game output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the app should have heads image and total, heads, tails counts as **0**
- When the **Toss Coin** button is clicked, then the toss result should be generated using the below expression

  ```
  const tossResult = Math.floor(Math.random() * 2)
  ```

- If the number generated from the given expression is `0` then the result should be `heads` or else the result should be `tails`
- When the **Toss Coin** is clicked, and the result is `heads` then
  - The heads image should be displayed
  - The heads count should be incremented by one
  - The total should be incremented by one
- When the **Toss Coin** is clicked, and the result is `tails` then
  - The tails image should be displayed
  - The tails count should be incremented by one
  - The total should be incremented by one

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/heads-img.png](https://assets.ccbp.in/frontend/react-js/heads-img.png)
- [https://assets.ccbp.in/frontend/react-js/tails-img.png](https://assets.ccbp.in/frontend/react-js/tails-img.png)

</details>






